import re
import json

def parse_code_token(num1_str, num2_str):
    n1 = int(num1_str)
    n2 = int(num2_str)
    
    if 25 <= n1 <= 45:
        gen = n1
        idx = n2
        raw_code = f"{n1}/{n2}"
    elif 25 <= n2 <= 45:
        gen = n2
        idx = n1
        raw_code = f"{n1}/{n2}"
    else:
        gen = n1
        idx = n2
        raw_code = f"{n1}/{n2}"
        
    return gen, idx, raw_code

def build_dataset():
    with open('source_lineage.txt', 'r', encoding='utf-8') as f:
        text = f.read()

    lines = [l.strip() for l in text.split('\n')]
    blocks = []

    current_father_code = ""
    current_father_name = ""
    current_father_gen = 30
    current_main_branch = "أعقاب شارح البحر"
    current_children_raw = []

    def finalize_block():
        nonlocal current_father_code, current_father_name, current_father_gen, current_main_branch, current_children_raw
        if not current_father_name and not current_father_code and not current_children_raw:
            return
            
        chunk = " \n ".join(current_children_raw)
        children = []
        
        pattern = re.compile(r'(\d+)\s*[/／]\s*(\d+)\s*[–—\-:=]*')
        matches = list(pattern.finditer(chunk))
        
        if not matches:
            if re.search(r'بنات', chunk):
                children.append({
                    "code": f"{current_father_gen+1}/1" if current_father_gen else "",
                    "name": "(أعقاب بنات)",
                    "generation": current_father_gen + 1 if current_father_gen else 41,
                    "hasDaughters": True
                })
            elif re.search(r'لم يعقب|لا عقب|ليس له عقب|لا نعلم له عقب|ولا نعلم له عقب', chunk):
                children.append({
                    "code": f"{current_father_gen+1}/1" if current_father_gen else "",
                    "name": "(لا عقب له)",
                    "generation": current_father_gen + 1 if current_father_gen else 41,
                    "noOffspring": True
                })
        else:
            for i, m in enumerate(matches):
                gen, idx, code_str = parse_code_token(m.group(1), m.group(2))
                
                start_val = m.end()
                end_val = matches[i+1].start() if i + 1 < len(matches) else len(chunk)
                raw_val = chunk[start_val:end_val].strip()
                
                is_martyr = bool(re.search(r'شهيد', raw_val))
                no_offspring = bool(re.search(r'لم يعقب|لا عقب له|ليس له عقب|مات و\s*لا عقب|انقرض|متوفى ولا عقب|لا نعلم له عقب|ولا نعلم له عقب|\(×\)|×', raw_val))
                has_daughters = bool(re.search(r'بنات|بنت', raw_val))
                has_children_followup = bool(re.search(r'وأعقب|واعقب|له عقب|أعقب', raw_val))
                
                name_clean = re.sub(r'[\(\[\{].*?[\)\]\}]', '', raw_val)
                name_clean = re.sub(r'[-–—=/_*#@:]+', ' ', name_clean)
                name_clean = re.sub(r'\b(متوفى|شهيد|لم يعقب|لا عقب له|ليس له عقب|بنات|وأعقب|واعقب)\b', '', name_clean)
                name_clean = re.sub(r'\s+', ' ', name_clean).strip()
                
                # Special handling if nickname / brackets was present
                if 'اسكندر' in raw_val:
                    name_clean = re.sub(r'الشيخ\s*لطف\s*الله.*$', 'الشيخ لطف الله ( الملقب اسكندر ) بن عبد الرحمن ساكن النقل بن أحمد بن عبد الله الحضرمي', raw_val)
                    name_clean = re.sub(r'[\(\[\{]\s*(?:لا|ولا)\s*نعلم.*$', '', name_clean).strip()
                elif 'عبد الرحمن ساكن النقل' in raw_val and '28/ 3' in m.group(0):
                    name_clean = "الشيخ/ عبد الرحمن ساكن النقل بن أحمد شارح البحر بن عبد الله الحضرمي"
                    has_children_followup = True
                
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
                if has_children_followup: c["hasChildrenFollowup"] = True
                children.append(c)
                
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

    i = 0
    while i < len(lines):
        line = lines[i]
        if not line or line == 'الفرع الثاني:' or line == 'الفرع الأول//' or line == 'الفرع الأول:':
            i += 1
            continue
            
        if line == 'أعقاب شارح البحر:' or line == 'أعقاب شارح البحر':
            current_main_branch = "أعقاب شارح البحر"
            i += 1
            continue
            
        # Sharih Al Bahr exact father section
        if re.match(r'^27\s*[/／]\s*1\s*-\s*شارح البحر', line):
            finalize_block()
            current_father_gen = 27
            current_father_code = "27/1"
            current_father_name = "شارح البحر"
            i += 1
            # Next line might be وأعقب
            if i < len(lines) and re.match(r'^(?:و?\s*أعقب|و?\s*اعقب)', lines[i].strip()):
                i += 1
            # Collect 28/1, 28/2, 28/3
            while i < len(lines) and not re.match(r'^(?:3/28|28/3)\s*[-–—=/_*#@:]+\s*(?:اعقاب|أعقاب)', lines[i].strip()):
                current_children_raw.append(lines[i])
                i += 1
            finalize_block()
            continue
            
        aaqab_m = re.match(r'^(?:أعقاب|اعقاب|أعفاب)\s*[=/／]+\s*(.*)$', line)
        if aaqab_m:
            finalize_block()
            h_text = aaqab_m.group(1).strip()
            if not h_text and i + 1 < len(lines):
                i += 1
                h_text = lines[i].strip()
            
            code_m = re.match(r'^(\d+)\s*[/／]\s*(\d+)\s*[–—\-:=]*\s*(.*)$', h_text)
            if code_m:
                gen, idx, code_str = parse_code_token(code_m.group(1), code_m.group(2))
                current_father_gen = gen
                current_father_code = code_str
                current_father_name = re.sub(r'[-–—=/_*#@:]+', ' ', code_m.group(3)).strip()
            else:
                current_father_gen = 30
                current_father_code = ""
                current_father_name = h_text
            i += 1
            continue

        # Header like "3/28 -اعقاب الشيخ / عبد الرحمن ساكن النقل..."
        special_aaqab_m = re.match(r'^(\d+)\s*[/／]\s*(\d+)\s*[-–—:=]+\s*(?:اعقاب|أعقاب)\s*(.*)$', line)
        if special_aaqab_m:
            finalize_block()
            gen, idx, code_str = parse_code_token(special_aaqab_m.group(1), special_aaqab_m.group(2))
            current_father_gen = gen
            current_father_code = code_str
            current_father_name = special_aaqab_m.group(3).strip()
            i += 1
            continue
            
        code_m = re.match(r'^(\d+)\s*[/／]\s*(\d+)\s*[–—\-:=]+\s*(.*)$', line)
        if code_m:
            gen, idx, code_str = parse_code_token(code_m.group(1), code_m.group(2))
            rest = code_m.group(3).strip()
            
            is_multiple = bool(re.search(r'\d+\s*[/／]\s*\d+', rest))
            is_next_wa_aqaba = (i + 1 < len(lines) and re.match(r'^(?:و?\s*أعقب|و?\s*اعقب|و?\s*أغقب)\s*[:：]?', lines[i+1].strip()))
            has_wa_aqaba = bool(re.search(r'(?:و?\s*أعقب|و?\s*اعقب|و?\s*أغقب)', rest))
            
            if (is_next_wa_aqaba or has_wa_aqaba or (' بن ' in rest and not is_multiple)):
                finalize_block()
                current_father_gen = gen
                current_father_code = code_str
                
                cleaned_name = re.sub(r'(?:و?\s*أعقب|و?\s*اعقب|و?\s*أغقب).*$', '', rest)
                cleaned_name = re.sub(r'[-–—=/_*#@:]+', ' ', cleaned_name)
                cleaned_name = re.sub(r'\s+', ' ', cleaned_name).strip()
                
                current_father_name = cleaned_name or f"ابن {current_father_code}"
                
                if is_next_wa_aqaba:
                    i += 1
                    wa_line = lines[i].strip()
                    after_wa = re.sub(r'^(?:و?\s*أعقب|و?\s*اعقب|و?\s*أغقب)\s*[:：]?', '', wa_line).strip()
                    if after_wa:
                        current_children_raw.append(after_wa)
                        
                i += 1
                continue
                
        current_children_raw.append(line)
        i += 1
        
    finalize_block()

    # Re-assign sequential IDs
    for idx, b in enumerate(blocks):
        b["id"] = f"seq-block-{idx+1}"

    ts_content = f"""export interface SequentialChildEntry {{
  code: string;
  name: string;
  generation: number;
  isMartyr?: boolean;
  noOffspring?: boolean;
  hasDaughters?: boolean;
  hasChildrenFollowup?: boolean;
  notes?: string;
}}

export interface SequentialBranchBlock {{
  id: string;
  mainBranch: string;
  fatherCode: string;
  fatherName: string;
  fatherFullName: string;
  generation: number;
  children: SequentialChildEntry[];
}}

export const sequentialLineageBlocks: SequentialBranchBlock[] = {json.dumps(blocks, ensure_ascii=False, indent=2)};
"""

    with open('src/data/sequentialLineageData.ts', 'w', encoding='utf-8') as f:
        f.write(ts_content)

    print(f"Generated {len(blocks)} blocks successfully!")

build_dataset()
