import re
import json

def parse_patronymic_sequence():
    with open("source_lineage.txt", "r", encoding="utf-8") as f:
        lines = [l.strip() for l in f.readlines()]

    blocks = []
    
    current_father_code = ""
    current_father_name = ""
    current_father_gen = 30
    current_main_branch = "أعقاب شارح البحر"
    current_children_raw = []
    current_notes = ""
    
    def finalize_block():
        nonlocal current_father_code, current_father_name, current_father_gen, current_main_branch, current_children_raw, current_notes
        if not current_father_name and not current_father_code and not current_children_raw:
            return
            
        # Parse children from collected raw lines
        children = []
        chunk = " \n ".join(current_children_raw)
        
        # Check if father only had daughters or no offspring
        if re.search(r'^\s*بنات\s*$', chunk.strip(), re.M) or re.search(r'وأعقب\s*:\s*بنات', chunk):
            children.append({
                "code": f"{current_father_gen+1}/1" if current_father_gen else "",
                "name": "(أعقاب بنات)",
                "generation": current_father_gen + 1 if current_father_gen else 41,
                "hasDaughters": True
            })
        elif re.search(r'^\s*(?:لم يعقب|لا عقب له|مات ولا عقب له|ليس له عقب|ولا عقب له)\s*$', chunk.strip(), re.M):
            children.append({
                "code": f"{current_father_gen+1}/1" if current_father_gen else "",
                "name": "(لا عقب له)",
                "generation": current_father_gen + 1 if current_father_gen else 41,
                "noOffspring": True
            })
        else:
            # Match child tokens: (\d+)\s*[/／]\s*(\d+)\s*[–—\-:=]*\s*([^\d\n/／]+)?
            # Note: in the text, child codes look like "41/ 1 – محمد" or "41/ 2 – أحمد" or "31/ 1= محسن"
            tokens = re.finditer(r'(\d+)\s*[/／]\s*(\d+)\s*[–—\-:=]*\s*([^\d\n/／]+)?', chunk)
            for m in tokens:
                gen = int(m.group(1))
                num = int(m.group(2))
                code_str = f"{gen}/{num}"
                raw_val = (m.group(3) or "").strip()
                
                # Check status
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
                    
                child_entry = {
                    "code": code_str,
                    "name": name_clean,
                    "generation": gen
                }
                if is_martyr:
                    child_entry["isMartyr"] = True
                if no_offspring:
                    child_entry["noOffspring"] = True
                if has_daughters:
                    child_entry["hasDaughters"] = True
                    
                children.append(child_entry)
                
        if current_father_name or children:
            blocks.append({
                "id": f"seq-block-{len(blocks)+1}",
                "mainBranch": current_main_branch,
                "fatherCode": current_father_code,
                "fatherName": current_father_name,
                "fatherFullName": f"أعقاب: {current_father_name}",
                "generation": current_father_gen,
                "children": children
            })
            
        current_father_code = ""
        current_father_name = ""
        current_children_raw = []
        current_notes = ""

    i = 0
    while i < len(lines):
        line = lines[i]
        if not line or line.startswith('______') or line.startswith('___') or line == 'الفرع الثاني:' or line == 'الفرع الأول//' or line == 'الفرع الأول:':
            i += 1
            continue
            
        if line == 'أعقاب شارح البحر:' or line == 'أعقاب شارح البحر':
            current_main_branch = "أعقاب شارح البحر"
            i += 1
            continue
            
        # Check أعقاب = ...
        aaqab_m = re.match(r'^(?:أعقاب|اعقاب|أعفاب)\s*[=/／]+\s*(.*)$', line)
        if aaqab_m:
            finalize_block()
            h_text = aaqab_m.group(1).strip()
            if not h_text and i + 1 < len(lines):
                i += 1
                h_text = lines[i].strip()
            
            # Extract code if present
            code_m = re.match(r'^(\d+)\s*[/／]\s*(\d+)\s*[–—\-:=]*\s*(.*)$', h_text)
            if code_m:
                current_father_gen = int(code_m.group(1))
                current_father_code = f"{code_m.group(1)}/{code_m.group(2)}"
                current_father_name = re.sub(r'[-–—=/_*#@:]+', ' ', code_m.group(3)).strip()
            else:
                # Estimate generation
                b_count = h_text.count(' بن ') + h_text.count(' بن')
                current_father_gen = 30
                current_father_code = ""
                current_father_name = h_text
            i += 1
            continue
            
        # Check code + father name + وأعقب
        code_m = re.match(r'^(\d+)\s*[/／]\s*(\d+)\s*[–—\-:=]+\s*(.*)$', line)
        if code_m:
            gen = int(code_m.group(1))
            num = int(code_m.group(2))
            rest = code_m.group(3).strip()
            
            # Check if this is a father or children
            # A father line has 'وأعقب' either in current line or next line, OR has ' بن ' without multiple codes on one line
            is_multiple = bool(re.search(r'\d+\s*[/／]\s*\d+', rest))
            is_next_wa_aqaba = (i + 1 < len(lines) and re.match(r'^(?:و?\s*أعقب|و?\s*اعقب|و?\s*أغقب)\s*[:：]?', lines[i+1].strip()))
            has_wa_aqaba = bool(re.search(r'(?:و?\s*أعقب|و?\s*اعقب|و?\s*أغقب)', rest))
            
            if (is_next_wa_aqaba or has_wa_aqaba or (' بن ' in rest and not is_multiple)):
                finalize_block()
                current_father_gen = gen
                current_father_code = f"{gen}/{num}"
                
                # Keep full patronymic chain!
                cleaned_name = re.sub(r'(?:و?\s*أعقب|و?\s*اعقب|و?\s*أغقب).*$', '', rest)
                cleaned_name = re.sub(r'[-–—=/_*#@:]+', ' ', cleaned_name)
                cleaned_name = re.sub(r'\s+', ' ', cleaned_name).strip()
                
                current_father_name = cleaned_name or f"ابن {current_father_code}"
                
                # If next line is 'وأعقب:', advance past it
                if is_next_wa_aqaba:
                    i += 1
                    # Check if next line also has daughters or no offspring
                    wa_line = lines[i].strip()
                    after_wa = re.sub(r'^(?:و?\s*أعقب|و?\s*اعقب|و?\s*أغقب)\s*[:：]?', '', wa_line).strip()
                    if after_wa:
                        current_children_raw.append(after_wa)
                        
                i += 1
                continue
                
        # Otherwise it's a child line
        current_children_raw.append(line)
        i += 1
        
    finalize_block()
    return blocks

blocks = parse_patronymic_sequence()
print(f"Total blocks in exact patronymic sequence: {len(blocks)}")
print("First 10 sequential patronymic blocks:")
for b in blocks[:10]:
    c_str = ", ".join([f"{c['name']} ({c['code']})" for c in b['children'][:3]])
    print(f"[{b['generation']}] {b['fatherCode']} - {b['fatherName']} -> Children: {c_str}")
