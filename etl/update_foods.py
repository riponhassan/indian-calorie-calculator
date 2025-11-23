import json
import requests
import os

API_KEY = os.getenv("FOOD_API_KEY")

URL = "https://api.calorieninjas.com/v1/nutrition?query="

print("🔄 Chef Hassan — Updating foods.json...")

with open("foods.json", "r", encoding="utf-8") as f:
    foods = json.load(f)

updated = []

for item in foods:
    name = item["name"]
    query = name.replace("(100g)", "").replace("(", "").replace(")", "")

    response = requests.get(
        URL + query,
        headers={"X-Api-Key": API_KEY}
    )

    if response.status_code == 200:
        data = response.json()

        if data["items"]:
            new = data["items"][0]

            # Update HOME values only
            item["versions"]["home"]["cal"] = round(new["calories"])
            item["versions"]["home"]["prot"] = round(new["protein_g"], 1)
            item["versions"]["home"]["carb"] = round(new["carbohydrates_total_g"], 1)
            item["versions"]["home"]["fat"] = round(new["fat_total_g"], 1)

            print(f"✔ Updated: {name}")

    updated.append(item)

with open("foods.json", "w", encoding="utf-8") as f:
    json.dump(updated, f, indent=2)

print("🎉 DONE! foods.json updated successfully.")
