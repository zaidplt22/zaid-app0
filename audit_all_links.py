import re
import json

with open('src/data/sequentialLineageData.ts', 'r', encoding='utf-8') as f:
    code = f.read()

json_str = code.split('export const sequentialLineageBlocks: SequentialBranchBlock[] = ')[1].rstrip(';\n ')
blocks = json.loads(json_str)

print(f"Total blocks in dataset: {len(blocks)}")

# Let's inspect all blocks and check:
# 1. Number of children with codes
# 2. Status flags: isMartyr, noOffspring, hasDaughters, hasChildrenFollowup
# 3. Contextual missing links (such as intermediate ancestors deduced with 100% certainty from patronymic chains)

total_children = sum(len(b['children']) for b in blocks)
martyrs = sum(1 for b in blocks for c in b['children'] if c.get('isMartyr'))
no_offspring = sum(1 for b in blocks for c in b['children'] if c.get('noOffspring'))
has_daughters = sum(1 for b in blocks for c in b['children'] if c.get('hasDaughters'))

print(f"Total nodes/children: {total_children}")
print(f"Total martyrs flagged: {martyrs}")
print(f"Total no offspring flagged: {no_offspring}")
print(f"Total has daughters flagged: {has_daughters}")

# Let's check generations distribution
gen_counts = {}
for b in blocks:
    g = b.get('generation', 0)
    gen_counts[g] = gen_counts.get(g, 0) + 1

print("\nGeneration distribution of father blocks:")
for g in sorted(gen_counts.keys()):
    print(f"  Gen {g}: {gen_counts[g]} blocks")

