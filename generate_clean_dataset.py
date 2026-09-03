import re
import json

def parse_all():
    with open('source_lineage.txt', 'r', encoding='utf-8') as f:
        text = f.read()

    lines = [l.strip() for l in text.split('\n')]
    
    # We will parse the file into logical blocks.
    # A block starts when we encounter a father definition.
    # Father definitions often look like:
    # 1. "40/ 1 – عبد الله بن محمد بن عبد الحميد..." followed or preceded by "وأعقب:"
    # 2. "37/ 1 – عبد الله بن سلطان بن علي"
    # 3. "أعقاب = سلطان بن علي بن عبد الله بن محمد..."
    # 4. "27 / 1 - شارح البحر // (( أحمد بن عبد الله الحضرمي... ))"
    
    # Let's write helper functions for status detection
    def clean_name(s):
        s = re.sub(r'[\(\[\{].*?[\)\]\}]', '', s) # remove brackets for base name
        s = re.sub(r'[-–—=/_*#@]+', ' ', s)
        s = re.sub(r'\s+', ' ', s)
        return s.strip()

    def get_status(s):
        is_martyr = bool(re.search(r'شهيد', s))
        no_offspring = bool(re.search(r'لم يعقب|لا عقب له|ليس له عقب|مات و\s*لا عقب|انقرض|متوفى ولا عقب|\(×\)|×', s))
        has_daughters = bool(re.search(r'بنات|بنت|أعقب بنات', s))
        return is_martyr, no_offspring, has_daughters

    # Let's inspect all tokens with code pattern: (\d+)\s*[/／]\s*(\d+)\s*[–—\-]?
    # A child entry can appear multiple times on a single line, e.g. "40/ 1 – عبد الصمد  40/ 2 – محمود 40/ 3 – زايد"
    
    blocks = []
    
    # We can use a tokenizer approach or regex line scan
    # Let's build a smart multi-pass parser
    
    raw_blocks = []
    current_father_header = ""
    current_father_code = ""
    current_father_gen = 30
    current_children_raw = []
    
    # Let's identify fathers vs children
    # Usually: If a line has "وأعقب" or "أعقب" or "واعقب", whatever preceded it (or was on the same line before 'وأعقب') is the Father!
    # The items following "وأعقب" until the next Father are the children.
    
    print("Beginning robust parsing...")

parse_all()
