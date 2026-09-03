import re
import json

def clean_name_str(s):
    cleaned = s
    for m in ['( شهيد )', '(شهيد)', '(لم يعقب)', '( لم يعقب )', '(×)', '( × )', 'لا شيء', 'لم يتم موافاتنا', 'متوفى ولا عقب له', 'متوفى', 'شرد من المنطقة ولا نعلم له اثر']:
        cleaned = cleaned.replace(m, '')
    cleaned = re.sub(r'[\*\=\/\#\_\@\-\–\—\:\.]+', ' ', cleaned)
    cleaned = re.sub(r'\s+', ' ', cleaned).strip()
    return cleaned

def parse_txt_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    lines = [l.strip() for l in text.split('\n') if l.strip()]
    
    blocks = []
    current_main_branch = "أعقاب شارح البحر: الفرع الثاني - عبد الرحمن الجنيد بن محمد جمال الدين"
    current_father_code = ""
    current_father_name = ""
    current_father_full = ""
    current_children = []
    
    def flush(blocks_list):
        nonlocal current_father_code, current_father_name, current_father_full, current_children, current_main_branch
        if current_children:
            f_name = current_father_name
            f_name = re.sub(r'^(أعقاب|اعقاب|أعفاب)\s*[:/=–-]*\s*', '', f_name).strip()
            f_name = clean_name_str(f_name)
            if not f_name:
                f_name = "فرع موثق"
            
            gen = 39
            m = re.match(r'^(\d+)', current_father_code)
            if m:
                gen = int(m.group(1))

            blocks_list.append({
                'id': f'seq-block-{len(blocks_list) + 1}',
                'mainBranch': current_main_branch,
                'fatherCode': current_father_code,
                'fatherName': f_name,
                'fatherFullName': current_father_full or f_name,
                'generation': gen,
                'children': list(current_children)
            })
            current_children = []
            current_father_code = ""
            current_father_name = ""
            current_father_full = ""

    for line in lines:
        if line.startswith('أعقاب =') or line.startswith('أعقاب شارح البحر') or line.startswith('//') or line.startswith('==') or line.startswith('@@'):
            branch_title = re.sub(r'^[=\/\#\@\s]+', '', line)
            branch_title = re.sub(r'[=\/\#\@\s]+$', '', branch_title).strip()
            if branch_title and 'أعقاب' in branch_title:
                flush(blocks)
                current_main_branch = f"أعقاب شارح البحر: {branch_title}"
            continue

        if 'الفرع الأول' in line or 'الفرع الثاني' in line or 'الفرع الثالث' in line:
            flush(blocks)
            clean_sub = clean_name_str(line)
            current_main_branch = f"أعقاب شارح البحر: {clean_sub}"
            continue

        # Check for father declaration like: 36/ 1 – عبد الملك بن عثمان... أو 37/ 1 - ...
        m_father = re.match(r'^(\d+\s*[\/\_]\s*\d+)\s*[\–\-\—\:\.]\s*(.*)', line)
        if m_father:
            code_candidate = re.sub(r'\s+', '', m_father.group(1)).replace('_', '/')
            rest = m_father.group(2).strip()
            
            # Check if this line is "وأعقب" or father definition
            if 'وأعقب' in rest or 'واعقب' in rest or 'اعقب' in rest:
                flush(blocks)
                father_part = re.split(r'وأعقب|واعقب|اعقب', rest)[0].strip()
                current_father_code = code_candidate
                current_father_name = clean_name_str(father_part)
                current_father_full = current_father_name
                continue
            elif ' بن ' in rest or len(rest.split()) >= 3:
                # Likely a father header line
                flush(blocks)
                current_father_code = code_candidate
                current_father_name = clean_name_str(rest)
                current_father_full = current_father_name
                continue

        if 'وأعقب' in line or 'واعقب' in line or 'اعقب' in line:
            # could be just "وأعقب :"
            if current_children:
                flush(blocks)
            # if line has a father name before وأعقب
            before = re.split(r'وأعقب|واعقب|اعقب', line)[0].strip()
            if before:
                m_b = re.match(r'^(\d+\s*[\/\_]\s*\d+)\s*[\–\-\—\:\.]\s*(.*)', before)
                if m_b:
                    current_father_code = re.sub(r'\s+', '', m_b.group(1)).replace('_', '/')
                    current_father_name = clean_name_str(m_b.group(2))
                else:
                    current_father_name = clean_name_str(before)
            continue

        # Now parse children lines: e.g. 41/ 1 – أحمد  41/ 2 – محمد
        # or 41/ 1 –   41/ 2 –
        child_matches = list(re.finditer(r'(\d+\s*[\/\_]\s*\d+)\s*[\–\-\—\:\.]\s*([^\d\/\n\r]+|\s*)(?=(?:\d+\s*[\/\_]\s*\d+)|$)', line))
        if child_matches:
            for cm in child_matches:
                c_code = re.sub(r'\s+', '', cm.group(1)).replace('_', '/')
                c_raw_name = cm.group(2).strip()
                
                is_martyr = bool(re.search(r'شهيد|الشهيد', c_raw_name))
                no_offspring = bool(re.search(r'لم يعقب|لا عقب له|متوفى ولا عقب|متوفى|×', c_raw_name))
                has_daughters = bool(re.search(r'بنات|أعقب بنات', c_raw_name))
                
                c_name = clean_name_str(c_raw_name)
                if not c_name or c_name in ['-', '–', '0', '']:
                    c_name = "(لم تتم موافاتنا)"
                
                c_gen = 40
                m_cg = re.match(r'^(\d+)', c_code)
                if m_cg:
                    c_gen = int(m_cg.group(1))

                current_children.append({
                    'code': c_code,
                    'name': c_name,
                    'generation': c_gen,
                    'isMartyr': is_martyr,
                    'noOffspring': no_offspring,
                    'hasDaughters': has_daughters
                })
            continue

    flush(blocks)
    return blocks

parsed = parse_txt_file('attached_prompt_text.txt')
print('Parsed blocks from attached_prompt_text.txt:', len(parsed))
