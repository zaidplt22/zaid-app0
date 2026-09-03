import re
import json

with open('source_lineage.txt', 'r', encoding='utf-8') as f:
    text = f.read()

lines = [l.strip() for l in text.split('\n')]
idx = -1
for i, l in enumerate(lines):
    if '3/28' in l or '28/ 3' in l:
        idx = i
        break

print("Lines around 3/28:")
for j in range(idx-2, idx+40):
    if j < len(lines):
        print(f"{j}: {lines[j]}")
