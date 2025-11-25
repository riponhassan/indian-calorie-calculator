# validate_json.py
import json, sys

path = "data/foods_extra.json"  # change to foods_extra.json or foods.json if needed

try:
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    # attempt to parse
    data = json.loads(content)
    print("✅ JSON valid. Items:", len(data) if isinstance(data, list) else "ok")
except json.JSONDecodeError as e:
    # show helpful context around the error
    line = e.lineno
    col = e.colno
    print("❌ JSON parse error:", e.msg)
    print(f"Location: line {line} column {col}")
    ctx_lines = content.splitlines()
    start = max(0, line-4)
    end = min(len(ctx_lines), line+3)
    print("\n--- file excerpt ---")
    for i in range(start, end):
        prefix = ">>" if i+1==line else "  "
        print(f"{prefix} {i+1:4d}: {ctx_lines[i]}")
    print("--- end excerpt ---")
    sys.exit(1)
except FileNotFoundError:
    print("❌ File not found:", path)
    sys.exit(2)
