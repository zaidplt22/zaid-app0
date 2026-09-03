import re
import json

with open('source_lineage.txt', 'r', encoding='utf-8') as f:
    text = f.read()

lines = [l.strip() for l in text.split('\n')]

# Let's find all patronymic chains in father headers or section titles
chains = []
for i, l in enumerate(lines):
    if not l: continue
    # match أعقاب = X or code - X
    m = re.match(r'^(?:أعقاب\s*[=/／]+|\d+\s*[/／]\s*\d+\s*[–—\-:=]+)\s*(.+)$', l)
    if m:
        raw_chain = m.group(1)
        raw_chain = re.sub(r'[\(\[\{].*?[\)\]\}]', '', raw_chain)
        raw_chain = re.sub(r'[-–—=/_*#@:]+', ' ', raw_chain)
        raw_chain = re.sub(r'(?:و?\s*أعقب|و?\s*اعقب|و?\s*أغقب).*$', '', raw_chain)
        raw_chain = re.sub(r'\s+', ' ', raw_chain).strip()
        
        # split by بن
        parts = [p.strip() for p in re.split(r'\s+بن\s+|\s+ابن\s+', raw_chain) if p.strip()]
        if len(parts) >= 3:
            chains.append((i+1, raw_chain, parts))

print(f"Total patronymic chains: {len(chains)}")

# Let's inspect some of the unique deep lineages
ancestor_graphs = {}
for line_no, raw_c, parts in chains:
    for j in range(len(parts)-1):
        son = parts[j]
        father = parts[j+1]
        if father not in ancestor_graphs:
            ancestor_graphs[father] = set()
        ancestor_graphs[father].add(son)

print(f"Total unique fathers in patronymic chains: {len(ancestor_graphs)}")
# Show notable deduced father-son relationships:
for f in list(ancestor_graphs.keys())[:25]:
    sons = list(ancestor_graphs[f])
    print(f"Father [{f}] -> Sons from chains: {', '.join(sons[:5])}")

