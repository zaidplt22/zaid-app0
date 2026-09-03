import re
import json

with open('src/data/rawSharhAlBahrText.ts', 'r', encoding='utf-8') as f:
    raw_content = f.read()

m_text = re.search(r'export const rawSharhAlBahrText = `(.*?)`;', raw_content, re.DOTALL)
text = m_text.group(1) if m_text else raw_content

raw_lines = [l.strip() for l in text.split('\n') if l.strip()]

# Let's inspect the flow
blocks = []
current_main_branch = "أعقاب شارح البحر: الفرع الأول - أحمد الجنيد بن محمد جمال الدين"
current_father_code = "30/1"
current_father_name = "أحمد الجنيد بن محمد جمال الدين"
current_father_lineage = ""
current_children = []

def clean_name_str(s):
    # Remove markers
    cleaned = s
    for m in ['( شهيد )', '(شهيد)', '(لم يعقب)', '( لم يعقب )', '(×)', '( × )', 'لا شيء', 'لم يتم موافاتنا', 'متوفى ولا عقب له']:
        cleaned = cleaned.replace(m, '')
    cleaned = re.sub(r'\s+', ' ', cleaned).strip(' -–—:=.')
    return cleaned

def flush_block():
    global current_father_code, current_father_name, current_father_lineage, current_children
    if current_children or current_father_name:
        # Avoid duplicate labels like "أعقاب (أعقاب)"
        clean_father_title = current_father_name
        if clean_father_title.startswith('أعقاب') or clean_father_title.startswith('اعقاب'):
            clean_father_title = re.sub(r'^(أعقاب|اعقاب|أعفاب)\s*[:/=–-]*\s*', '', clean_father_title).strip()
        
        # Build block
        blocks.append({
            'id': f'block-{len(blocks)+1}',
            'mainBranch': current_main_branch,
            'fatherCode': current_father_code,
            'fatherName': clean_father_title or 'شارح البحر وأعقابه',
            'fatherFullLineage': current_father_lineage,
            'children': current_children
        })
        current_children = []

i = 0
while i < len(raw_lines):
    line = raw_lines[i]
    
    # Check for main branch
    if 'الفرع الثاني:' in line or 'الفرع الثاني//' in line:
        flush_block()
        current_main_branch = 'أعقاب شارح البحر: الفرع الثاني - عبد الرحمن الجنيد بن محمد جمال الدين'
        current_father_code = '30/2'
        current_father_name = 'عبد الرحمن الجنيد بن محمد جمال الدين'
        current_father_lineage = ''
        i += 1
        continue
    elif 'الفرع الأول:' in line or 'الفرع الأول//' in line:
        flush_block()
        current_main_branch = 'أعقاب شارح البحر: الفرع الأول - أحمد الجنيد بن محمد جمال الدين'
        current_father_code = '30/1'
        current_father_name = 'أحمد الجنيد بن محمد جمال الدين'
        current_father_lineage = ''
        i += 1
        continue
    elif '27 / 1 - شارح البحر' in line or 'من أعقاب السيد الشريف' in line:
        flush_block()
        current_main_branch = 'عمود النسب الشريف وسلسلة شارح البحر'
        current_father_code = '27/1'
        current_father_name = 'سيدي الشيخ أحمد بن عبد الله الحضرمي (شارح البحر)'
        current_father_lineage = ''
        i += 1
        continue

    # Check if this line declares a father with "وأعقب" or "أعقب" or "أعقاب فلان"
    # Example: 31/ 1 – محسن بن أحمد الجنيد بن محمد جمال الدين ...
    # followed by "وأعقب :" or with "وأعقب :" in the same line
    m_father = re.match(r'^(\d+[\s\/\\]+\d+)\s*[-–=:]\s*(.+?)(?:\s+وأعقب|\s+واعقب|\s+أعقب|\s+اعقب)?$', line)
    has_aaqaba_keyword = bool(re.search(r'(وأعقب|واعقب|أعقب|اعقب)\s*[:.]*', line))
    next_has_aaqaba = (i + 1 < len(raw_lines) and bool(re.search(r'^(وأعقب|واعقب|أعقب|اعقب)\s*[:.]*', raw_lines[i+1])))

    if m_father and (has_aaqaba_keyword or next_has_aaqaba):
        flush_block()
        current_father_code = m_father.group(1).replace(' ', '').replace('\\', '/')
        raw_fname = m_father.group(2).strip()
        # Clean 'وأعقب' if in name
        raw_fname = re.sub(r'\s*(وأعقب|واعقب|أعقب|اعقب)\s*[:.]*.*$', '', raw_fname).strip()
        current_father_name = clean_name_str(raw_fname)
        current_father_lineage = raw_fname
        i += 1
        if next_has_aaqaba:
            # Check if next line specifies "بنات" or "غائب"
            next_line = raw_lines[i]
            if 'بنات' in next_line or 'بنت' in next_line:
                current_children.append({
                    'code': current_father_code,
                    'name': 'أعقب كريمتين / بنات',
                    'raw': next_line,
                    'isMartyr': False,
                    'noOffspring': False,
                    'hasDaughters': True,
                    'notes': 'أعقب بنات'
                })
            elif 'غائب' in next_line:
                current_children.append({
                    'code': current_father_code,
                    'name': 'غائب',
                    'raw': next_line,
                    'isMartyr': False,
                    'noOffspring': False,
                    'hasDaughters': False,
                    'notes': 'غائب'
                })
            i += 1
        continue

    # Check for general "أعقاب فلان بن فلان"
    if line.startswith('أعقاب') or line.startswith('اعقاب') or line.startswith('أعفاب'):
        flush_block()
        title_clean = re.sub(r'^(أعقاب|اعقاب|أعفاب)\s*[:/=–-]*\s*', '', line).strip()
        # Check if code exists in it
        code_in_title = re.search(r'(\d+[\s\/\\]+\d+)', title_clean)
        if code_in_title:
            current_father_code = code_in_title.group(1).replace(' ', '').replace('\\', '/')
            title_clean = re.sub(r'\d+[\s\/\\]+\d+\s*[-–=:]*\s*', '', title_clean).strip()
        else:
            current_father_code = ''
        current_father_name = clean_name_str(title_clean)
        current_father_lineage = line
        i += 1
        continue

    # Match child entries on this line: "32/ 1 – عبَّاد 32/ 2 – عطاء" or "41/ 1 – محمد"
    pattern = re.compile(r'(\d+[\s\/\\]+\d+)\s*[-–=:]\s*([^0-9\n_–—]+)')
    matches = list(pattern.finditer(line))
    if matches:
        for em in matches:
            code = em.group(1).replace(' ', '').replace('\\', '/')
            raw_name = em.group(2).strip()
            
            is_martyr = 'شهيد' in raw_name
            no_offspring = 'لم يعقب' in raw_name or '(×)' in raw_name or 'لا عقب له' in raw_name or 'ليس له عقب' in raw_name or 'مات و لا عقب له' in raw_name
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

    # If line is single text note like "36/ 2 – منصر اعقب بنات"
    m_single = re.match(r'^(\d+[\s\/\\]+\d+)\s*[-–=:]\s*(.+)', line)
    if m_single:
        code = m_single.group(1).replace(' ', '').replace('\\', '/')
        raw_name = m_single.group(2).strip()
        is_martyr = 'شهيد' in raw_name
        no_offspring = 'لم يعقب' in raw_name or '(×)' in raw_name or 'لا عقب له' in raw_name
        has_daughters = 'بنات' in raw_name or 'اعقب بنات' in raw_name
        clean_name = clean_name_str(raw_name)
        if clean_name:
            current_children.append({
                'code': code,
                'name': clean_name,
                'raw': raw_name,
                'isMartyr': is_martyr,
                'noOffspring': no_offspring,
                'hasDaughters': has_daughters,
                'notes': 'أعقب بنات' if has_daughters else ('شهيد' if is_martyr else ('لم يعقب' if no_offspring else None))
            })
    i += 1

flush_block()

print(f'Total sequential blocks: {len(blocks)}')
total_c = sum(len(b['children']) for b in blocks)
print(f'Total children: {total_c}')

for idx in range(min(12, len(blocks))):
    b = blocks[idx]
    print(f"[{idx+1}] Father: {b['fatherCode']} - {b['fatherName']} ({len(b['children'])} sons)")
    for c in b['children'][:3]:
        print(f"     -> {c['code']} {c['name']} (notes: {c['notes']})")

