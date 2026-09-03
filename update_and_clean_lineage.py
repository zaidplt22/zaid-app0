import re
import json

with open('source_lineage.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. DATA REPLACEMENT:
# Locate from "من أعقاب السيد الشريف //" or before "27 / 1 - شارح البحر" up to right before "30 / 2 - عمر بن أحمد بن عبد الرحمن النقل بن شارح البحر الحضرمي"
# Let's inspect the exact text segment to replace

target_replacement = """27 / 1 - شارح البحر 
وأعقب 
28/ 1 - الشيخ/ محمد [ لا نعلم له عقب ] 
28/ 2 - الشيخ/ عبيد [ لا نعلم له عقب ]
28/ 3 - الشيخ/ عبد الرحمن ساكن النقل بن أحمد شارح البحر بن عبد الله الحضرمي.

3/28 -اعقاب الشيخ / عبد الرحمن ساكن النقل بن شارح البحر أحمد بن عبد الله الحضرمي
               واعقب : 
29/ 1 - الشيخ / لطف الله ( اسكندر ) بن عبد الرحمن ساكن النقل بن أحمد بن عبد الله الحضرمي [ ولا نعلم له عقب ]. 

29 / 2 - الشيخ / عبد الله بن عبد الرحمن النقل بن شارح البحرأحمد بن عبد الله الحضرمي
             وأعقب: [ولا نعلم له عقب]

29 / 3 - الشيخ / أحمد بن عبد الرحمن النقل بن شارح البحر أحمد الحضرمي 
وأعقب :
30 / 1 - الجنيد        30 / 2 - عمر

30 / 1 - الجنيد بن أحمد بن عبد الرحمن النقل بن شارح البحر الحضرمي [عقبه في جبل حبشي]
"""

# Regex to match from (من أعقاب السيد الشريف // ... 27 / 1 - شارح البحر ... up to 30 / 2 - عمر)
pattern_sharih = re.compile(
    r'(?:من أعقاب السيد الشريف\s*//.*?)?27\s*[/／]\s*1\s*-\s*شارح البحر.*?30\s*[/／]\s*1\s*-\s*الجنيد بن أحمد بن عبد الرحمن النقل بن شارح البحر الحضرمي.*?(?=30\s*[/／]\s*2\s*-\s*عمر)',
    re.DOTALL
)

m_sharih = pattern_sharih.search(text)
if m_sharih:
    print("Found Sharih Al-Bahr segment to replace:")
    print("MATCH LENGTH:", len(m_sharih.group(0)))
    text = text[:m_sharih.start()] + target_replacement + "\n" + text[m_sharih.end():]
else:
    print("WARNING: Could not match Sharih Al-Bahr segment via pattern!")

# 3. SPECIFIC LINEAGE CORRECTION:
# Locate: 42/ 5 – زيد بن علي بن يحي بن عبد المعطي (or similar)
# Replace his children: NOT مطهر -> 43/1 أحمد, 43/2 حمزة, 43/3 علي, 43/4 عبد الله, 43/5 يحيى

zayd_pattern = re.compile(
    r'(4[12]\s*[/／]\s*5\s*[–—\-:=]+\s*زيد بن علي بن يحي بن\s*(?:بن\s*)?عبد المعطي\s*\n\s*وأعقب\s*[:：]?\s*\n\s*)(?:42\s*[/／]\s*1\s*[–—\-:=]+\s*مطهر.*?)(?=\n\s*(?:_{2,}|4[12]\s*[/／]|\n\s*4[12]))',
    re.DOTALL
)

m_zayd = zayd_pattern.search(text)
if m_zayd:
    print("Found Zayd bin Ali bin Yahya bin Abdul-Mu'ti block to update!")
    replacement_zayd = m_zayd.group(1) + "43/ 1 – أحمد 43/ 2 – حمزة\n43/ 3 – علي 43/ 4 – عبد الله\n43/ 5 – يحيى\n"
    text = text[:m_zayd.start()] + replacement_zayd + text[m_zayd.end():]
else:
    print("WARNING: Zayd pattern did not match directly, trying secondary pattern...")
    zayd_pattern2 = re.compile(
        r'(4[12]\s*[/／]\s*5\s*[–—\-:=]+\s*زيد بن علي بن يحي بن\s*(?:بن\s*)?عبد المعطي\s*\n\s*وأعقب\s*[:：]?\s*\n\s*)([^\n]+)',
    )
    m_zayd2 = zayd_pattern2.search(text)
    if m_zayd2:
        print("Found Zayd via pattern2:", m_zayd2.group(0))
        replacement_zayd = m_zayd2.group(1) + "43/ 1 – أحمد 43/ 2 – حمزة  43/ 3 – علي  43/ 4 – عبد الله  43/ 5 – يحيى"
        text = text[:m_zayd2.start()] + replacement_zayd + text[m_zayd2.end():]

# 2. TEXT CLEANUP & FORMATTING:
# Remove all decorative underscoring lines (e.g., "_____________", "____", "ـــــ", "=====") present beside names or headers or as standalone lines.
lines = text.split('\n')
cleaned_lines = []
for line in lines:
    # Remove underscores sequences
    l = re.sub(r'_+', '', line)
    # Remove long tatweel sequences (ــــــ)
    l = re.sub(r'ـ{3,}', '', l)
    # Remove long equals lines (=====) that are purely decorative
    if re.match(r'^\s*={3,}\s*$', l):
        continue
    # Strip trailing/leading spaces if line became empty or whitespace
    l = l.rstrip()
    if re.match(r'^\s*$', l) and cleaned_lines and cleaned_lines[-1] == '':
        # Avoid excessive consecutive blank lines
        continue
    cleaned_lines.append(l)

cleaned_text = '\n'.join(cleaned_lines)

with open('source_lineage.txt', 'w', encoding='utf-8') as f:
    f.write(cleaned_text)

print("source_lineage.txt updated and cleaned successfully!")
