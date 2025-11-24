import json
import requests
import os

API_KEY = os.getenv("FOOD_API_KEY")
URL = "https://api.api-ninjas.com/v1/nutrition?query="

items = [
    "roti",
    "naan",
    "chicken curry",
    "idli"
]

headers = {"X-Api-Key": API_KEY}

def fetch_item(name):
    try:
        r = requests.get(URL + name, headers=headers, timeout=10)
        data = r.json()
        if not data:
            return None

        x = data[0]
        return {
            "name": name,
            "unit": "serving",
            "versions": {
                "home": {
                    "cal": x.get("calories", 0),
                    "prot": x.get("protein_g", 0),
                    "carb": x.get("carbohydrates_total_g", 0),
                    "fat": x.get("fat_total_g", 0)
                },
                "restaurant": {
                    "cal": round(x.get("calories", 0) * 1.15, 2),
                    "prot": x.get("protein_g", 0),
                    "carb": x.get("carbohydrates_total_g", 0),
                    "fat": round(x.get("fat_total_g", 0) * 1.25, 2)
                }
            }
        }
    except Exception as e:
        print("Error fetching", name, e)
        return None


def main():
    result = []

    for item in items:
        print("Fetching:", item)
        data = fetch_item(item)
        if data:
            result.append(data)

    with open("foods.json", "w") as f:
        json.dump(result, f, indent=2)

    print("Updated foods.json with", len(result), "items")


if __name__ == "__main__":
    main()
