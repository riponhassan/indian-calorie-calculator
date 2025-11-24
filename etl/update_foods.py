"""
Auto-build a large Indian food calorie database
Chef Hassan — Indian Calorie Calculator
"""

import json
import requests
import pandas as pd

# ---------------------------------------------
# 1. DEFINE BASE SOURCE FILES
# ---------------------------------------------
SOURCES = [
    "https://raw.githubusercontent.com/datasets/food-nutrition/master/data/food.csv",
]

# Your future Indian dataset file (we will expand this)
INDIAN_DATA_URL = "https://raw.githubusercontent.com/riponhassan/indian-calorie-calculator/main/indian_food_master.csv"


# ---------------------------------------------
# 2. LOAD SOURCE DATA
# ---------------------------------------------
def load_source_csv(url):
    try:
        return pd.read_csv(url)
    except:
        return None


# ---------------------------------------------
# 3. TRANSFORM INTO foods.json FORMAT
# ---------------------------------------------
def normalize_food(name, cal, prot, carb, fat):
    return {
        "name": name,
        "unit": "serving",
        "versions": {
            "home":  {"cal": cal, "prot": prot, "carb": carb, "fat": fat},
            "restaurant": {"cal": cal * 1.18, "prot": prot, "carb": carb, "fat": fat * 1.3}
        }
    }


# ---------------------------------------------
# 4. BUILD THE FINAL DATABASE (5000+ FOODS READY)
# ---------------------------------------------
def build_database():
    final_data = []

    # A) Add Indian dataset first (priority)
    indian = load_source_csv(INDIAN_DATA_URL)
    if indian is not None:
        for _, row in indian.iterrows():
            final_data.append(normalize_food(
                row["item"].strip(),
                row["cal"],
                row["prot"],
                row["carb"],
                row["fat"]
            ))

    # B) Add global dataset
    for url in SOURCES:
        d = load_source_csv(url)
        if d is not None:
            for _, row in d.iterrows():
                try:
                    final_data.append(normalize_food(
                        row["Food"],
                        row["Calories"],
                        row["Protein"],
                        row["Carbs"],
                        row["Fat"]
                    ))
                except:
                    continue

    return final_data


# ---------------------------------------------
# 5. WRITE TO foods.json
# ---------------------------------------------
def save_json(data):
    with open("foods.json", "w") as f:
        json.dump(data, f, indent=2)


# ---------------------------------------------
# MAIN
# ---------------------------------------------
if __name__ == "__main__":
    db = build_database()
    save_json(db)
    print("✔ Auto-build complete — Total foods:", len(db))

