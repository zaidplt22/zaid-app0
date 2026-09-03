import re
import json

with open('src/data/sequentialLineageData.ts', 'r', encoding='utf-8') as f:
    text = f.read()

json_str = text.split('sequentialLineageBlocks: SequentialBranchBlock[] = ')[1].rsplit(';', 1)[0].strip()
blocks = json.loads(json_str)

for b in blocks:
    f_gen = b.get('generation', 39)
    for c in b.get('children', []):
        if 'generation' not in c or not c['generation']:
            code = c.get('code', '')
            if '/' in code:
                try:
                    c['generation'] = int(code.split('/')[0])
                except:
                    c['generation'] = f_gen + 1
            else:
                c['generation'] = f_gen + 1
        if 'isMartyr' not in c:
            c['isMartyr'] = False
        if 'noOffspring' not in c:
            c['noOffspring'] = False
        if 'hasDaughters' not in c:
            c['hasDaughters'] = False

ts_content = f'''import {{ BasePerson }} from '../types';

export interface SequentialChildEntry {{
  code: string;
  name: string;
  raw?: string;
  generation?: number;
  isMartyr?: boolean;
  noOffspring?: boolean;
  hasDaughters?: boolean;
  hasChildrenFollowup?: boolean;
  notes?: string | null;
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

export const sequentialLineageBlocks: SequentialBranchBlock[] = {json.dumps(blocks, ensure_ascii=False, indent=2)};
'''

with open('src/data/sequentialLineageData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print("Successfully fixed types and children generation properties.")
