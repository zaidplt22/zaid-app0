with open('source_lineage.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's write to src/data/rawSharhAlBahrText.ts
safe_text = text.replace('`', '\\`').replace('${', '\\${')
ts_code = f"""// Raw verified genealogy text provided by the user
export const rawSharhAlBahrText = `{safe_text}`;
"""

with open('src/data/rawSharhAlBahrText.ts', 'w', encoding='utf-8') as f:
    f.write(ts_code)

print("rawSharhAlBahrText.ts updated successfully!")
