import re
import json

with open('source_lineage.txt', 'r', encoding='utf-8') as f:
    raw_lines = [l.strip() for l in f.readlines()]

# Let's search for lines like:
# أعقاب = X بن Y بن Z...
# or lines where a descendant chain goes through intermediate fathers
findings = []

for idx, l in enumerate(raw_lines):
    if not l: continue
    # Check for "أعقاب =" or "أعقاب /" or "3x/ x – X بن Y بن Z..."
    m = re.match(r'^(?:أعقاب\s*[=/／]+|\d+\s*[/／]\s*\d+\s*[–—\-:=]+)\s*(.+)$', l)
    if m:
        chain_str = m.group(1).strip()
        parts = [p.strip() for p in re.split(r'\s+بن\s+|\s+ابن\s+', chain_str) if p.strip()]
        if len(parts) >= 3:
            findings.append((idx+1, l, parts))

print(f"Total multi-generational chains identified: {len(findings)}")
for f_idx, f_line, f_parts in findings[:20]:
    print(f"Line {f_idx}: {' -> '.join(f_parts[:5])}")
