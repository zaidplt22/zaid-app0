import re

test_lines = [
    "42/ 1 – علاء   42/ 2 – مصطفى ( شهيد)  42/ 3 - زيد",
    "42/ 3 – صلاح 42/ 4 - فهد (شهيد) لا عقب له",
    "42/ 3 – جوهر (شهيد)      42/ 4 – أحمد (شهيد)      42/ 5 – الحمزة",
    "41/ 1 – محمد             41/ 2 – أحمد",
    "38/ 1 – ناجي ليس له عقب",
    "37 / 1 – 37 / 2 –",
    "40/ 1 – عبد الله ( لم يعقب )",
    "42/ 1 – مهند 42/ 2 – محمد",
    "وأعقب : بنات",
    "وأعقب : لم يعقب"
]

def parse_line_to_children(chunk, father_gen=40):
    children = []
    
    # Split chunk by code tokens: (\d+\s*[/／]\s*\d+\s*[–—\-:=]*)
    # Let's find all codes with their positions
    pattern = re.compile(r'(\d+)\s*[/／]\s*(\d+)\s*[–—\-:=]*')
    matches = list(pattern.finditer(chunk))
    
    if not matches:
        if re.search(r'بنات', chunk):
            return [{"code": f"{father_gen+1}/1", "name": "(أعقاب بنات)", "generation": father_gen+1, "hasDaughters": True}]
        if re.search(r'لم يعقب|لا عقب|ليس له عقب', chunk):
            return [{"code": f"{father_gen+1}/1", "name": "(لا عقب له)", "generation": father_gen+1, "noOffspring": True}]
        return []
        
    for i, m in enumerate(matches):
        gen = int(m.group(1))
        num = int(m.group(2))
        code_str = f"{gen}/{num}"
        
        start_val = m.end()
        end_val = matches[i+1].start() if i + 1 < len(matches) else len(chunk)
        raw_val = chunk[start_val:end_val].strip()
        
        is_martyr = bool(re.search(r'شهيد', raw_val))
        no_offspring = bool(re.search(r'لم يعقب|لا عقب له|ليس له عقب|مات و\s*لا عقب|انقرض|متوفى ولا عقب|\(×\)|×', raw_val))
        has_daughters = bool(re.search(r'بنات|بنت', raw_val))
        
        # Clean name
        name_clean = re.sub(r'[\(\[\{].*?[\)\]\}]', '', raw_val)
        name_clean = re.sub(r'[-–—=/_*#@:]+', ' ', name_clean)
        name_clean = re.sub(r'\b(متوفى|شهيد|لم يعقب|لا عقب له|ليس له عقب|بنات|وأعقب|واعقب)\b', '', name_clean)
        name_clean = re.sub(r'\s+', ' ', name_clean).strip()
        
        if not name_clean:
            name_clean = "(لم تتم موافاتنا)"
            
        c = {
            "code": code_str,
            "name": name_clean,
            "generation": gen
        }
        if is_martyr: c["isMartyr"] = True
        if no_offspring: c["noOffspring"] = True
        if has_daughters: c["hasDaughters"] = True
        children.append(c)
        
    return children

for tl in test_lines:
    res = parse_line_to_children(tl)
    print(f"INPUT: {tl}")
    for c in res:
        print(f"   -> {c}")
