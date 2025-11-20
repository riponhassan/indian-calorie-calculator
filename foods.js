/* foods.js
   HassanChef — Indian foods database (Hybrid Option C)
   Each key is searchable (clean name). Each item has:
     display: Friendly name,
     versions: { restaurant: {cal, prot, carb, fat, fiber?}, home: { ... } }
*/

const foodDB = {
  "roti": {
    display: "Roti (1 medium)",
    versions: {
      restaurant: { cal: 120, prot: 3, carb: 18, fat: 3, fiber: 2 },
      home:       { cal: 100, prot: 3, carb: 16, fat: 2, fiber: 2 }
    }
  },

  "chapati": {
    display: "Chapati (1 medium)",
    versions: {
      restaurant: { cal: 120, prot: 3, carb: 18, fat: 3, fiber: 2 },
      home:       { cal: 100, prot: 3, carb: 16, fat: 2, fiber: 2 }
    }
  },

  "naan": {
    display: "Naan (plain)",
    versions: {
      restaurant: { cal: 290, prot: 8, carb: 45, fat: 6, fiber: 2 },
      home:       { cal: 260, prot: 7, carb: 40, fat: 5, fiber: 2 }
    }
  },

  "butter naan": {
    display: "Butter Naan",
    versions: {
      restaurant: { cal: 370, prot: 7, carb: 45, fat: 17, fiber: 2 },
      home:       { cal: 300, prot: 7, carb: 40, fat: 12, fiber: 2 }
    }
  },

  "plain paratha": {
    display: "Plain Paratha (1)",
    versions: {
      restaurant: { cal: 320, prot: 6, carb: 30, fat: 18, fiber: 2 },
      home:       { cal: 260, prot: 5, carb: 28, fat: 12, fiber: 2 }
    }
  },

  "aloo paratha": {
    display: "Aloo Paratha (1)",
    versions: {
      restaurant: { cal: 380, prot: 7, carb: 45, fat: 18, fiber: 3 },
      home:       { cal: 320, prot: 6, carb: 40, fat: 12, fiber: 3 }
    }
  },

  "basmati rice 100g": {
    display: "Basmati cooked (100 g)",
    versions: {
      restaurant: { cal: 130, prot: 2.5, carb: 28, fat: 0.3 },
      home:       { cal: 120, prot: 2.4, carb: 27, fat: 0.2 }
    }
  },

  "jeera rice 1 cup": {
    display: "Jeera Rice (1 cup)",
    versions: {
      restaurant: { cal: 260, prot: 5, carb: 50, fat: 4 },
      home:       { cal: 220, prot: 4.5, carb: 45, fat: 3 }
    }
  },

  "veg biryani 1 plate": {
    display: "Vegetable Biryani (1 plate)",
    versions: {
      restaurant: { cal: 520, prot: 8, carb: 70, fat: 20, fiber: 5 },
      home:       { cal: 420, prot: 7, carb: 60, fat: 12, fiber: 5 }
    }
  },

  "chicken biryani": {
    display: "Chicken Biryani (1 plate)",
    versions: {
      restaurant: { cal: 700, prot: 35, carb: 80, fat: 28 },
      home:       { cal: 550, prot: 30, carb: 65, fat: 18 }
    }
  },

  "mutton biryani": {
    display: "Mutton Biryani (1 plate)",
    versions: {
      restaurant: { cal: 820, prot: 40, carb: 80, fat: 40 },
      home:       { cal: 680, prot: 36, carb: 70, fat: 30 }
    }
  },

  "dal 1 cup": {
    display: "Dal (1 cup cooked)",
    versions: {
      restaurant: { cal: 200, prot: 11, carb: 27, fat: 6, fiber: 7 },
      home:       { cal: 180, prot: 10, carb: 25, fat: 4, fiber: 7 }
    }
  },

  "chana masala 1 cup": {
    display: "Chana Masala (1 cup)",
    versions: {
      restaurant: { cal: 340, prot: 14, carb: 50, fat: 8, fiber: 12 },
      home:       { cal: 300, prot: 13, carb: 45, fat: 6, fiber: 12 }
    }
  },

  "rajma 1 cup": {
    display: "Rajma (1 cup)",
    versions: {
      restaurant: { cal: 330, prot: 14, carb: 55, fat: 5, fiber: 12 },
      home:       { cal: 290, prot: 13, carb: 50, fat: 4, fiber: 12 }
    }
  },

  "paneer 100g": {
    display: "Paneer (100 g)",
    versions: {
      restaurant: { cal: 320, prot: 18, carb: 6, fat: 26 },
      home:       { cal: 265, prot: 18, carb: 6, fat: 20 }
    }
  },

  "palak paneer 1 cup": {
    display: "Palak Paneer (1 cup)",
    versions: {
      restaurant: { cal: 420, prot: 18, carb: 10, fat: 30 },
      home:       { cal: 320, prot: 16, carb: 8, fat: 18 }
    }
  },

  "paneer butter masala": {
    display: "Paneer Butter Masala (1 cup)",
    versions: {
      restaurant: { cal: 530, prot: 20, carb: 20, fat: 36 },
      home:       { cal: 400, prot: 18, carb: 18, fat: 24 }
    }
  },

  "butter chicken": {
    display: "Butter Chicken (1 serving)",
    versions: {
      restaurant: { cal: 650, prot: 38, carb: 10, fat: 44 },
      home:       { cal: 420, prot: 32, carb: 8, fat: 24 }
    }
  },

  "matar paneer": {
    display: "Matar Paneer (1 cup)",
    versions: {
      restaurant: { cal: 470, prot: 18, carb: 20, fat: 32 },
      home:       { cal: 360, prot: 16, carb: 18, fat: 20 }
    }
  },

  "kadai paneer": {
    display: "Kadai Paneer (1 cup)",
    versions: {
      restaurant: { cal: 500, prot: 19, carb: 18, fat: 34 },
      home:       { cal: 380, prot: 18, carb: 16, fat: 22 }
    }
  },

  "chicken curry": {
    display: "Chicken Curry (1 serving)",
    versions: {
      restaurant: { cal: 420, prot: 28, carb: 8, fat: 28 },
      home:       { cal: 320, prot: 26, carb: 6, fat: 18 }
    }
  },

  "tandoori chicken 1 piece": {
    display: "Tandoori Chicken (1 leg)",
    versions: {
      restaurant: { cal: 320, prot: 28, carb: 3, fat: 20 },
      home:       { cal: 280, prot: 26, carb: 3, fat: 15 }
    }
  },

  "fish curry 1 serving": {
    display: "Fish Curry (1 serving)",
    versions: {
      restaurant: { cal: 420, prot: 30, carb: 8, fat: 28 },
      home:       { cal: 310, prot: 28, carb: 6, fat: 16 }
    }
  },

  "prawns curry": {
    display: "Prawns Curry (1 serving)",
    versions: {
      restaurant: { cal: 360, prot: 30, carb: 6, fat: 20 },
      home:       { cal: 280, prot: 28, carb: 4, fat: 12 }
    }
  },

  "idli (1)": {
    display: "Idli (1 medium)",
    versions: {
      restaurant: { cal: 60, prot: 2, carb: 12, fat: 0.5 },
      home:       { cal: 58, prot: 2, carb: 12, fat: 0.4 }
    }
  },

  "dosa plain": {
    display: "Dosa (plain)",
    versions: {
      restaurant: { cal: 180, prot: 3, carb: 28, fat: 4 },
      home:       { cal: 160, prot: 3, carb: 26, fat: 3.5 }
    }
  },

  "masala dosa": {
    display: "Masala Dosa (with potato masala)",
    versions: {
      restaurant: { cal: 360, prot: 6, carb: 50, fat: 10 },
      home:       { cal: 300, prot: 6, carb: 45, fat: 8 }
    }
  },

  "sambar 1 cup": {
    display: "Sambar (1 cup)",
    versions: {
      restaurant: { cal: 120, prot: 4, carb: 18, fat: 3 },
      home:       { cal: 100, prot: 3.5, carb: 16, fat: 2 }
    }
  },

  "rasam 1 cup": {
    display: "Rasam (1 cup)",
    versions: {
      restaurant: { cal: 30, prot: 1, carb: 6, fat: 0.5 },
      home:       { cal: 25, prot: 1, carb: 5, fat: 0.3 }
    }
  },

  "medu vada": {
    display: "Medu Vada (1)",
    versions: {
      restaurant: { cal: 180, prot: 6, carb: 18, fat: 9 },
      home:       { cal: 160, prot: 6, carb: 16, fat: 8 }
    }
  },

  "upma 1 cup": {
    display: "Upma (1 cup)",
    versions: {
      restaurant: { cal: 250, prot: 6, carb: 45, fat: 6 },
      home:       { cal: 220, prot: 5, carb: 40, fat: 4 }
    }
  },

  "poha 1 cup": {
    display: "Poha (1 cup)",
    versions: {
      restaurant: { cal: 220, prot: 5, carb: 40, fat: 6 },
      home:       { cal: 190, prot: 5, carb: 36, fat: 4 }
    }
  },

  "pav bhaji 1 plate": {
    display: "Pav Bhaji (1 plate with 2 pav)",
    versions: {
      restaurant: { cal: 700, prot: 12, carb: 95, fat: 28 },
      home:       { cal: 520, prot: 10, carb: 80, fat: 16 }
    }
  },

  "vada pav": {
    display: "Vada Pav (1)",
    versions: {
      restaurant: { cal: 410, prot: 7, carb: 43, fat: 20 },
      home:       { cal: 360, prot: 6, carb: 38, fat: 15 }
    }
  },

  "samosa (1 medium)": {
    display: "Samosa (1 medium)",
    versions: {
      restaurant: { cal: 260, prot: 4, carb: 30, fat: 14 },
      home:       { cal: 220, prot: 4, carb: 28, fat: 12 }
    }
  },

  "pakora (100g)": {
    display: "Mixed Veg Pakora (100 g)",
    versions: {
      restaurant: { cal: 450, prot: 6, carb: 40, fat: 30 },
      home:       { cal: 380, prot: 6, carb: 36, fat: 24 }
    }
  },

  "chaat (bhel)": {
    display: "Bhel Puri (1 plate)",
    versions: {
      restaurant: { cal: 420, prot: 7, carb: 70, fat: 8 },
      home:       { cal: 350, prot: 6, carb: 60, fat: 6 }
    }
  },

  "pani puri 6pcs": {
    display: "Pani Puri (6 pieces)",
    versions: {
      restaurant: { cal: 180, prot: 3, carb: 30, fat: 6 },
      home:       { cal: 150, prot: 3, carb: 26, fat: 4 }
    }
  },

  "kebabs 100g": {
    display: "Kebabs (100 g)",
    versions: {
      restaurant: { cal: 300, prot: 20, carb: 6, fat: 22 },
      home:       { cal: 260, prot: 20, carb: 5, fat: 16 }
    }
  },

  "bread toast 1 slice": {
    display: "Bread Toast (1 slice)",
    versions: {
      restaurant: { cal: 80, prot: 3, carb: 14, fat: 1.5 },
      home:       { cal: 75, prot: 3, carb: 13, fat: 1 }
    }
  },

  "egg omelette 2 eggs": {
    display: "Egg Omelette (2 eggs)",
    versions: {
      restaurant: { cal: 210, prot: 14, carb: 2, fat: 16 },
      home:       { cal: 180, prot: 13, carb: 2, fat: 13 }
    }
  },

  "boiled egg (1)": {
    display: "Boiled Egg (1 large)",
    versions: {
      restaurant: { cal: 78, prot: 6, carb: 0.6, fat: 5 },
      home:       { cal: 75, prot: 6, carb: 0.6, fat: 5 }
    }
  },

  "omelette masala": {
    display: "Masala Omelette (2 eggs)",
    versions: {
      restaurant: { cal: 240, prot: 15, carb: 6, fat: 18 },
      home:       { cal: 200, prot: 14, carb: 5, fat: 14 }
    }
  },

  "vegetable salad 1 cup": {
    display: "Vegetable Salad (1 cup)",
    versions: {
      restaurant: { cal: 90, prot: 2, carb: 10, fat: 5, fiber: 3 },
      home:       { cal: 60, prot: 2, carb: 8, fat: 2, fiber: 3 }
    }
  },

  "raita 1 cup": {
    display: "Raita (1 cup)",
    versions: {
      restaurant: { cal: 120, prot: 5, carb: 8, fat: 6 },
      home:       { cal: 90, prot: 4, carb: 6, fat: 4 }
    }
  },

  "lassi sweet 1 glass": {
    display: "Sweet Lassi (1 glass)",
    versions: {
      restaurant: { cal: 250, prot: 6, carb: 40, fat: 6 },
      home:       { cal: 200, prot: 6, carb: 30, fat: 4 }
    }
  },

  "chai 1 cup": {
    display: "Tea (with milk, 1 cup)",
    versions: {
      restaurant: { cal: 60, prot: 1.5, carb: 8, fat: 2 },
      home:       { cal: 50, prot: 1, carb: 6, fat: 1.5 }
    }
  },

  "filter coffee 1 cup": {
    display: "Filter Coffee (1 cup)",
    versions: {
      restaurant: { cal: 80, prot: 1.5, carb: 8, fat: 3 },
      home:       { cal: 70, prot: 1.5, carb: 6, fat: 2 }
    }
  },

  "gulab jamun (1)": {
    display: "Gulab Jamun (1)",
    versions: {
      restaurant: { cal: 150, prot: 2, carb: 18, fat: 8 },
      home:       { cal: 130, prot: 2, carb: 16, fat: 6 }
    }
  },

  "jalebi 100g": {
    display: "Jalebi (100 g)",
    versions: {
      restaurant: { cal: 510, prot: 3, carb: 72, fat: 22 },
      home:       { cal: 480, prot: 3, carb: 68, fat: 20 }
    }
  },

  "kheer 1 cup": {
    display: "Kheer (1 cup)",
    versions: {
      restaurant: { cal: 340, prot: 6, carb: 50, fat: 10 },
      home:       { cal: 280, prot: 6, carb: 42, fat: 8 }
    }
  },

  "mithai 100g": {
    display: "Indian Mithai (100 g avg)",
    versions: {
      restaurant: { cal: 450, prot: 6, carb: 55, fat: 22 },
      home:       { cal: 400, prot: 6, carb: 50, fat: 18 }
    }
  },

  "paneer tikka": {
    display: "Paneer Tikka (100 g)",
    versions: {
      restaurant: { cal: 320, prot: 20, carb: 6, fat: 22 },
      home:       { cal: 260, prot: 18, carb: 6, fat: 16 }
    }
  },

  "tikka masala": {
    display: "Chicken Tikka Masala (1 serving)",
    versions: {
      restaurant: { cal: 650, prot: 38, carb: 10, fat: 45 },
      home:       { cal: 440, prot: 32, carb: 8, fat: 24 }
    }
  },

  "korma": {
    display: "Korma (1 serving)",
    versions: {
      restaurant: { cal: 560, prot: 28, carb: 12, fat: 40 },
      home:       { cal: 420, prot: 25, carb: 10, fat: 26 }
    }
  },

  "saag 1 cup": {
    display: "Saag (1 cup)",
    versions: {
      restaurant: { cal: 240, prot: 8, carb: 10, fat: 18 },
      home:       { cal: 180, prot: 7, carb: 8, fat: 10 }
    }
  },

  "aloo gobi 1 cup": {
    display: "Aloo Gobi (1 cup)",
    versions: {
      restaurant: { cal: 220, prot: 4, carb: 28, fat: 10 },
      home:       { cal: 180, prot: 4, carb: 24, fat: 8 }
    }
  },

  "bhindi masala 1 cup": {
    display: "Bhindi Masala (1 cup)",
    versions: {
      restaurant: { cal: 200, prot: 4, carb: 20, fat: 10 },
      home:       { cal: 160, prot: 4, carb: 18, fat: 6 }
    }
  },

  "gobi manchurian 6 pcs": {
    display: "Gobi Manchurian (6 pcs)",
    versions: {
      restaurant: { cal: 420, prot: 7, carb: 40, fat: 24 },
      home:       { cal: 340, prot: 7, carb: 36, fat: 16 }
    }
  },

  "chicken 65 100g": {
    display: "Chicken 65 (100 g)",
    versions: {
      restaurant: { cal: 420, prot: 28, carb: 8, fat: 30 },
      home:       { cal: 360, prot: 28, carb: 6, fat: 22 }
    }
  },

  "momos veg 6 pcs": {
    display: "Veg Momos (6 pcs)",
    versions: {
      restaurant: { cal: 320, prot: 8, carb: 45, fat: 8 },
      home:       { cal: 260, prot: 8, carb: 40, fat: 6 }
    }
  },

  "momos chicken 6pcs": {
    display: "Chicken Momos (6 pcs)",
    versions: {
      restaurant: { cal: 360, prot: 18, carb: 45, fat: 12 },
      home:       { cal: 300, prot: 18, carb: 40, fat: 8 }
    }
  },

  // --- Essentials / ingredient-level entries
  "ghee 1 tsp": {
    display: "Ghee (1 tsp / 5 g)",
    versions: {
      restaurant: { cal: 45, prot: 0, carb: 0, fat: 5 },
      home:       { cal: 45, prot: 0, carb: 0, fat: 5 }
    }
  },

  "oil 1 tsp": {
    display: "Cooking Oil (1 tsp / 5 g)",
    versions: {
      restaurant: { cal: 40, prot: 0, carb: 0, fat: 4.5 },
      home:       { cal: 40, prot: 0, carb: 0, fat: 4.5 }
    }
  },

  "milk 100ml": {
    display: "Milk (whole, 100 ml)",
    versions: {
      restaurant: { cal: 62, prot: 3.4, carb: 4.8, fat: 3.5 },
      home:       { cal: 62, prot: 3.4, carb: 4.8, fat: 3.5 }
    }
  },

  "sugar 1 tsp": {
    display: "Sugar (1 tsp / 4 g)",
    versions: {
      restaurant: { cal: 16, prot: 0, carb: 4, fat: 0 },
      home:       { cal: 16, prot: 0, carb: 4, fat: 0 }
    }
  },

  "butter 1 tbsp": {
    display: "Butter (1 tbsp / 14 g)",
    versions: {
      restaurant: { cal: 102, prot: 0.1, carb: 0.01, fat: 11.5 },
      home:       { cal: 102, prot: 0.1, carb: 0.01, fat: 11.5 }
    }
  },

  // --- Add more as needed (template for yourself)
  "sample food": {
    display: "Sample Food (example)",
    versions: {
      restaurant: { cal: 200, prot: 10, carb: 20, fat: 8 },
      home:       { cal: 160, prot: 8, carb: 18, fat: 6 }
    }
  }

}; // end foodDB

// Utility: build a lowercased keys array for fast suggestions
const foodKeys = Object.keys(foodDB).map(k => k.toLowerCase());

/* Export (if using modules). If your calculator reads global foodDB, no need to export. */
// if (typeof module !== 'undefined') module.exports = { foodDB, foodKeys };
