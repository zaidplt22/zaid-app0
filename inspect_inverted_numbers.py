import re

with open('source_lineage.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's find matches of: (\d+)\s*[/／]\s*(\d+) where the first number is small (1..10) and the second number is large (27..43)
# E.g. "1/39", "2/38", "3/40", "1/41"
inverted_matches = list(re.finditer(r'(\b[1-9]|1[0-5])\s*[/／]\s*([2-4]\d)\b', text))
print(f"Found {len(inverted_matches)} occurrences of [index]/[gen] format (e.g. 1/39, 2/40):")
for m in inverted_matches[:20]:
    start = max(0, m.start() - 20)
    end = min(len(text), m.end() + 40)
    print(f"Match: {m.group(0)} (idx={m.group(1)}, gen={m.group(2)}) -> Context: {text[start:end].replace(chr(10), ' ')}")

