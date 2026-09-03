import re
import json

with open('src/data/rawSharhAlBahrText.ts', 'r', encoding='utf-8') as f:
    raw_content = f.read()

# Extract content between backticks
m_text = re.search(r'export const rawSharhAlBahrText = `(.*?)`;', raw_content, re.DOTALL)
text = m_text.group(1) if m_text else raw_content

raw_lines = text.split('\n')

sections = []
current_main_branch = 'أعقاب شارح البحر: الفرع الأول - أحمد الجنيد بن محمد جمال الدين'
current_section_title = 'أعقاب 30/1 (أحمد الجنيد بن محمد جمال الدين)'
current_parent_code = '30/1'
current_parent_name = 'أحمد الجنيد بن محمد جمال الدين'
current_entries = []

def save_current_section():
    global current_section_title, current_parent_code, current_parent_name, current_entries
    if current_entries:
        sections.append({
            'id': f'sec-{len(sections)+1}',
            'mainBranch': current_main_branch,
            'sectionTitle': current_section_title or current_parent_name or current_main_branch,
            'parentCode': current_parent_code,
            'parentName': current_parent_name,
            'entries': current_entries
        })
        current_entries = []

for line in raw_lines:
    line = line.strip()
    if not line or line.startswith('//') or line.startswith('==') or line.startswith('**') or line.startswith('@@') or line.startswith('---'):
        continue

    # Main branch detection
    if 'الفرع الثاني:' in line or 'الفرع الثاني//' in line:
        save_current_section()
        current_main_branch = 'أعقاب شارح البحر: الفرع الثاني - عبد الرحمن الجنيد بن محمد جمال الدين'
        current_section_title = line
        continue
    elif 'الفرع الأول:' in line or 'الفرع الأول//' in line:
        save_current_section()
        current_main_branch = 'أعقاب شارح البحر: الفرع الأول - أحمد الجنيد بن محمد جمال الدين'
        current_section_title = line
        continue
    elif '27 / 1 - شارح البحر' in line or 'من أعقاب السيد الشريف' in line:
        save_current_section()
        current_main_branch = 'عمود النسب الشريف وسلسلة شارح البحر'
        current_section_title = line
        continue

    # Header indicators
    if line.startswith('أعقاب') or line.startswith('أعفاب') or line.startswith('اعقاب'):
        save_current_section()
        current_section_title = line.replace('=', '').replace('/', '').replace(':', '').strip()
        current_parent_name = current_section_title
        current_parent_code = ''
        continue

    # Pattern for matches like "31/ 1= محسن" or "41/ 1 – محمد" or "41/1 - أحمد"
    pattern = re.compile(r'(\d+[\s\/\\]+\d+)\s*[-–=:]\s*([^0-9\n_–—]+)')
    matches = list(pattern.finditer(line))
    if matches:
        for em in matches:
            code = em.group(1).replace(' ', '').replace('\\', '/')
            raw_name = em.group(2).strip()
            
            is_martyr = 'شهيد' in raw_name
            no_offspring = 'لم يعقب' in raw_name or '(×)' in raw_name or 'لا عقب له' in raw_name or 'ليس له عقب' in raw_name or 'مات و لا عقب له' in raw_name
            has_daughters = 'بنات' in raw_name or 'اعقب بنات' in raw_name
            
            clean_name = raw_name
            for mark in ['( شهيد )', '(شهيد)', '(لم يعقب)', '( لم يعقب )', '(×)', '( × )', 'لا شيء', 'لم يتم موافاتنا', 'متوفى ولا عقب له']:
                clean_name = clean_name.replace(mark, '')
            clean_name = clean_name.strip()
            
            # Skip empty or dash-only names
            if clean_name and clean_name not in ['-', '–', '—', '.']:
                current_entries.append({
                    'code': code,
                    'name': clean_name,
                    'raw': raw_name,
                    'isMartyr': is_martyr,
                    'noOffspring': no_offspring,
                    'hasDaughters': has_daughters,
                    'notes': 'أعقب بنات' if has_daughters else ('شهيد' if is_martyr else ('لم يعقب' if no_offspring else None))
                })

save_current_section()

print(f'Parsed {len(sections)} sections successfully.')
total_entries = sum(len(s["entries"]) for s in sections)
print(f'Total coded entries: {total_entries}')

ts_code = '''export interface CodedEntry {
  code: string;
  name: string;
  raw?: string;
  isMartyr?: boolean;
  noOffspring?: boolean;
  hasDaughters?: boolean;
  notes?: string | null;
}

export interface CodedSection {
  id: string;
  mainBranch: string;
  sectionTitle: string;
  parentCode: string;
  parentName: string;
  entries: CodedEntry[];
}

export const parsedCodedSections: CodedSection[] = ''' + json.dumps(sections, ensure_ascii=False, indent=2) + ';\n'

with open('src/data/parsedCodedSections.ts', 'w', encoding='utf-8') as f:
    f.write(ts_code)

print('Wrote src/data/parsedCodedSections.ts successfully')
