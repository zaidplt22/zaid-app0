import re
import json

with open('source_lineage.txt', 'r', encoding='utf-8') as f:
    text = f.read()

lines = [l.strip() for l in text.split('\n')]

# Let's find all instances where a father header contains an ancestral chain, and check if any intermediate ancestor was omitted in the earlier son lists.
print("Running genealogical chain audit...")

# We will collect:
# 1. All son listings under fathers
# 2. All father patronymic chains (e.g., "X بن Y بن Z بن W...")
# 3. Identify exact missing links where descendant chains explicitly name a father/grandfather not listed in the earlier child block.

# Let's inspect specific known examples from the text:
# Example 1:
# 32/ 1 – عبَّاد بن محسن (sons: عبد الله, حسن, جيلان)
# Later: أعقاب = عبد الله بن محمد بن عبد الله بن عبَّاد
# Here, under 33/ 1 عبد الله بن عبَّاد -> son محمد (34/x) -> son عبد الله (35/x)

headers_with_chains = []
for i, line in enumerate(lines):
    if ' بن ' in line and ('أعقاب' in line or re.match(r'^\d+\s*[/／]\s*\d+', line)):
        headers_with_chains.append((i+1, line))

print(f"Found {len(headers_with_chains)} lines with patronymic chains.")
