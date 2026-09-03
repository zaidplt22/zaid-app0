import re
import json

with open('src/data/sequentialLineageData.ts', 'r', encoding='utf-8') as f:
    orig_text = f.read()

json_str = orig_text.split('sequentialLineageBlocks: SequentialBranchBlock[] = ')[1].rsplit(';', 1)[0].strip()
existing_blocks = json.loads(json_str)

samir_idx = 316
preserved_blocks = existing_blocks[:samir_idx + 1]

with open('attached_part2.txt', 'r', encoding='utf-8') as f:
    text_data = f.read()

lines = [l.strip() for l in text_data.split('\n') if l.strip()]

def clean_name_str(s):
    cleaned = s
    for m in ['( شهيد )', '(شهيد)', '(لم يعقب)', '( لم يعقب )', '(×)', '( × )', 'لا شيء', 'لم يتم موافاتنا', 'متوفى ولا عقب له', 'متوفى', 'شرد من المنطقة ولا نعلم له اثر']:
        cleaned = cleaned.replace(m, '')
    cleaned = re.sub(r'[\*\=\/\#\_\@\-\–\—\:\.]+', ' ', cleaned)
    cleaned = re.sub(r'\s+', ' ', cleaned).strip()
    return cleaned

new_blocks = []
current_main_branch = "أعقاب شارح البحر: الفرع الثاني - عبد الرحمن الجنيد بن محمد جمال الدين"
current_father_code = ""
current_father_name = ""
current_father_full = ""
current_children = []

def flush():
    global current_father_code, current_father_name, current_father_full, current_children, new_blocks, current_main_branch
    if current_children:
        f_name = current_father_name
        f_name = re.sub(r'^(أعقاب|اعقاب|أعفاب)\s*[:/=–-]*\s*', '', f_name).strip()
        f_name = clean_name_str(f_name)
        if not f_name:
            f_name = ""
        
        gen = 39
        m = re.match(r'^(\d+)', current_father_code)
        if m:
            gen = int(m.group(1))

        new_blocks.append({
            'id': f'seq-block-{len(preserved_blocks) + len(new_blocks) + 1}',
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

# Parse line by line
i = 0
while i < len(lines):
    line = lines[i]

    if line.startswith('أعقاب =') or line.startswith('أعقاب شارح البحر') or line.startswith('//') or line.startswith('==') or line.startswith('@@'):
        branch_title = re.sub(r'^[=\/\#\@\s]+', '', line)
        branch_title = re.sub(r'[=\/\#\@\s]+$', '', branch_title).strip()
        if branch_title and 'أعقاب' in branch_title:
            flush()
            current_main_branch = f"أعقاب شارح البحر: {branch_title}"
        i += 1
        continue

    if 'الفرع الأول' in line or 'الفرع الثاني' in line or 'الفرع الثالث' in line:
        flush()
        clean_sub = clean_name_str(line)
        current_main_branch = f"أعقاب شارح البحر: {clean_sub}"
        i += 1
        continue

    # Specific case for standalone lines like "41/ 6 – مصطفى بن ابراهيم بن محمد بن عبد المعطي"
    if line.startswith('41/ 6 – مصطفى بن ابراهيم'):
        flush()
        current_father_code = "41/6"
        current_father_name = "مصطفى بن ابراهيم بن محمد بن عبد المعطي"
        current_father_full = current_father_name
        # Add as a block with no children / dummy
        new_blocks.append({
            'id': f'seq-block-{len(preserved_blocks) + len(new_blocks) + 1}',
            'mainBranch': current_main_branch,
            'fatherCode': "41/6",
            'fatherName': "مصطفى بن ابراهيم بن محمد بن عبد المعطي",
            'fatherFullName': "مصطفى بن ابراهيم بن محمد بن عبد المعطي",
            'generation': 41,
            'children': []
        })
        current_father_code = ""
        current_father_name = ""
        i += 1
        continue

    # Check for father declaration
    m_father = re.match(r'^(\d+\s*[\/\_]\s*\d+)\s*[\–\-\—\:\.]\s*(.*)', line)
    if m_father:
        code_candidate = re.sub(r'\s+', '', m_father.group(1)).replace('_', '/')
        rest = m_father.group(2).strip()

        if any(w in rest for w in ['وأعقب', 'واعقب', 'اعقب']):
            flush()
            father_part = re.split(r'وأعقب|واعقب|اعقب', rest)[0].strip()
            current_father_code = code_candidate
            current_father_name = clean_name_str(father_part)
            current_father_full = current_father_name
            i += 1
            continue
        elif ' بن ' in rest or len(rest.split()) >= 3:
            flush()
            current_father_code = code_candidate
            current_father_name = clean_name_str(rest)
            current_father_full = current_father_name
            i += 1
            continue

    if any(w in line for w in ['وأعقب', 'واعقب', 'اعقب']):
        if current_children:
            flush()
        before = re.split(r'وأعقب|واعقب|اعقب', line)[0].strip()
        if before:
            m_b = re.match(r'^(\d+\s*[\/\_]\s*\d+)\s*[\–\-\—\:\.]\s*(.*)', before)
            if m_b:
                current_father_code = re.sub(r'\s+', '', m_b.group(1)).replace('_', '/')
                current_father_name = clean_name_str(m_b.group(2))
            else:
                current_father_name = clean_name_str(before)
        i += 1
        continue

    # Parse children in line
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
        i += 1
        continue

    i += 1

flush()

print('Preserved blocks:', len(preserved_blocks))
print('New blocks parsed:', len(new_blocks))
all_blocks = preserved_blocks + new_blocks
print('Total combined blocks:', len(all_blocks))
