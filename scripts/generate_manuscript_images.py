import os
import zlib
import struct
import math

os.makedirs('public/images', exist_ok=True)
os.makedirs('webtoapp_bundle/images', exist_ok=True)

def make_png(width, height, rgb_func):
    raw_data = bytearray()
    for y in range(height):
        raw_data.append(0)  # filter type 0
        for x in range(width):
            r, g, b = rgb_func(x, y, width, height)
            raw_data.extend([r, g, b])
    
    def chunk(tag, data):
        return struct.pack('>I', len(data)) + tag + data + struct.pack('>I', zlib.crc32(tag + data) & 0xffffffff)

    ihdr = struct.pack('>IIBBBBB', width, height, 8, 2, 0, 0, 0)
    idat = zlib.compress(bytes(raw_data), 6)
    return b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', ihdr) + chunk(b'IDAT', idat) + chunk(b'IEND', b'')

def generate_archival_image(index, width=640, height=880):
    # Palette: Warm Parchment, Dark Ink, Gold Accents
    # Parchment background: (245, 238, 218) with vignette & subtle texture
    # Border: (120, 80, 40) and Gold (200, 160, 60)
    
    # We can pre-calculate some features
    cx, cy = width / 2.0, height / 2.0
    
    def rgb(x, y, w, h):
        # Distance from center for subtle vignette
        dx = (x - cx) / cx
        dy = (y - cy) / cy
        dist = math.sqrt(dx*dx + dy*dy)
        vignette = max(0.0, min(1.0, dist * 0.45))
        
        # Base parchment color
        base_r = int(246 - vignette * 35)
        base_g = int(239 - vignette * 42)
        base_b = int(220 - vignette * 55)
        
        # Double outer border
        border_width = 16
        inner_border_width = 24
        
        # Outer border line
        if x < border_width or x >= w - border_width or y < border_width or y >= h - border_width:
            return (90, 60, 30) # Dark walnut border
            
        # Gold accent line
        if (x == border_width + 3 or x == w - border_width - 4 or 
            y == border_width + 3 or y == h - border_width - 4):
            return (212, 175, 55) # Gold
            
        # Inner fine line
        if (x == inner_border_width or x == w - inner_border_width or 
            y == inner_border_width or y == h - inner_border_width):
            return (140, 100, 50)
            
        # Header banner zone (top)
        if 40 <= y <= 110 and inner_border_width + 10 <= x <= w - inner_border_width - 10:
            if y == 40 or y == 110 or x == inner_border_width + 10 or x == w - inner_border_width - 10:
                return (180, 140, 60)
            return (235, 222, 190) # Slightly darker parchment for header box
            
        # Central circular medallion/seal representing archival certificate
        medallion_y = 230
        mdx = x - cx
        mdy = y - medallion_y
        m_dist = math.sqrt(mdx*mdx + mdy*mdy)
        if 68 <= m_dist <= 72:
            return (212, 175, 55) # Outer gold ring
        if 62 <= m_dist <= 65:
            return (120, 80, 35) # Inner dark ring
        if m_dist < 62:
            # Inside seal
            if m_dist < 20:
                return (160, 110, 45)
            return (240, 228, 195)
            
        # Horizontal manuscript writing guide lines simulating ancient archival text lines
        if 340 <= y <= 750 and inner_border_width + 30 <= x <= w - inner_border_width - 30:
            line_spacing = 32
            line_offset = (y - 340) % line_spacing
            if line_offset == 0:
                return (210, 195, 170) # Fine guideline
            # Simulate ink strokes on lines
            if line_offset in (1, 2, 3):
                pseudo_char = math.sin((x + index * 17) * 0.15) * math.cos(y * 0.3)
                if pseudo_char > 0.35 and (x % 12 != 0):
                    return (70, 50, 35) # Antique brown-black ink
                    
        # Bottom stamp / verification seal area
        stamp_cx = w - 120
        stamp_cy = h - 90
        sdx = x - stamp_cx
        sdy = y - stamp_cy
        s_dist = math.sqrt(sdx*sdx + sdy*sdy)
        if 36 <= s_dist <= 40:
            return (180, 50, 50) # Red archival seal
        if s_dist < 36 and (int(x + y) % 6 == 0):
            return (190, 60, 60) # Red stamp pattern
            
        return (max(0, min(255, base_r)), max(0, min(255, base_g)), max(0, min(255, base_b)))

    return make_png(width, height, rgb)

print("Starting generation of 74 archival manuscript images...")
for i in range(1, 75):
    filename = f"manuscript-{str(i).padStart(2, '0') if hasattr(str(i), 'padStart') else str(i).zfill(2)}.png"
    filepath = os.path.join('public/images', filename)
    webtoapp_path = os.path.join('webtoapp_bundle/images', filename)
    
    # We generate a crisp 320x440 image (compact, high-speed, perfect for responsive mobile & desktop)
    img_data = generate_archival_image(i, width=320, height=440)
    with open(filepath, 'wb') as f:
        f.write(img_data)
    with open(webtoapp_path, 'wb') as f:
        f.write(img_data)
        
    if i % 15 == 0 or i == 74:
        print(f"Generated {i}/74 images...")

print("All 74 manuscript images generated successfully in public/images/ and webtoapp_bundle/images/!")
