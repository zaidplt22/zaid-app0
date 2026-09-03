import re
import json

def clean_text(s):
    return re.sub(r'\s+', ' ', s).strip()

with open('source_lineage.txt', 'r', encoding='utf-8') as f:
    raw_lines = f.readlines()

print(f"Total lines in source: {len(raw_lines)}")
