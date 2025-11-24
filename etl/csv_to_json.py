import csv, json

data = []

with open("indian_restaurant_500_items.csv", newline="", encoding="utf8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        item = {
            "name": row["name"],
            "unit": "serving",
            "versions": {
                "restaurant": {
                    "cal": float(row["cal"]),
                    "prot": float(row["protein"]),
                    "carb": float(row["carbs"]),
                    "fat": float(row["fat"])
                }
            }
        }
        data.append(item)

with open("foods_extra.json", "w", encoding="utf8") as f:
    json.dump(data, f, indent=2)

print("✔ foods_extra.json created (from CSV)")
