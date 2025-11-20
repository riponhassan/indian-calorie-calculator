/* foods.js
   Local food DB for HassanChef calculator.
   Add or edit entries as: "name": { cal: number, prot: number, carb: number, fat: number }
*/
const foodDB = {
  "roti": { cal: 120, prot: 3, carb: 18, fat: 3 },
  "chapati": { cal: 120, prot: 3, carb: 18, fat: 3 },
  "phulka": { cal: 120, prot: 3, carb: 18, fat: 3 },
  "paratha": { cal: 250, prot: 5, carb: 30, fat: 10 },
  "butter paratha": { cal: 320, prot: 6, carb: 34, fat: 16 },

  "butter naan": { cal: 260, prot: 7, carb: 38, fat: 9 },
  "naan": { cal: 220, prot: 6, carb: 34, fat: 6 },

  "plain rice 100g": { cal: 130, prot: 2.5, carb: 28, fat: 0.3 },
  "rice": { cal: 130, prot: 2.5, carb: 28, fat: 0.3 },

  "dal (1 cup)": { cal: 198, prot: 11, carb: 27, fat: 6 },
  "dal": { cal: 198, prot: 11, carb: 27, fat: 6 },

  "paneer 100g": { cal: 265, prot: 18, carb: 6, fat: 20 },
  "paneer": { cal: 265, prot: 18, carb: 6, fat: 20 },

  "chicken curry 1 serving": { cal: 300, prot: 22, carb: 6, fat: 18 },
  "chicken curry": { cal: 300, prot: 22, carb: 6, fat: 18 },

  "idli": { cal: 58, prot: 2, carb: 12, fat: 0.4 },
  "dosa": { cal: 133, prot: 2.7, carb: 17, fat: 5.8 },
  "uttapam": { cal: 180, prot: 5, carb: 30, fat: 4 },

  "sambhar (1 cup)": { cal: 120, prot: 5, carb: 15, fat: 4 },
  "sambar": { cal: 120, prot: 5, carb: 15, fat: 4 },

  "upma (1 cup)": { cal: 210, prot: 5, carb: 36, fat: 6 },
  "poha (1 cup)": { cal: 180, prot: 4, carb: 34, fat: 4 },

  "aloo sabzi (1 cup)": { cal: 200, prot: 4, carb: 30, fat: 8 },
  "mixed veg (1 cup)": { cal: 120, prot: 3, carb: 18, fat: 5 },

  "chole (1 cup)": { cal: 269, prot: 15, carb: 45, fat: 4.2 },
  "pav bhaji (1 plate)": { cal: 450, prot: 10, carb: 60, fat: 18 },

  "samosa": { cal: 260, prot: 4, carb: 30, fat: 13 },
  "pakora (1 medium)": { cal: 70, prot: 1.5, carb: 6, fat: 4 },

  "gulab jamun (1 piece)": { cal: 150, prot: 2, carb: 20, fat: 7 },
  "rasgulla (1 piece)": { cal: 90, prot: 3, carb: 15, fat: 1.5 },
  "rasmalai (1 piece)": { cal: 120, prot: 3.5, carb: 16, fat: 5 },

  "lassi (1 glass)": { cal: 200, prot: 6, carb: 20, fat: 8 },
  "sweet lassi": { cal: 230, prot: 6, carb: 28, fat: 8 },

  "chai (1 cup)": { cal: 40, prot: 1, carb: 6, fat: 1.5 },

  "momos (4 pieces)": { cal: 240, prot: 10, carb: 30, fat: 8 },

  "idli sambar (plate)": { cal: 200, prot: 8, carb: 30, fat: 4 },

  "pulav (1 cup)": { cal: 240, prot: 5, carb: 45, fat: 4 },

  "biryani (1 cup)": { cal: 330, prot: 10, carb: 40, fat: 12 },

  "aloo paratha (1)": { cal: 300, prot: 6, carb: 36, fat: 12 },

  "masala dosa": { cal: 210, prot: 5, carb: 30, fat: 6 },

  "veg cutlet": { cal: 150, prot: 3, carb: 18, fat: 7 },

  "bhatura (1)": { cal: 300, prot: 6, carb: 36, fat: 14 },

  "chicken tandoori (1 piece)": { cal: 220, prot: 28, carb: 2, fat: 10 },

  "chicken tikka (100g)": { cal: 210, prot: 25, carb: 3, fat: 9 },

  "fish curry (1 serving)": { cal: 260, prot: 22, carb: 6, fat: 16 },

  "rajma (1 cup)": { cal: 215, prot: 13, carb: 40, fat: 1 },

  "dal makhani (1 cup)": { cal: 330, prot: 14, carb: 30, fat: 18 },

  "paneer butter masala (1 cup)": { cal: 360, prot: 14, carb: 18, fat: 24 },

  "sugar (1 tsp)": { cal: 16, prot: 0, carb: 4, fat: 0 },

  "ghee (1 tsp)": { cal: 45, prot: 0, carb: 0, fat: 5 },

  "oil (1 tsp)": { cal: 40, prot: 0, carb: 0, fat: 4.5 },

  "milk 100ml": { cal: 64, prot: 3.4, carb: 5, fat: 3.6 },

  "curd (100g)": { cal: 61, prot: 3.5, carb: 4.7, fat: 3.3 },

  "banana (1 medium)": { cal: 105, prot: 1.3, carb: 27, fat: 0.4 },

  "apple (1 medium)": { cal: 95, prot: 0.5, carb: 25, fat: 0.3 },

  "poha (100g cooked)": { cal: 130, prot: 3, carb: 28, fat: 2 },

  "oats (50g)": { cal: 190, prot: 6, carb: 32, fat: 4 },

  "egg (1 large)": { cal: 78, prot: 6.3, carb: 0.6, fat: 5.3 },

  "boiled egg (1)": { cal: 78, prot: 6.3, carb: 0.6, fat: 5.3 },

  "bread slice (1)": { cal: 80, prot: 3, carb: 15, fat: 1 },

  "butter (1 tsp)": { cal: 34, prot: 0, carb: 0, fat: 4 },

  "peanut butter (1 tbsp)": { cal: 94, prot: 3.5, carb: 3.5, fat: 8 },

  "sugar-free": { cal: 0, prot: 0, carb: 0, fat: 0 },

  "veg roll": { cal: 280, prot: 6, carb: 36, fat: 12 },

  "mutton curry (1 serving)": { cal: 370, prot: 25, carb: 3, fat: 26 },

  "fish fry (100g)": { cal: 220, prot: 20, carb: 0, fat: 14 },

  "puri (1)": { cal: 120, prot: 2, carb: 14, fat: 6 },

  "kheer (1 cup)": { cal: 220, prot: 6, carb: 32, fat: 8 },

  "rasam (1 cup)": { cal: 15, prot: 1, carb: 3, fat: 0.2 },

  "cut mango (100g)": { cal: 60, prot: 0.8, carb: 15, fat: 0.4 },

  "sugar 1 tbsp": { cal: 48, prot: 0, carb: 12, fat: 0 },

  "almonds (10 pieces)": { cal: 70, prot: 2.6, carb: 2.5, fat: 6 },

  "peanuts (10g)": { cal: 56, prot: 2.6, carb: 2, fat: 4.6 },

  "sprouts (100g)": { cal: 31, prot: 3.0, carb: 6, fat: 0.3 },

  "veg biryani (1 cup)": { cal: 240, prot: 6, carb: 44, fat: 6 },

  "sattu (100g)": { cal: 400, prot: 20, carb: 56, fat: 2 },

  "kathi roll (veg)": { cal: 340, prot: 8, carb: 40, fat: 14 },

  "kebabs (100g)": { cal: 230, prot: 18, carb: 6, fat: 14 },

  "falooda (1 glass)": { cal: 300, prot: 6, carb: 48, fat: 6 },

  "jalebi (1 piece)": { cal: 125, prot: 0.4, carb: 25, fat: 3 },

  "pani puri (1 piece)": { cal: 40, prot: 0.6, carb: 6, fat: 1 },

  "sev puri (1 plate)": { cal: 200, prot: 4, carb: 30, fat: 8 },

  "dhokla (1 piece)": { cal: 70, prot: 2, carb: 10, fat: 2 },

  "handvo (1 slice)": { cal: 210, prot: 6, carb: 30, fat: 8 },

  "kadhi (1 cup)": { cal: 170, prot: 6, carb: 10, fat: 12 },

  "murmura (100g)": { cal: 383, prot: 7.9, carb: 82.9, fat: 3.5 },

  "sattu paratha (1)": { cal: 320, prot: 12, carb: 40, fat: 10 },

  "bengali fish curry (1)": { cal: 300, prot: 22, carb: 4, fat: 18 },

  "prawn curry (1 serving)": { cal: 200, prot: 22, carb: 3, fat: 8 },

  "veg sandwich (1)": { cal: 220, prot: 8, carb: 30, fat: 8 },

  "grilled chicken (100g)": { cal: 165, prot: 31, carb: 0, fat: 3.6 },

  "chicken burger (1)": { cal: 400, prot: 20, carb: 35, fat: 18 },

  "veg momo (4 pieces)": { cal: 160, prot: 6, carb: 24, fat: 4 },

  "sattu drink (1 glass)": { cal: 160, prot: 8, carb: 28, fat: 2 },

  "black tea (1 cup)": { cal: 2, prot: 0, carb: 0, fat: 0 },

  "orange (1 medium)": { cal: 62, prot: 1.2, carb: 15, fat: 0.15 },

  "pineapple (100g)": { cal: 50, prot: 0.5, carb: 13, fat: 0.1 },

  "coconut chutney (2 tbsp)": { cal: 72, prot: 0.6, carb: 2, fat: 7 },

  "green chutney (2 tbsp)": { cal: 16, prot: 0.3, carb: 3, fat: 0.4 },

  "roasted makhana (30g)": { cal: 110, prot: 3, carb: 22, fat: 1 },

  "schezwan noodles (1 cup)": { cal: 350, prot: 8, carb: 48, fat: 12 },

  "veg manchurian (6 pieces)": { cal: 260, prot: 6, carb: 28, fat: 14 },

  "hakka noodles (1 cup)": { cal: 250, prot: 6, carb: 40, fat: 7 },

  "spring roll (1)": { cal: 160, prot: 3, carb: 18, fat: 8 },

  "hash brown (1)": { cal: 150, prot: 1.5, carb: 15, fat: 9 },

  "pizza slice (regular)": { cal: 285, prot: 12, carb: 36, fat: 10 },

  "burger (veg)": { cal: 320, prot: 10, carb: 36, fat: 14 },

  "pasta (alfredo 1 cup)": { cal: 350, prot: 10, carb: 45, fat: 14 },

  "sushi (6 pieces)": { cal: 200, prot: 8, carb: 35, fat: 3 },

  "avocado (1/2)": { cal: 120, prot: 1.5, carb: 8, fat: 11 },

  "quinoa (1 cup cooked)": { cal: 120, prot: 4, carb: 21, fat: 1.9 },

  "tofu (100g)": { cal: 76, prot: 8, carb: 1.9, fat: 4.8 },

  "protein shake (1 scoop mixed)": { cal: 120, prot: 20, carb: 4, fat: 2 },

  "almond milk (100ml)": { cal: 15, prot: 0.4, carb: 0.3, fat: 1.2 },

  "moong dal chilla (1)": { cal: 100, prot: 6, carb: 12, fat: 3 },

  "sprouts chaat (1 cup)": { cal: 120, prot: 8, carb: 18, fat: 2 }
};