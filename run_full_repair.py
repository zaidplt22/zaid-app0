import re
import json

with open('src/data/sequentialLineageData.ts', 'r', encoding='utf-8') as f:
    text = f.read()

json_str = text.split('sequentialLineageBlocks: SequentialBranchBlock[] = ')[1].rsplit(';', 1)[0].strip()
blocks = json.loads(json_str)

print(f"Initial total blocks: {len(blocks)}")

# 1. FIX SAMIR BLOCK & SEQUENCE
# Locate Samir (41/6 - سمير بن ابراهيم بن محمد بن عبد المعطي)
samir_idx = -1
for idx, b in enumerate(blocks):
    if b.get('fatherCode') == '41/6' and 'سمير' in b.get('fatherName', ''):
        samir_idx = idx
        break

print(f"Samir block index: {samir_idx}")

# Ensure Samir's children are exact: 42/1 الهزبر, 42/2 محمد, 42/3 إبراهيم
blocks[samir_idx]['children'] = [
    {
        "code": "42/1",
        "name": "الهزبر",
        "raw": "42/ 1 - الهزبر",
        "generation": 42,
        "isMartyr": False,
        "noOffspring": False,
        "hasDaughters": False,
        "hasChildrenFollowup": True
    },
    {
        "code": "42/2",
        "name": "محمد",
        "raw": "42/ 2 – محمد",
        "generation": 42,
        "isMartyr": False,
        "noOffspring": False,
        "hasDaughters": False,
        "hasChildrenFollowup": True
    },
    {
        "code": "42/3",
        "name": "إبراهيم",
        "raw": "42/ 3 – إبراهيم",
        "generation": 42,
        "isMartyr": False,
        "noOffspring": False,
        "hasDaughters": False,
        "hasChildrenFollowup": True
    }
]

# Next sequence right after Samir:
# - 41/ 6 – مصطفى بن ابراهيم بن محمد بن عبد المعطي 
# - 40/ 4 - عبد المعطي بن محمد بن عبد المعطي (أعقب: 41/ 1 - أحمد, 41/ 2 – محمد)
# - 40/ 5 – عبد السلام بن محمد بن عبد المعطي (أعقب: 41/ 1 – تامر, 41/ 2 –, 41/ 3 –)
# - 40/ 6 – عز الدين بن محمد بن عبد المعطي (أعقب: 41/ 1 –, 41/ 2 –)
# - 40/ 7 – عبد الرؤوف بن محمد بن عبد المعطي (أعقب: 41/ 1 -, 41/ 2 –, 41/ 3 -, 41/ 4 –)
# - 40/ 8 – أمين بن محمد بن عبد المعطي (أعقب: 41/ 1 -, 41/ 2 –, 41/ 3 -, 41/ 4 –)
# - 40/ 9 – نجيب بن محمد بن عبد المعطي (أعقب: 41/ 1 -, 41/ 2 –)

samir_after_sequence = [
    {
        "id": "seq-block-samir-mustafa",
        "mainBranch": blocks[samir_idx]['mainBranch'],
        "fatherCode": "41/6",
        "fatherName": "مصطفى بن ابراهيم بن محمد بن عبد المعطي",
        "fatherFullName": "مصطفى بن ابراهيم بن محمد بن عبد المعطي",
        "generation": 41,
        "children": [
            {
                "code": "42/1",
                "name": "(لم تتم موافاتنا)",
                "raw": "42/ 1 –",
                "generation": 42,
                "isMartyr": False,
                "noOffspring": False,
                "hasDaughters": False
            }
        ]
    },
    {
        "id": "seq-block-40-4-abdelmoati",
        "mainBranch": blocks[samir_idx]['mainBranch'],
        "fatherCode": "40/4",
        "fatherName": "عبد المعطي بن محمد بن عبد المعطي",
        "fatherFullName": "عبد المعطي بن محمد بن عبد المعطي",
        "generation": 40,
        "children": [
            {
                "code": "41/1",
                "name": "أحمد",
                "raw": "41/ 1 - أحمد",
                "generation": 41,
                "isMartyr": False,
                "noOffspring": False,
                "hasDaughters": False
            },
            {
                "code": "41/2",
                "name": "محمد",
                "raw": "41/ 2 – محمد",
                "generation": 41,
                "isMartyr": False,
                "noOffspring": False,
                "hasDaughters": False
            }
        ]
    },
    {
        "id": "seq-block-40-5-abdelsalam",
        "mainBranch": blocks[samir_idx]['mainBranch'],
        "fatherCode": "40/5",
        "fatherName": "عبد السلام بن محمد بن عبد المعطي",
        "fatherFullName": "عبد السلام بن محمد بن عبد المعطي",
        "generation": 40,
        "children": [
            {
                "code": "41/1",
                "name": "تامر",
                "raw": "41/ 1 – تامر",
                "generation": 41,
                "isMartyr": False,
                "noOffspring": False,
                "hasDaughters": False
            },
            {
                "code": "41/2",
                "name": "(لم تتم موافاتنا)",
                "raw": "41/ 2 –",
                "generation": 41,
                "isMartyr": False,
                "noOffspring": False,
                "hasDaughters": False
            },
            {
                "code": "41/3",
                "name": "(لم تتم موافاتنا)",
                "raw": "41/ 3 –",
                "generation": 41,
                "isMartyr": False,
                "noOffspring": False,
                "hasDaughters": False
            }
        ]
    },
    {
        "id": "seq-block-40-6-ezzelldin",
        "mainBranch": blocks[samir_idx]['mainBranch'],
        "fatherCode": "40/6",
        "fatherName": "عز الدين بن محمد بن عبد المعطي",
        "fatherFullName": "عز الدين بن محمد بن عبد المعطي",
        "generation": 40,
        "children": [
            {
                "code": "41/1",
                "name": "(لم تتم موافاتنا)",
                "raw": "41/ 1 –",
                "generation": 41,
                "isMartyr": False,
                "noOffspring": False,
                "hasDaughters": False
            },
            {
                "code": "41/2",
                "name": "(لم تتم موافاتنا)",
                "raw": "41/ 2 –",
                "generation": 41,
                "isMartyr": False,
                "noOffspring": False,
                "hasDaughters": False
            }
        ]
    },
    {
        "id": "seq-block-40-7-abdelraouf",
        "mainBranch": blocks[samir_idx]['mainBranch'],
        "fatherCode": "40/7",
        "fatherName": "عبد الرؤوف بن محمد بن عبد المعطي",
        "fatherFullName": "عبد الرؤوف بن محمد بن عبد المعطي",
        "generation": 40,
        "children": [
            {
                "code": "41/1",
                "name": "(لم تتم موافاتنا)",
                "raw": "41/ 1 -",
                "generation": 41,
                "isMartyr": False,
                "noOffspring": False,
                "hasDaughters": False
            },
            {
                "code": "41/2",
                "name": "(لم تتم موافاتنا)",
                "raw": "41/ 2 –",
                "generation": 41,
                "isMartyr": False,
                "noOffspring": False,
                "hasDaughters": False
            },
            {
                "code": "41/3",
                "name": "(لم تتم موافاتنا)",
                "raw": "41/ 3 -",
                "generation": 41,
                "isMartyr": False,
                "noOffspring": False,
                "hasDaughters": False
            },
            {
                "code": "41/4",
                "name": "(لم تتم موافاتنا)",
                "raw": "41/ 4 –",
                "generation": 41,
                "isMartyr": False,
                "noOffspring": False,
                "hasDaughters": False
            }
        ]
    },
    {
        "id": "seq-block-40-8-amin",
        "mainBranch": blocks[samir_idx]['mainBranch'],
        "fatherCode": "40/8",
        "fatherName": "أمين بن محمد بن عبد المعطي",
        "fatherFullName": "أمين بن محمد بن عبد المعطي",
        "generation": 40,
        "children": [
            {
                "code": "41/1",
                "name": "(لم تتم موافاتنا)",
                "raw": "41/ 1 -",
                "generation": 41,
                "isMartyr": False,
                "noOffspring": False,
                "hasDaughters": False
            },
            {
                "code": "41/2",
                "name": "(لم تتم موافاتنا)",
                "raw": "41/ 2 –",
                "generation": 41,
                "isMartyr": False,
                "noOffspring": False,
                "hasDaughters": False
            },
            {
                "code": "41/3",
                "name": "(لم تتم موافاتنا)",
                "raw": "41/ 3 -",
                "generation": 41,
                "isMartyr": False,
                "noOffspring": False,
                "hasDaughters": False
            },
            {
                "code": "41/4",
                "name": "(لم تتم موافاتنا)",
                "raw": "41/ 4 –",
                "generation": 41,
                "isMartyr": False,
                "noOffspring": False,
                "hasDaughters": False
            }
        ]
    },
    {
        "id": "seq-block-40-9-najeeb",
        "mainBranch": blocks[samir_idx]['mainBranch'],
        "fatherCode": "40/9",
        "fatherName": "نجيب بن محمد بن عبد المعطي",
        "fatherFullName": "نجيب بن محمد بن عبد المعطي",
        "generation": 40,
        "children": [
            {
                "code": "41/1",
                "name": "(لم تتم موافاتنا)",
                "raw": "41/ 1 -",
                "generation": 41,
                "isMartyr": False,
                "noOffspring": False,
                "hasDaughters": False
            },
            {
                "code": "41/2",
                "name": "(لم تتم موافاتنا)",
                "raw": "41/ 2 –",
                "generation": 41,
                "isMartyr": False,
                "noOffspring": False,
                "hasDaughters": False
            }
        ]
    }
]

# Find where the old immediate next blocks after Samir were (e.g. 40/4, 40/5, etc.) and replace with the precise sequence
# Let's find the first block of Yahya ben Abdelmoati
yahya_idx = -1
for idx in range(samir_idx + 1, len(blocks)):
    if 'يحي بن عبد المعطي' in blocks[idx].get('fatherName', '') or '40/1' in blocks[idx].get('fatherCode', '') and 'عبد العزيز بن يحي' in blocks[idx].get('fatherName', ''):
        yahya_idx = idx
        break

print(f"Yahya block index: {yahya_idx}")

# Combine: blocks[:samir_idx + 1] + samir_after_sequence + blocks[yahya_idx:]
rebuilt_blocks = blocks[:samir_idx + 1] + samir_after_sequence + blocks[yahya_idx:]

print(f"Rebuilt blocks count: {len(rebuilt_blocks)}")

# 2. SPECIFIC CORRECTION FOR ZAID BEN ALI:
# For node "أعقاب: 42/5 - زيد بن علي بن يحي بن عبد المعطي":
# REMOVE "مطهر" entirely.
# List ONLY these 5 sons under him: 43/1 أحمد, 43/2 حمزة, 43/3 علي, 43/4 عبد الله, 43/5 يحيى.
zaid_found = False
for b in rebuilt_blocks:
    if ('زيد بن علي' in b.get('fatherName', '') and 'يحي' in b.get('fatherName', '')) or b.get('fatherCode') in ['42/5']:
        if 'زيد بن علي' in b.get('fatherName', ''):
            zaid_found = True
            b['fatherCode'] = '42/5'
            b['fatherName'] = 'زيد بن علي بن يحي بن عبد المعطي'
            b['children'] = [
                {"code": "43/1", "name": "أحمد", "generation": 43, "isMartyr": False, "noOffspring": False, "hasDaughters": False},
                {"code": "43/2", "name": "حمزة", "generation": 43, "isMartyr": False, "noOffspring": False, "hasDaughters": False},
                {"code": "43/3", "name": "علي", "generation": 43, "isMartyr": False, "noOffspring": False, "hasDaughters": False},
                {"code": "43/4", "name": "عبد الله", "generation": 43, "isMartyr": False, "noOffspring": False, "hasDaughters": False},
                {"code": "43/5", "name": "يحيى", "generation": 43, "isMartyr": False, "noOffspring": False, "hasDaughters": False}
            ]
print(f"Zaid ben Ali corrected: {zaid_found}")

# 3. GENERIC HEADER RESOLUTION
for idx, b in enumerate(rebuilt_blocks):
    fn = b.get('fatherName', '').strip()
    if 'فرع موثق' in fn or not fn:
        # Check children to deduce father
        ch_names = [c['name'] for c in b.get('children', [])]
        next_b = rebuilt_blocks[idx + 1] if idx + 1 < len(rebuilt_blocks) else None
        next_fn = next_b.get('fatherName', '') if next_b else ''
        
        if 'إبراهيم بن احمد بن عبد المعطي' in next_fn:
            b['fatherName'] = "أحمد بن عبد المعطي"
            b['fatherCode'] = "39/2"
        elif 'محمد بن عبد الجليل بن عبد المعطي' in next_fn:
            b['fatherName'] = "عبد الجليل بن عبد المعطي"
            b['fatherCode'] = "39/3"
        elif 'علي بن محمد بن شرف' in next_fn:
            b['fatherName'] = "محمد بن شرف"
            b['fatherCode'] = "39/1"
        elif 'محمد بن وجيه' in next_fn:
            b['fatherName'] = "وجيه بن محمد"
            b['fatherCode'] = "38/1"
        elif 'محمد بن عبدالواسع' in next_fn or any('عبداللطيف' in n for n in ch_names):
            b['fatherName'] = "عبد الواسع بن الجنيد بن أحمد بن عثمان"
            b['fatherCode'] = "37/1"
        elif 'عبد المجيد بن عبد الملك' in next_fn or ('عبد المجيد' in ch_names and 'عبداللطيف' in ch_names):
            b['fatherName'] = "عبد الملك بن أحمد بن عثمان"
            b['fatherCode'] = "36/1"
        elif 'عبد الواحد بن عبد الله بن أحمد بن عثمان' in next_fn:
            b['fatherName'] = "عبد الله بن أحمد بن عثمان"
            b['fatherCode'] = "36/1"
        elif 'عبد الجليل قبول' in ch_names:
            b['fatherName'] = "فاضل بن محمد"
            b['fatherCode'] = "38/2"

# 4. FIX UNNAMED NUMBERED ENTRIES & CLEAN DIGIT-ONLY NAMES SYSTEM-WIDE
for b in rebuilt_blocks:
    new_ch = []
    for c in b.get('children', []):
        c_name = c.get('name', '').strip()
        c_code = c.get('code', '').strip()
        
        # Check if name is digits like "42 2 42 3" or similar
        digit_parts = re.findall(r'(\d+)\s+(\d+)', c_name)
        if digit_parts or re.match(r'^[\d\s\–\-\/]+$', c_name):
            # Split into individual unnamed entries
            sub_matches = re.findall(r'(\d+[\/\_]\d+|\d+)', c_name)
            # if c_name had something like "42 2 42 3"
            new_ch.append({
                "code": c_code,
                "name": "(لم تتم موافاتنا)",
                "generation": c.get('generation', 40),
                "isMartyr": c.get('isMartyr', False),
                "noOffspring": c.get('noOffspring', False),
                "hasDaughters": c.get('hasDaughters', False)
            })
            for sm in sub_matches:
                if '/' in sm:
                    sub_code = sm
                else:
                    # e.g. "2" -> generation/2
                    gen_prefix = c_code.split('/')[0] if '/' in c_code else "41"
                    sub_code = f"{gen_prefix}/{sm}"
                if sub_code != c_code:
                    new_ch.append({
                        "code": sub_code,
                        "name": "(لم تتم موافاتنا)",
                        "generation": int(sub_code.split('/')[0]) if '/' in sub_code else 40,
                        "isMartyr": False,
                        "noOffspring": False,
                        "hasDaughters": False
                    })
        elif not c_name or c_name in ['-', '–', '0', '']:
            c['name'] = "(لم تتم موافاتنا)"
            new_ch.append(c)
        else:
            # clean any trailing dashes/digits from name
            c['name'] = re.sub(r'[\–\-\—\.\:\=]+$', '', c['name']).strip()
            new_ch.append(c)
    b['children'] = new_ch

# 5. PATRONYMIC INHERITANCE (NAME HEALING)
# Create a dictionary of full lineage chains for fathers from subsequent node names and child nodes
chain_dict = {}
for b in rebuilt_blocks:
    fn = b.get('fatherName', '').strip()
    if ' بن ' in fn:
        parts = fn.split(' بن ')
        first = parts[0].strip()
        chain_dict[first] = fn
        # Also store sub-chains
        for i in range(len(parts) - 1):
            sub_name = parts[i].strip()
            sub_chain = ' بن '.join(parts[i:])
            if sub_name not in chain_dict or len(sub_chain) > len(chain_dict[sub_name]):
                chain_dict[sub_name] = sub_chain

for b in rebuilt_blocks:
    for c in b.get('children', []):
        cn = c.get('name', '').strip()
        if ' بن ' in cn:
            parts = cn.split(' بن ')
            first = parts[0].strip()
            if first not in chain_dict or len(cn) > len(chain_dict[first]):
                chain_dict[first] = cn

# Apply healing to single-name or short father headers
healed_count = 0
for idx, b in enumerate(rebuilt_blocks):
    fn = b.get('fatherName', '').strip()
    if fn and (' بن ' not in fn or len(fn.split(' بن ')) == 2 and len(fn.split()) <= 3):
        # Look at the first child or subsequent block to heal
        first_child = b.get('children', [{}])[0].get('name', '') if b.get('children') else ''
        if ' بن ' in first_child and fn in first_child:
            # e.g. child = "عبد القادر بن أحمد بن قاسم بن محمد بن بشر بن عماد" and father = "أحمد"
            chain_idx = first_child.find(fn)
            if chain_idx != -1:
                healed_name = first_child[chain_idx:].strip()
                b['fatherName'] = healed_name
                healed_count += 1
        elif idx + 1 < len(rebuilt_blocks):
            next_fn = rebuilt_blocks[idx + 1].get('fatherName', '')
            if ' بن ' in next_fn and fn in next_fn:
                chain_idx = next_fn.find(fn)
                if chain_idx != -1:
                    healed_name = next_fn[chain_idx:].strip()
                    b['fatherName'] = healed_name
                    healed_count += 1

print(f"Healed father names count: {healed_count}")

# Re-index block IDs cleanly
for idx, b in enumerate(rebuilt_blocks):
    b['id'] = f'seq-block-{idx + 1}'

# Save back to sequentialLineageData.ts
ts_content = f'''import {{ BasePerson }} from '../types';

export interface SequentialChildEntry {{
  code: string;
  name: string;
  raw?: string;
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
  fatherFullName?: string;
  generation: number;
  children: SequentialChildEntry[];
}}

export const sequentialLineageBlocks: SequentialBranchBlock[] = {json.dumps(rebuilt_blocks, ensure_ascii=False, indent=2)};
'''

with open('src/data/sequentialLineageData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f"Successfully wrote {len(rebuilt_blocks)} blocks to src/data/sequentialLineageData.ts")
