import re
import json

# Read existing blocks
with open('src/data/sequentialLineageData.ts', 'r', encoding='utf-8') as f:
    orig_text = f.read()

json_str = orig_text.split('sequentialLineageBlocks: SequentialBranchBlock[] = ')[1].rsplit(';', 1)[0].strip()
existing_blocks = json.loads(json_str)

# Find Samir (41/6)
samir_idx = 316
preserved_blocks = existing_blocks[:samir_idx + 1]

# Now let's read the attachment file
with open('attached_part2.txt', 'r', encoding='utf-8') as f:
    text_data = f.read()

raw_lines = [l.strip() for l in text_data.split('\n') if l.strip()]

new_blocks = []
current_main_branch = "أعقاب شارح البحر: الفرع الثاني - عبد الرحمن الجنيد بن محمد جمال الدين"
current_father_code = ""
current_father_name = ""
current_father_full = ""
current_children = []

def clean_name_str(s):
    cleaned = s
    for m in ['( شهيد )', '(شهيد)', '(لم يعقب)', '( لم يعقب )', '(×)', '( × )', 'لا شيء', 'لم يتم موافاتنا', 'متوفى ولا عقب له', 'متوفى', 'شرد من المنطقة ولا نعلم له اثر']:
        cleaned = cleaned.replace(m, '')
    cleaned = re.sub(r'[\*\=\/\#\_\@\-\–\—\:\.]+', ' ', cleaned)
    cleaned = re.sub(r'\s+', ' ', cleaned).strip()
    return cleaned

def get_gen_from_code(code):
    if not code:
        return 39
    m = re.match(r'^(\d+)', code)
    if m:
        return int(m.group(1))
    return 39

def flush_new_block():
    global current_father_code, current_father_name, current_father_full, current_children, new_blocks
    if current_children:
        f_name = current_father_name
        f_name = re.sub(r'^(أعقاب|اعقاب|أعفاب)\s*[:/=–-]*\s*', '', f_name).strip()
        f_name = clean_name_str(f_name)
        if not f_name:
            if current_father_code:
                f_name = f"فرع الجيل ({current_father_code})"
            else:
                f_name = "فرع موثق من ذرية شارح البحر"
        gen = get_gen_from_code(current_father_code)
        
        block_num = len(preserved_blocks) + len(new_blocks) + 1
        new_blocks.append({
            'id': f'seq-block-{block_num}',
            'mainBranch': current_main_branch,
            'fatherCode': current_father_code,
            'fatherName': f_name,
            'fatherFullName': current_father_full or f_name,
            'generation': gen,
            'children': current_children
        })
        current_children = []

i = 0
while i < len(raw_lines):
    line = raw_lines[i]
    
    # Check for branch headers
    if 'فاضل بن عبد الرحمن الجنيد' in line or '31/ 5 - فاضل' in line:
        flush_new_block()
        current_main_branch = "أعقاب شارح البحر: فرع فاضل بن عبد الرحمن الجنيد"
        current_father_code = "31/5"
        current_father_name = "فاضل بن عبد الرحمن الجنيد"
        current_father_full = "سيدي فاضل بن عبد الرحمن الجنيد"
        i += 1
        continue
    elif 'علي بن ابراهيم بن عبد الرحمن الجنيد' in line or '32/ 3 - علي' in line:
        flush_new_block()
        current_main_branch = "أعقاب شارح البحر: فرع علي بن إبراهيم بن عبد الرحمن الجنيد"
        current_father_code = "32/3"
        current_father_name = "علي بن إبراهيم بن عبد الرحمن الجنيد"
        current_father_full = "سيدي علي بن إبراهيم بن عبد الرحمن الجنيد"
        i += 1
        continue
    elif 'إسماعيل بن ابراهيم بن عبد الرحمن الجنيد' in line:
        flush_new_block()
        current_main_branch = "أعقاب شارح البحر: فرع إسماعيل بن إبراهيم بن عبد الرحمن الجنيد"
        current_father_code = "34/1"
        current_father_name = "إسماعيل بن إبراهيم بن عبد الرحمن الجنيد"
        current_father_full = "سيدي إسماعيل بن إبراهيم بن عبد الرحمن الجنيد"
        i += 1
        continue
    elif 'عبد الرحمن بن حسن بن حاجب' in line:
        flush_new_block()
        current_main_branch = "أعقاب شارح البحر: فرع عبد الرحمن بن حسن بن حاجب"
        current_father_code = "34/1"
        current_father_name = "عبد الرحمن بن حسن بن حاجب بن إبراهيم بن عبد الرحمن الجنيد"
        current_father_full = "عبد الرحمن بن حسن بن حاجب بن إبراهيم بن عبد الرحمن الجنيد"
        i += 1
        continue
    elif 'مالك بن محمد بن ابراهيم بن عبد الرحمن الجنيد' in line:
        flush_new_block()
        current_main_branch = "أعقاب شارح البحر: فرع مالك بن محمد بن إبراهيم بن عبد الرحمن الجنيد"
        current_father_code = "33/5"
        current_father_name = "مالك بن محمد بن إبراهيم بن عبد الرحمن الجنيد"
        current_father_full = "مالك بن محمد بن إبراهيم بن عبد الرحمن الجنيد"
        i += 1
        continue
    elif 'الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد' in line:
        flush_new_block()
        current_main_branch = "أعقاب شارح البحر: فرع الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد"
        current_father_code = "33/1"
        current_father_name = "الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد"
        current_father_full = "الحسن بن محمد بن إبراهيم بن عبد الرحمن الجنيد"
        i += 1
        continue
    elif 'الحسين بن محمد بن إبراهيم بن عبد الرحمن الجنيد' in line:
        flush_new_block()
        current_main_branch = "أعقاب شارح البحر: فرع الحسين بن محمد بن إبراهيم بن عبد الرحمن الجنيد"
        current_father_code = "33/3"
        current_father_name = "الحسين بن محمد بن إبراهيم بن عبد الرحمن الجنيد"
        current_father_full = "الحسين بن محمد بن إبراهيم بن عبد الرحمن الجنيد"
        i += 1
        continue
    elif 'إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد' in line:
        flush_new_block()
        current_main_branch = "أعقاب شارح البحر: فرع إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد"
        current_father_code = "33/2"
        current_father_name = "إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد"
        current_father_full = "إبراهيم بن محمد بن إبراهيم بن عبد الرحمن الجنيد"
        i += 1
        continue
    elif 'عثمان بن حسن بن بشر' in line:
        flush_new_block()
        current_main_branch = "أعقاب شارح البحر: فرع عثمان بن حسن بن بشر بن محمد بن إبراهيم بن عبد الرحمن الجنيد"
        current_father_code = "35/1"
        current_father_name = "عثمان بن حسن بن بشر بن محمد بن إبراهيم بن عبد الرحمن الجنيد"
        current_father_full = "عثمان بن حسن بن بشر بن محمد بن إبراهيم بن عبد الرحمن الجنيد"
        i += 1
        continue

    # Match father declaration
    m_father = re.match(r'^(\d+[\s\/\\]+\d+)\s*[-–=:]\s*(.+?)(?:\s+وأعقب|\s+واعقب|\s+أعقب|\s+اعقب)?$', line)
    has_aaqaba = bool(re.search(r'(وأعقب|واعقب|أعقب|اعقب|أعفب)\s*[:.]*', line))
    next_has_aaqaba = (i + 1 < len(raw_lines) and bool(re.search(r'^(وأعقب|واعقب|أعقب|اعقب)\s*[:.]*', raw_lines[i+1])))

    if m_father and (has_aaqaba or next_has_aaqaba or ' بن ' in m_father.group(2)):
        other_matches = list(re.finditer(r'(\d+[\s\/\\]+\d+)\s*[-–=:]\s*([^0-9\n_–—]+)', line))
        if len(other_matches) <= 1:
            flush_new_block()
            current_father_code = m_father.group(1).replace(' ', '').replace('\\', '/')
            raw_fname = m_father.group(2).strip()
            raw_fname = re.sub(r'\s*(وأعقب|واعقب|أعقب|اعقب)\s*[:.]*.*$', '', raw_fname).strip()
            current_father_name = clean_name_str(raw_fname)
            current_father_full = raw_fname
            i += 1
            if next_has_aaqaba:
                next_line = raw_lines[i]
                if 'بنات' in next_line or 'بنت' in next_line:
                    current_children.append({
                        'code': current_father_code,
                        'name': 'أعقب كريمتين / بنات',
                        'raw': next_line,
                        'isMartyr': False,
                        'noOffspring': False,
                        'hasDaughters': True,
                        'hasChildrenFollowup': False,
                        'notes': 'أعقب بنات'
                    })
                i += 1
            continue

    # Check for أعقاب فلان
    if line.startswith('أعقاب') or line.startswith('اعقاب') or line.startswith('أعفاب'):
        title_clean = re.sub(r'^(أعقاب|اعقاب|أعفاب)\s*[:/=–-]*\s*', '', line).strip()
        code_in_title = re.search(r'(\d+[\s\/\\]+\d+)', title_clean)
        flush_new_block()
        if code_in_title:
            current_father_code = code_in_title.group(1).replace(' ', '').replace('\\', '/')
            title_clean = re.sub(r'\d+[\s\/\\]+\d+\s*[-–=:]*\s*', '', title_clean).strip()
        else:
            current_father_code = ''
        current_father_name = clean_name_str(title_clean)
        current_father_full = line
        i += 1
        continue

    # Match multiple children on line
    pattern = re.compile(r'(\d+[\s\/\\]+\d+)\s*[-–=:]\s*([^0-9\n_–—]+)')
    matches = list(pattern.finditer(line))
    if matches:
        for em in matches:
            code = em.group(1).replace(' ', '').replace('\\', '/')
            raw_name = em.group(2).strip()
            
            is_martyr = 'شهيد' in raw_name
            no_offspring = 'لم يعقب' in raw_name or '(×)' in raw_name or 'لا عقب له' in raw_name or 'ليس له عقب' in raw_name or 'متوفى' in raw_name or 'لا شيء' in raw_name
            has_daughters = 'بنات' in raw_name or 'اعقب بنات' in raw_name or 'بنت' in raw_name
            has_aaqab_note = 'أعقب' in raw_name or 'واعقب' in raw_name
            
            clean_name = clean_name_str(raw_name)
            
            if clean_name and clean_name not in ['-', '–', '—', '.', '']:
                notes = None
                if is_martyr:
                    notes = 'شهيد'
                elif no_offspring:
                    notes = 'لم يعقب'
                elif has_daughters:
                    notes = 'أعقب بنات'
                elif has_aaqab_note:
                    notes = 'أعقب'
                
                current_children.append({
                    'code': code,
                    'name': clean_name,
                    'raw': raw_name,
                    'isMartyr': is_martyr,
                    'noOffspring': no_offspring,
                    'hasDaughters': has_daughters,
                    'hasChildrenFollowup': has_aaqab_note,
                    'notes': notes
                })
        i += 1
        continue

    # Single child line
    m_single = re.match(r'^(\d+[\s\/\\]+\d+)\s*[-–=:]\s*(.+)', line)
    if m_single:
        code = m_single.group(1).replace(' ', '').replace('\\', '/')
        raw_name = m_single.group(2).strip()
        is_martyr = 'شهيد' in raw_name
        no_offspring = 'لم يعقب' in raw_name or '(×)' in raw_name or 'لا عقب له' in raw_name
        has_daughters = 'بنات' in raw_name or 'اعقب بنات' in raw_name
        has_aaqab_note = 'أعقب' in raw_name or 'واعقب' in raw_name
        clean_name = clean_name_str(raw_name)
        if clean_name and clean_name not in ['-', '–', '—', '.', '']:
            current_children.append({
                'code': code,
                'name': clean_name,
                'raw': raw_name,
                'isMartyr': is_martyr,
                'noOffspring': no_offspring,
                'hasDaughters': has_daughters,
                'hasChildrenFollowup': has_aaqab_note,
                'notes': 'أعقب بنات' if has_daughters else ('شهيد' if is_martyr else ('لم يعقب' if no_offspring else ('أعقب' if has_aaqab_note else None)))
            })
    i += 1

flush_new_block()

print(f"Parsed {len(new_blocks)} new blocks from attachment.")

# Combine preserved + new blocks
all_combined = preserved_blocks + new_blocks

# Clean all headers so father's full name ALWAYS explicitly appears without empty or truncated labels
for idx, b in enumerate(all_combined):
    b['id'] = f'seq-block-{idx+1}'
    f_name = b.get('fatherName', '').strip()
    if not f_name or f_name in ['أعقاب', 'اعقاب', 'أعفاب', 'شارح البحر وذريته', '']:
        if b.get('fatherCode'):
            b['fatherName'] = f"فرع ({b['fatherCode']}) من ذرية شارح البحر"
        else:
            b['fatherName'] = "سيدي الشيخ أحمد الحضرمي (شارح البحر)"
    else:
        b['fatherName'] = re.sub(r'^(أعقاب|اعقاب|أعفاب)\s*[:/=–-]*\s*', '', f_name).strip()

total_persons = sum(len(b['children']) for b in all_combined)
print(f"Total combined blocks: {len(all_combined)}, Total persons: {total_persons}")

ts_output = '''export interface SequentialChildEntry {
  code: string;
  name: string;
  raw?: string;
  isMartyr?: boolean;
  noOffspring?: boolean;
  hasDaughters?: boolean;
  hasChildrenFollowup?: boolean;
  notes?: string | null;
}

export interface SequentialBranchBlock {
  id: string;
  mainBranch: string;
  fatherCode: string;
  fatherName: string;
  fatherFullName: string;
  generation: number;
  children: SequentialChildEntry[];
}

export const sequentialLineageBlocks: SequentialBranchBlock[] = ''' + json.dumps(all_combined, ensure_ascii=False, indent=2) + ';\n'

with open('src/data/sequentialLineageData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_output)

print("Saved src/data/sequentialLineageData.ts successfully!")
