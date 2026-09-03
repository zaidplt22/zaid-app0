import re
import json

with open('source_lineage.txt', 'r', encoding='utf-8') as f:
    lines = [line.strip() for line in f.readlines()]

print(f"Total lines: {len(lines)}")

# Let's see some patterns of lines
code_pattern = re.compile(r'^(\d+)\s*[/／]\s*(\d+)\s*[–—\-]\s*(.*)$')
wa_aqaba_pattern = re.compile(r'^(?:و?\s*أعقب|و?\s*اعقب|و?\s*أغقب)\s*[:：]?(.*)$')
aaqab_header_pattern = re.compile(r'^(?:أعقاب|اعقاب|أعفاب)\s*[=/／]\s*(.*)$')

father_blocks = []
current_block = None

i = 0
while i < len(lines):
    line = lines[i]
    if not line:
        i += 1
        continue
    
    # Check if line is a father header or a child line or separator
    i += 1

print("Ready to implement full regex and state machine.")
