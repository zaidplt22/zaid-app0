import re
import json

def parse_source():
    with open('source_lineage.txt', 'r', encoding='utf-8') as f:
        text = f.read()

    # Split by standard delimiters or sections
    lines = [line.strip() for line in text.split('\n')]
    
    blocks = []
    current_father = None
    current_children = []
    
    # Let's inspect patterns
    # Father patterns:
    # 1) "37/ 1 – عبد الله بن سلطان بن علي" followed by "وأعقب :"
    # 2) "أعقاب / أحمد بن عثمان بن محمد..." or "أعقاب = سلطان بن علي..."
    # 3) "27 / 1 - شارح البحر // (( أحمد بن عبد الله الحضرمي... )) وأعقب :"
    # 4) "40/ 1 – عبد الله بن محمد بن عبد الحميد... وأعقب :"
    # Child entries pattern:
    # "38/ 1 – ناجي ليس له عقب"
    # "41/ 1 – مراد           41/ 2 – عبد السلام 41/ 3 – عبد الرحمن"
    # "37 / 1 – 37 / 2 –" (empty child codes)
    # "وأعقب : بنات" -> hasDaughters
    # "وأعقب : لم يعقب" -> noOffspring
    
    # We will build robust parsing logic
    
parse_source()
print("Parser engine loaded.")
