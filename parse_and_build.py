import re
import json

def clean_arabic(s):
    if not s:
        return ""
    s = s.replace('ـ', '')
    s = re.sub(r'[\u200e\u200f\u202a-\u202e]', '', s)
    s = re.sub(r'\s+', ' ', s)
    return s.strip()

with open('source_lineage.txt', 'r', encoding='utf-8') as f:
    full_text = f.read()

# Normalize delimiters
full_text = full_text.replace('\r\n', '\n').replace('\r', '\n')

# Find all blocks separated by headers or father definitions
# We can identify father declarations:
# Matches patterns like:
# (Optional أعقاب= / أعقاب //) (Optional Code) (Father Name) (وأعقب/واعقب/أعقب: ...)

lines = full_text.split('\n')

blocks = []
current_header = ""
current_father_name = ""
current_father_code = ""
current_father_gen = 30
current_children = []

def extract_children(lines_chunk):
    # Returns list of { code, name, generation, isMartyr, noOffspring, hasDaughters }
    children = []
    text_chunk = " \n ".join(lines_chunk)
    
    # Handle "بنات" or "لم يعقب" directly under father
    if re.search(r'^\s*بنات\s*$', text_chunk, re.M) or re.search(r'وأعقب\s*:\s*بنات', text_chunk):
        children.append({
            "code": "",
            "name": "(أعقب بنات)",
            "generation": current_father_gen + 1 if current_father_gen else 41,
            "hasDaughters": True
        })
        return children

    if re.search(r'^\s*(?:لم يعقب|لا عقب له|مات ولا عقب له|ليس له عقب)\s*$', text_chunk, re.M):
        children.append({
            "code": "",
            "name": "(لا عقب له)",
            "generation": current_father_gen + 1 if current_father_gen else 41,
            "noOffspring": True
        })
        return children

    # Find all code tokens like 40/ 1 – name or 40/1 – name
    # Regex to match: (\d+)\s*[/／]\s*(\d+)\s*[–—\-:]*\s*([^0-9\n/／]+)?
    
    pattern = re.compile(r'(\d+)\s*[/／]\s*(\d+)\s*[–—\-:]*\s*([^0-9\n/／]+)?')
    matches = list(pattern.finditer(text_chunk))
    
    for m in matches:
        gen = int(m.group(1))
        num = int(m.group(2))
        raw_name = m.group(3) or ""
        raw_name = clean_arabic(raw_name)
        
        # Check status flags
        is_martyr = bool(re.search(r'شهيد', raw_name))
        no_offspring = bool(re.search(r'لم يعقب|لا عقب له|ليس له عقب|مات و\s*لا عقب|انقرض|متوفى ولا عقب|\(×\)|×', raw_name))
        has_daughters = bool(re.search(r'بنات|بنت', raw_name))
        
        # Clean name text
        cleaned = re.sub(r'[\(\[\{].*?[\)\]\}]', '', raw_name)
        cleaned = re.sub(r'[-–—=/_*#@]+', ' ', cleaned)
        cleaned = re.sub(r'\b(متوفى|شهيد|لم يعقب|لا عقب له|ليس له عقب|بنات)\b', '', cleaned)
        cleaned = clean_arabic(cleaned)
        
        if not cleaned:
            cleaned = "(لم تتم موافاتنا)"
            
        code_str = f"{gen}/{num}"
        
        child_obj = {
            "code": code_str,
            "name": cleaned,
            "generation": gen
        }
        if is_martyr:
            child_obj["isMartyr"] = True
        if no_offspring:
            child_obj["noOffspring"] = True
        if has_daughters:
            child_obj["hasDaughters"] = True
            
        children.append(child_obj)
        
    return children

print("Testing chunk extractor...")
