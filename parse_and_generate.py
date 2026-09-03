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

# New data text from user request
