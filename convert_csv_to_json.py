import csv, json

input_file = "indian_restaurant_500_items.csv"
output_file = "foods_extra.json"

items = []

with open(input_file, newline='', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        items.append({
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
        })

with open(output_file, "w", encoding="utf-8") as f:
    json.dump(items, f, indent=2)

print(f"✔ Created {output_file} with {len(items)} items")
