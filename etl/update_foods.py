import json
import os

FILE = "foods.json"

def load_foods():
    with open(FILE, "r", encoding="utf-8") as f:
        return json.load(f)

def save_foods(data):
    with open(FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

def main():
    print("🔪 Chef Hassan — Auto Food Updater Running...")

    foods = load_foods()

    # Example: auto append missing keys
    for item in foods:
        if "versions" not in item:
            print("Fixing:", item["name"])
            item["versions"] = {
                "home":  {
                    "cal": item.get("calories", 0),
                    "prot": item.get("protein", 0),
                    "carb": item.get("carbs", 0),
                    "fat": item.get("fat", 0)
                },
                "restaurant": {
                    "cal": item.get("calories", 0) + 10,
                    "prot": item.get("protein", 0),
                    "carb": item.get("carbs", 0),
                    "fat": item.get("fat", 0) + 1
                }
            }

    save_foods(foods)
    print("✔ Updated foods.json successfully")

if __name__ == "__main__":
    main()
