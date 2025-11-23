import json
import requests

URL = "https://raw.githubusercontent.com/riponhassan/indian-calorie-calculator/main/foods.json"

def update_foods():
    print("Fetching latest data...")

    data = requests.get(URL).json()

    # Example transformation — you can expand later
    for item in data:
        # standardize keys if needed
        item["unit"] = item.get("unit", "serving")

    with open("foods.json", "w") as f:
        json.dump(data, f, indent=2)

    print("foods.json updated.")

if __name__ == "__main__":
    update_foods()
