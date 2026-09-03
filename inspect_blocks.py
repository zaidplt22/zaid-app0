import json

with open("src/data/sequentialLineageData.ts", "r") as f:
    content = f.read()

json_part = content.split("export const sequentialLineageBlocks: SequentialBranchBlock[] = ")[1].rstrip(";\n ")
blocks = json.loads(json_part)

print(f"Number of blocks: {len(blocks)}")
for b in blocks[:15]:
    c_names = [c['name'] + ' (' + c['code'] + ')' for c in b['children'][:3]]
    print(f"Gen: {b['generation']} | Code: {b['fatherCode']} | Name: {b['fatherName'][:60]} | Children: {', '.join(c_names)}")
