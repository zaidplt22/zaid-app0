import re
import json

with open('source_lineage.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# Verify verbatim text in source_lineage.txt
sharih_exact = """27 / 1 - شارح البحر 
وأعقب 
28/ 1 - الشيخ/ محمد [ لا نعلم له عقب ] 
28/ 2 - الشيخ/ عبيد [ لا نعلم له عقب ]
28/ 3 - الشيخ/ عبد الرحمن ساكن النقل بن أحمد شارح البحر بن عبد الله الحضرمي.

3/28 - اعقاب الشيخ / عبد الرحمن ساكن النقل بن شارح البحر أحمد بن عبد الله الحضرمي
               واعقب : 
29/ 1 - الشيخ / لطف الله ( الملقب اسكندر ) بن عبد الرحمن ساكن النقل بن أحمد بن عبد الله الحضرمي [ ولا نعلم له عقب ]. 

29 / 2 - الشيخ / عبد الله بن عبد الرحمن النقل بن شارح البحر أحمد بن عبد الله الحضرمي
             وأعقب: [ولا نعلم له عقب]

29 / 3 - الشيخ / أحمد بن عبد الرحمن النقل بن شارح البحر أحمد الحضرمي 
وأعقب :
30 / 1 - الجنيد        30 / 2 - عمر

30 / 1 - الجنيد بن أحمد بن عبد الرحمن النقل بن شارح البحر الحضرمي [عقبه في جبل حبشي]

30 / 2 - عمر بن أحمد بن عبد الرحمن النقل بن شارح البحر الحضرمي
وأعقب:
31 / 1 -أحمد (وعقبه في الحشأ والضالع)

29 / 4 - الشيخ محمد جمال الدين بن عبد الرحمن النقل بن أحمد شارح البحر بن عبد الله الحضرمي
"""

# Let's replace the section in source_lineage.txt
pattern = re.compile(r'27\s*[/／]\s*1\s*-\s*شارح البحر.*?29\s*[/／]\s*4\s*-\s*الشيخ محمد جمال الدين', re.DOTALL)
m = pattern.search(text)
if m:
    text = text[:m.start()] + sharih_exact + text[m.end()+len('29 / 4 - الشيخ محمد جمال الدين'):]
    with open('source_lineage.txt', 'w', encoding='utf-8') as f:
        f.write(text)
    print("source_lineage.txt updated with exact verbatim Sharih Al Bahr text!")
else:
    print("Could not find pattern in source_lineage.txt")

