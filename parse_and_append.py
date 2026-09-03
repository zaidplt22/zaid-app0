import re
import json

# Load existing blocks
with open('src/data/sequentialLineageData.ts', 'r', encoding='utf-8') as f:
    orig_text = f.read()

json_str = orig_text.split('sequentialLineageBlocks: SequentialBranchBlock[] = ')[1].rsplit(';', 1)[0].strip()
existing_blocks = json.loads(json_str)

# Find index of Samir and his three sons
samir_idx = -1
for idx, b in enumerate(existing_blocks):
    if b.get('fatherCode') == '41/6' and 'سمير' in b.get('fatherName', '') and any(c.get('name') == 'إبراهيم' for c in b.get('children', [])):
        samir_idx = idx
        break

print(f"Samir block index found: {samir_idx} (Total existing: {len(existing_blocks)})")

# Keep existing blocks up to Samir (0 to samir_idx inclusive)
preserved_blocks = existing_blocks[:samir_idx + 1]
print(f"Preserved existing blocks: {len(preserved_blocks)}")

