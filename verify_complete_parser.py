import re
import json

with open("source_lineage.txt", "r", encoding="utf-8") as f:
    text = f.read()

# Let's inspect all martyr names in source text
martyr_matches = re.findall(r'[^\n]*شهيد[^\n]*', text)
print(f"Total martyr occurrences in source text: {len(martyr_matches)}")
for m in martyr_matches[:5]:
    print(" - ", m.strip())

no_offspring_matches = re.findall(r'[^\n]*(?:لم يعقب|لا عقب|ليس له عقب)[^\n]*', text)
print(f"Total no-offspring occurrences in source text: {len(no_offspring_matches)}")
for m in no_offspring_matches[:5]:
    print(" - ", m.strip())
