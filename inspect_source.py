with open("source_lineage.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()

print("First 100 lines of source_lineage.txt:")
for i, line in enumerate(lines[:80]):
    if line.strip():
        print(f"{i+1}: {line.strip()}")
