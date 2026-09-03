import re
import json

def parse_source_to_blocks():
    with open('source_lineage.txt', 'r', encoding='utf-8') as f:
        text = f.read()

    lines = text.split('\n')
    
    # Identify father declarations and their following child declaration lines
    # A father line can be:
    # 1. Starts with code: e.g. "37/ 1 – عبد الله بن سلطان بن علي" followed by "وأعقب :"
    # 2. Or "أعقاب = سلطان بن علي بن عبد الله..."
    # 3. Or "40/ 1 – عبد الله بن محمد بن عبد الحميد بن سعيد بن عبد الملك وأعقب :"
    # 4. Or "27 / 1 - شارح البحر // (( أحمد بن عبد الله الحضرمي... )) وأعقب :"
    
    raw_blocks = []
    current_father_line = ""
    current_father_code = ""
    current_father_name = ""
    current_father_gen = 30
    current_child_lines = []
    
    def finalize_block():
        nonlocal current_father_line, current_father_code, current_father_name, current_father_gen, current_child_lines
        if not current_father_name and not current_father_code:
            current_child_lines = []
            return
            
        # Parse children from current_child_lines
        chunk = " \n ".join(current_child_lines)
        children = []
        
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
            # Match individual child codes
            # Pattern: (\d+)\s*[/／]\s*(\d+)\s*[–—\-:]*\s*([^0-9\n/／]+)?
            # Also handle if multiple on one line
            tokens = re.split(r'(\d+\s*[/／]\s*\d+\s*[–—\-:])', chunk)
            if len(tokens) > 1:
                for idx in range(1, len(tokens), 2):
                    code_match = re.search(r'(\d+)\s*[/／]\s*(\d+)', tokens[idx])
                    if code_match:
                        gen = int(code_match.group(1))
                        num = int(code_match.group(2))
                        code_str = f"{gen}/{num}"
                        
                        rest = tokens[idx+1] if idx+1 < len(tokens) else ""
                        # Only take until next newline or next item
                        rest_clean = rest.split('\n')[0]
                        rest_clean = re.sub(r'[\(\[\{].*?[\)\]\}]', lambda m: m.group(0), rest_clean)
                        
                        is_martyr = bool(re.search(r'شهيد', rest_clean))
                        no_offspring = bool(re.search(r'لم يعقب|لا عقب له|ليس له عقب|مات و\s*لا عقب|انقرض|متوفى ولا عقب|\(×\)|×', rest_clean))
                        has_daughters = bool(re.search(r'بنات|بنت', rest_clean))
                        
                        name = re.sub(r'[\(\[\{].*?[\)\]\}]', '', rest_clean)
                        name = re.sub(r'[-–—=/_*#@]+', ' ', name)
                        name = re.sub(r'\b(متوفى|شهيد|لم يعقب|لا عقب له|ليس له عقب|بنات|وأعقب|واعقب)\b', '', name)
                        name = re.sub(r'\s+', ' ', name).strip()
                        
                        if not name:
                            name = "(لم تتم موافاتنا)"
                            
                        c_entry = {
                            "code": code_str,
                            "name": name,
                            "generation": gen
                        }
                        if is_martyr:
                            c_entry["isMartyr"] = True
                        if no_offspring:
                            c_entry["noOffspring"] = True
                        if has_daughters:
                            c_entry["hasDaughters"] = True
                            
                        children.append(c_entry)
        
        if current_father_name or children:
            raw_blocks.append({
                "fatherCode": current_father_code,
                "fatherName": current_father_name,
                "fatherFullName": f"أعقاب: {current_father_name}",
                "generation": current_father_gen,
                "children": children
            })
            
        current_father_line = ""
        current_father_code = ""
        current_father_name = ""
        current_child_lines = []

    # Iterate over lines
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        if not line or line.startswith('//') or line.startswith('**') or line.startswith('@@') or line.startswith('==') or line == 'أعقاب شارح البحر:' or line == 'الفرع الثاني:' or line == 'الفرع الأول//':
            i += 1
            continue
            
        # Check if this line is an أعقاب= header
        aaqab_match = re.match(r'^(?:أعقاب|اعقاب|أعفاب)\s*[=/／]+\s*(.*)$', line)
        if aaqab_match:
            finalize_block()
            h_name = aaqab_match.group(1).strip()
            if not h_name and i + 1 < len(lines):
                i += 1
                h_name = lines[i].strip()
            
            # Extract code if present
            code_m = re.search(r'^(\d+)\s*[/／]\s*(\d+)\s*[–—\-:]*\s*(.*)$', h_name)
            if code_m:
                current_father_gen = int(code_m.group(1))
                current_father_code = f"{code_m.group(1)}/{code_m.group(2)}"
                current_father_name = re.sub(r'[-–—=/_*#@]+', ' ', code_m.group(3)).strip()
            else:
                # Estimate generation from ancestor count
                b_count = h_name.count(' بن ') + h_name.count(' بن')
                current_father_gen = max(30, 31 + b_count // 2) if 'شارح البحر' not in h_name else 27
                current_father_code = ""
                current_father_name = h_name
            i += 1
            continue

        # Check if line has father code and "وأعقب"
        # e.g. "37/ 1 – عبد الله بن سلطان بن علي"
        code_father_match = re.match(r'^(\d+)\s*[/／]\s*(\d+)\s*[–—\-:]*\s*(.*)$', line)
        if code_father_match:
            gen = int(code_father_match.group(1))
            num = int(code_father_match.group(2))
            rest = code_father_match.group(3).strip()
            
            # Check if this is a father declaration or a child list
            # If rest contains multiple codes (e.g. 37/ 2 – ...) it's child list!
            is_multiple_codes = bool(re.search(r'\d+\s*[/／]\s*\d+', rest))
            is_wa_aqaba_next = (i + 1 < len(lines) and re.search(r'^(?:و?\s*أعقب|و?\s*اعقب|و?\s*أغقب)', lines[i+1].strip()))
            has_wa_aqaba_in_line = bool(re.search(r'(?:و?\s*أعقب|و?\s*اعقب|و?\s*أغقب)', rest))
            
            if (is_wa_aqaba_next or has_wa_aqaba_in_line or (' بن ' in rest and not is_multiple_codes)):
                # This is a father!
                finalize_block()
                current_father_gen = gen
                current_father_code = f"{gen}/{num}"
                
                name_clean = re.sub(r'(?:و?\s*أعقب|و?\s*اعقب|و?\s*أغقب).*$', '', rest)
                name_clean = re.sub(r'[\(\[\{].*?[\)\]\}]', '', name_clean)
                name_clean = re.sub(r'[-–—=/_*#@.]+', ' ', name_clean)
                current_father_name = re.sub(r'\s+', ' ', name_clean).strip()
                
                if not current_father_name:
                    current_father_name = f"ابن {current_father_code}"
                    
                i += 1
                continue
                
        # Otherwise, this line is child data for current father
        current_child_lines.append(line)
        i += 1

    finalize_block()
    return raw_blocks

blocks = parse_source_to_blocks()
print(f"Total parsed blocks: {len(blocks)}")

# Let's consolidate duplicate fathers if any
unified_blocks = []
father_map = {}

for b in blocks:
    key = (b["fatherName"], b["generation"])
    if not b["fatherName"]:
        key = (b["fatherCode"], b["generation"])
        
    if key in father_map:
        # Merge children
        existing = father_map[key]
        for c in b["children"]:
            # avoid exact duplicate child code and name
            if not any(ec["code"] == c["code"] and ec["name"] == c["name"] for ec in existing["children"]):
                existing["children"].append(c)
    else:
        b_copy = dict(b)
        b_copy["id"] = f"seq-block-{len(unified_blocks)+1}"
        b_copy["mainBranch"] = "أعقاب شارح البحر"
        father_map[key] = b_copy
        unified_blocks.append(b_copy)

# Sort blocks strictly by generation (from Gen 27 up to Gen 43)
unified_blocks.sort(key=lambda x: (x["generation"], x["fatherCode"], x["fatherName"]))

# Re-assign clean IDs
for idx, b in enumerate(unified_blocks):
    b["id"] = f"seq-block-{idx+1}"

print(f"Total consolidated blocks: {len(unified_blocks)}")

# Write to src/data/sequentialLineageData.ts
ts_content = f"""export interface SequentialChildEntry {{
  code: string;
  name: string;
  generation: number;
  isMartyr?: boolean;
  noOffspring?: boolean;
  hasDaughters?: boolean;
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

export const sequentialLineageBlocks: SequentialBranchBlock[] = {json.dumps(unified_blocks, ensure_ascii=False, indent=2)};
"""

with open('src/data/sequentialLineageData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print("src/data/sequentialLineageData.ts successfully created and updated!")
