# etl/update_foods.py -- demo placeholder
# Usage: python etl/update_foods.py --out data/updates/2025-11-23.json

import os, json, argparse, datetime
parser = argparse.ArgumentParser()
parser.add_argument("--out", default=f"data/updates/sample-{int(datetime.datetime.utcnow().timestamp())}.json")
args = parser.parse_args()
os.makedirs(os.path.dirname(args.out), exist_ok=True)
sample = {
  "generated_at": datetime.datetime.utcnow().isoformat(),
  "items_added": 0,
  "note": "placeholder - replace with real ETL"
}
with open(args.out, "w", encoding="utf-8") as fh:
    json.dump(sample, fh, indent=2)
print("Wrote", args.out)
