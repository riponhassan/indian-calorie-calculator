/* foods_base.js
   HassanChef — Indian foods base file (approx 200 items)
   Structure:
   const foodDB = {
     "key": {
       display: "Friendly Name",
       versions: {
         restaurant: { cal: X, prot: Y, carb: Z, fat: W, fiber: V? },
         home:       { cal: X2, prot: Y2, carb: Z2, fat: W2, fiber: V2? }
       }
     },
     ...
   };
*/

const foodDB = {
  /* Breads & Rotis */
  "roti": { display: "Roti / Chapati (1 medium)", versions: { restaurant: { cal: 120, prot: 3, carb: 18, fat: 3, fiber: 2 }, home: { cal: 100, prot: 3, carb: 16, fat: 2, fiber: 2 } } },
  "chapati": { display: "Chapati (1 medium)", versions: { restaurant: { cal: 120, prot: 3, carb: 18, fat: 3, fiber: 2 }, home: { cal: 100, prot: 3, carb: 16, fat: 2, fiber: 2 } } },
  "phulka": { display: "Phulka (1 medium)", versions: { restaurant: { cal: 110, prot: 3, carb: 17, fat: 1.5 }, home: { cal: 95, prot: 3, carb: 16, fat: 1 } } },
  "tandoori roti": { display: "Tandoori Roti (1)", versions: { restaurant: { cal: 110, prot: 3.5, carb: 22, fat: 1 }, home: { cal: 100, prot: 3, carb: 20, fat: 1 } } },
  "rumali roti": { display: "Rumali Roti (1)", versions: { restaurant: { cal: 250, prot: 7, carb: 45, fat: 5 }, home: { cal: 220, prot: 6, carb: 40, fat: 4 } } },
  "naan": { display: "Naan (plain)", versions: { restaurant: { cal: 290, prot: 8, carb: 45, fat: 6 }, home: { cal: 260, prot: 7, carb: 40, fat: 5 } } },
  "garlic naan": { display: "Garlic Naan (1)", versions: { restaurant: { cal: 320, prot: 8, carb: 46, fat: 12 }, home: { cal: 290, prot: 7, carb: 44, fat: 10 } } },
  "butter naan": { display: "Butter Naan (1)", versions: { restaurant: { cal: 370, prot: 7, carb: 45, fat: 17 }, home: { cal: 300, prot: 7, carb: 40, fat: 12 } } },
  "puri": { display: "Puri (1)", versions: { restaurant: { cal: 140, prot: 2, carb: 16, fat: 8 }, home: { cal: 120, prot: 2, carb: 15, fat: 7 } } },
  "bhatura": { display: "Bhatura (1)", versions: { restaurant: { cal: 290, prot: 7, carb: 42, fat: 11 }, home: { cal: 260, prot: 6, carb: 40, fat: 9 } } },
  "paratha plain": { display: "Plain Paratha (1)", versions: { restaurant: { cal: 320, prot: 6, carb: 30, fat: 18 }, home: { cal: 260, prot: 5, carb: 28, fat: 12 } } },
  "aloo paratha": { display: "Aloo Paratha (1)", versions: { restaurant: { cal: 380, prot: 7, carb: 45, fat: 18 }, home: { cal: 320, prot: 6, carb: 40, fat: 12 } } },
  "methi paratha": { display: "Methi Paratha (1)", versions: { restaurant: { cal: 260, prot: 5, carb: 30, fat: 12 }, home: { cal: 220, prot: 5, carb: 28, fat: 10 } } },
  "thepla": { display: "Thepla (1)", versions: { restaurant: { cal: 160, prot: 4, carb: 25, fat: 6 }, home: { cal: 140, prot: 4, carb: 22, fat: 5 } } },
  "makki ki roti": { display: "Makki Ki Roti (1)", versions: { restaurant: { cal: 150, prot: 3, carb: 28, fat: 3 }, home: { cal: 140, prot: 3, carb: 26, fat: 3 } } },
  "bajra roti": { display: "Bajra Roti (1)", versions: { restaurant: { cal: 130, prot: 3.5, carb: 25, fat: 2 }, home: { cal: 120, prot: 3.5, carb: 24, fat: 2 } } },
  "jowar roti": { display: "Jowar Roti (1)", versions: { restaurant: { cal: 120, prot: 3.5, carb: 24, fat: 1.5 }, home: { cal: 110, prot: 3, carb: 22, fat: 1.5 } } },

  /* Rice & Pilafs */
  "white rice 100g": { display: "White Rice, cooked (100 g)", versions: { restaurant: { cal: 130, prot: 2.4, carb: 28, fat: 0.3 }, home: { cal: 120, prot: 2.4, carb: 27, fat: 0.2 } } },
  "basmati rice 100g": { display: "Basmati Rice, cooked (100 g)", versions: { restaurant: { cal: 130, prot: 2.5, carb: 28, fat: 0.3 }, home: { cal: 120, prot: 2.4, carb: 27, fat: 0.2 } } },
  "brown rice 100g": { display: "Brown Rice, cooked (100 g)", versions: { restaurant: { cal: 111, prot: 2.6, carb: 23, fat: 0.9 }, home: { cal: 110, prot: 2.5, carb: 22, fat: 0.8 } } },
  "jeera rice 1 cup": { display: "Jeera Rice (1 cup)", versions: { restaurant: { cal: 260, prot: 5, carb: 50, fat: 4 }, home: { cal: 220, prot: 4.5, carb: 45, fat: 3 } } },
  "veg pulao 1 cup": { display: "Vegetable Pulao (1 cup)", versions: { restaurant: { cal: 280, prot: 5, carb: 45, fat: 8 }, home: { cal: 240, prot: 4.5, carb: 40, fat: 6 } } },
  "veg biryani 1 plate": { display: "Vegetable Biryani (1 plate)", versions: { restaurant: { cal: 520, prot: 8, carb: 70, fat: 20 }, home: { cal: 420, prot: 7, carb: 60, fat: 12 } } },
  "chicken biryani 1 plate": { display: "Chicken Biryani (1 plate)", versions: { restaurant: { cal: 700, prot: 35, carb: 80, fat: 28 }, home: { cal: 550, prot: 30, carb: 65, fat: 18 } } },
  "mutton biryani 1 plate": { display: "Mutton Biryani (1 plate)", versions: { restaurant: { cal: 820, prot: 40, carb: 80, fat: 40 }, home: { cal: 680, prot: 36, carb: 70, fat: 30 } } },
  "curd rice 1 cup": { display: "Curd Rice (1 cup)", versions: { restaurant: { cal: 290, prot: 8, carb: 40, fat: 10 }, home: { cal: 260, prot: 7, carb: 36, fat: 8 } } },
  "khichdi 1 cup": { display: "Khichdi (1 cup)", versions: { restaurant: { cal: 240, prot: 9, carb: 38, fat: 5 }, home: { cal: 220, prot: 8, carb: 36, fat: 4 } } },

  /* Dals & Legumes */
  "dal tadka 1 cup": { display: "Dal Tadka (1 cup)", versions: { restaurant: { cal: 260, prot: 10, carb: 28, fat: 12, fiber: 6 }, home: { cal: 220, prot: 9, carb: 26, fat: 6, fiber: 6 } } },
  "dal makhani 1 cup": { display: "Dal Makhani (1 cup)", versions: { restaurant: { cal: 350, prot: 12, carb: 30, fat: 20, fiber: 7 }, home: { cal: 300, prot: 11, carb: 28, fat: 14, fiber: 6 } } },
  "moong dal 1 cup": { display: "Moong Dal, cooked (1 cup)", versions: { restaurant: { cal: 220, prot: 14, carb: 35, fat: 4, fiber: 8 }, home: { cal: 200, prot: 13, carb: 33, fat: 3.5, fiber: 8 } } },
  "chana dal 1 cup": { display: "Chana Dal, cooked (1 cup)", versions: { restaurant: { cal: 240, prot: 13, carb: 36, fat: 5, fiber: 9 }, home: { cal: 220, prot: 12, carb: 34, fat: 4.5, fiber: 9 } } },
  "chole 1 cup": { display: "Chole / Chana Masala (1 cup)", versions: { restaurant: { cal: 340, prot: 14, carb: 50, fat: 8, fiber: 12 }, home: { cal: 300, prot: 13, carb: 45, fat: 6, fiber: 12 } } },
  "rajma 1 cup": { display: "Rajma (1 cup)", versions: { restaurant: { cal: 330, prot: 14, carb: 55, fat: 5, fiber: 12 }, home: { cal: 290, prot: 13, carb: 50, fat: 4, fiber: 12 } } },

  /* Vegetable Curries & Sabzis */
  "aloo gobi 1 cup": { display: "Aloo Gobi (1 cup)", versions: { restaurant: { cal: 220, prot: 4, carb: 28, fat: 10 }, home: { cal: 180, prot: 4, carb: 24, fat: 8 } } },
  "aloo jeera 1 cup": { display: "Aloo Jeera (1 cup)", versions: { restaurant: { cal: 200, prot: 3, carb: 30, fat: 8 }, home: { cal: 170, prot: 3, carb: 28, fat: 6 } } },
  "bhindi masala 1 cup": { display: "Bhindi Masala (1 cup)", versions: { restaurant: { cal: 200, prot: 4, carb: 20, fat: 10 }, home: { cal: 160, prot: 4, carb: 18, fat: 6 } } },
  "gobi manchurian 6 pcs": { display: "Gobi Manchurian (6 pcs)", versions: { restaurant: { cal: 420, prot: 7, carb: 40, fat: 24 }, home: { cal: 340, prot: 7, carb: 36, fat: 16 } } },
  "mix veg 1 cup": { display: "Mixed Vegetable Curry (1 cup)", versions: { restaurant: { cal: 180, prot: 4, carb: 20, fat: 10 }, home: { cal: 150, prot: 4, carb: 18, fat: 6 } } },
  "baingan bharta 1 cup": { display: "Baingan Bharta (1 cup)", versions: { restaurant: { cal: 140, prot: 3, carb: 15, fat: 8 }, home: { cal: 120, prot: 3, carb: 14, fat: 6 } } },
  "sarson ka saag 1 cup": { display: "Sarson Ka Saag (1 cup)", versions: { restaurant: { cal: 220, prot: 6, carb: 15, fat: 15 }, home: { cal: 180, prot: 5, carb: 12, fat: 10 } } },
  "lauki sabzi 1 cup": { display: "Lauki Sabzi (Bottle Gourd, 1 cup)", versions: { restaurant: { cal: 110, prot: 2, carb: 12, fat: 6 }, home: { cal: 90, prot: 2, carb: 10, fat: 4 } } },
  "palak paneer 1 cup": { display: "Palak Paneer (1 cup)", versions: { restaurant: { cal: 420, prot: 18, carb: 10, fat: 30 }, home: { cal: 320, prot: 16, carb: 8, fat: 18 } } },
  "paneer butter masala 1 cup": { display: "Paneer Butter Masala (1 cup)", versions: { restaurant: { cal: 530, prot: 20, carb: 20, fat: 36 }, home: { cal: 400, prot: 18, carb: 18, fat: 24 } } },
  "matar paneer 1 cup": { display: "Matar Paneer (1 cup)", versions: { restaurant: { cal: 470, prot: 18, carb: 20, fat: 32 }, home: { cal: 360, prot: 16, carb: 18, fat: 20 } } },
  "kadai paneer 1 cup": { display: "Kadai Paneer (1 cup)", versions: { restaurant: { cal: 500, prot: 19, carb: 18, fat: 34 }, home: { cal: 380, prot: 18, carb: 16, fat: 22 } } },

  /* Non-Veg Dishes */
  "butter chicken": { display: "Butter Chicken (1 serving)", versions: { restaurant: { cal: 650, prot: 38, carb: 10, fat: 44 }, home: { cal: 420, prot: 32, carb: 8, fat: 24 } } },
  "chicken tikka masala": { display: "Chicken Tikka Masala (1 serving)", versions: { restaurant: { cal: 450, prot: 32, carb: 12, fat: 30 }, home: { cal: 360, prot: 30, carb: 10, fat: 20 } } },
  "tandoori chicken 1 leg": { display: "Tandoori Chicken (1 leg)", versions: { restaurant: { cal: 320, prot: 28, carb: 3, fat: 20 }, home: { cal: 280, prot: 26, carb: 3, fat: 15 } } },
  "chicken curry 1 serving": { display: "Chicken Curry (1 serving)", versions: { restaurant: { cal: 420, prot: 28, carb: 8, fat: 28 }, home: { cal: 320, prot: 26, carb: 6, fat: 18 } } },
  "mutton curry 1 serving": { display: "Mutton Curry (1 serving)", versions: { restaurant: { cal: 550, prot: 30, carb: 10, fat: 42 }, home: { cal: 450, prot: 28, carb: 8, fat: 32 } } },
  "keema matar 1 cup": { display: "Keema Matar (1 cup)", versions: { restaurant: { cal: 400, prot: 25, carb: 12, fat: 28 }, home: { cal: 340, prot: 22, carb: 10, fat: 20 } } },
  "fish curry 1 serving": { display: "Fish Curry (1 serving)", versions: { restaurant: { cal: 420, prot: 30, carb: 8, fat: 28 }, home: { cal: 310, prot: 28, carb: 6, fat: 16 } } },
  "prawn masala 1 serving": { display: "Prawn Masala (1 serving)", versions: { restaurant: { cal: 360, prot: 30, carb: 6, fat: 20 }, home: { cal: 280, prot: 28, carb: 4, fat: 12 } } },
  "egg curry 2 eggs": { display: "Egg Curry (2 eggs)", versions: { restaurant: { cal: 280, prot: 14, carb: 8, fat: 20 }, home: { cal: 240, prot: 14, carb: 6, fat: 16 } } },
  "omelette 2 eggs": { display: "Omelette (2 eggs)", versions: { restaurant: { cal: 310, prot: 14, carb: 4, fat: 26 }, home: { cal: 270, prot: 13, carb: 3.5, fat: 20 } } },
  "egg bhurji plate": { display: "Egg Bhurji (2 eggs, plate)", versions: { restaurant: { cal: 320, prot: 14, carb: 6, fat: 26 }, home: { cal: 280, prot: 14, carb: 5, fat: 20 } } },

  /* Breakfast & South Indian */
  "idli 1": { display: "Idli (1)", versions: { restaurant: { cal: 65, prot: 2, carb: 14, fat: 0.5 }, home: { cal: 58, prot: 2, carb: 12, fat: 0.4 } } },
  "dosa plain": { display: "Dosa (plain)", versions: { restaurant: { cal: 170, prot: 4, carb: 30, fat: 4 }, home: { cal: 150, prot: 4, carb: 28, fat: 3 } } },
  "masala dosa": { display: "Masala Dosa (with potato masala)", versions: { restaurant: { cal: 350, prot: 8, carb: 45, fat: 15 }, home: { cal: 300, prot: 7, carb: 42, fat: 10 } } },
  "uttapam 1": { display: "Uttapam (1)", versions: { restaurant: { cal: 200, prot: 5, carb: 35, fat: 5 }, home: { cal: 170, prot: 5, carb: 32, fat: 4 } } },
  "upma 1 cup": { display: "Upma (1 cup)", versions: { restaurant: { cal: 250, prot: 6, carb: 45, fat: 8 }, home: { cal: 220, prot: 5, carb: 40, fat: 4 } } },
  "poha 1 cup": { display: "Poha (1 cup)", versions: { restaurant: { cal: 260, prot: 5, carb: 45, fat: 7 }, home: { cal: 220, prot: 5, carb: 40, fat: 5 } } },
  "vada 1": { display: "Medu Vada (1)", versions: { restaurant: { cal: 145, prot: 4, carb: 16, fat: 8 }, home: { cal: 130, prot: 4, carb: 15, fat: 7 } } },
  "pongal 1 cup": { display: "Pongal (1 cup)", versions: { restaurant: { cal: 320, prot: 8, carb: 45, fat: 12 }, home: { cal: 280, prot: 7, carb: 40, fat: 8 } } },

  /* Snacks & Street Food */
  "samosa 1 medium": { display: "Samosa (1 medium)", versions: { restaurant: { cal: 260, prot: 4, carb: 30, fat: 14 }, home: { cal: 220, prot: 4, carb: 28, fat: 12 } } },
  "vada pav 1": { display: "Vada Pav (1)", versions: { restaurant: { cal: 410, prot: 7, carb: 43, fat: 20 }, home: { cal: 360, prot: 6, carb: 38, fat: 15 } } },
  "pani puri 6": { display: "Pani Puri (6 pieces)", versions: { restaurant: { cal: 180, prot: 3, carb: 30, fat: 6 }, home: { cal: 150, prot: 3, carb: 26, fat: 4 } } },
  "bhel puri plate": { display: "Bhel Puri (1 plate)", versions: { restaurant: { cal: 280, prot: 8, carb: 50, fat: 6 }, home: { cal: 240, prot: 7, carb: 45, fat: 5 } } },
  "pav bhaji plate": { display: "Pav Bhaji (1 plate)", versions: { restaurant: { cal: 700, prot: 12, carb: 95, fat: 28 }, home: { cal: 520, prot: 10, carb: 80, fat: 16 } } },
  "dabeli 1": { display: "Dabeli (1)", versions: { restaurant: { cal: 450, prot: 8, carb: 60, fat: 18 }, home: { cal: 380, prot: 8, carb: 55, fat: 12 } } },
  "kathi roll veg": { display: "Kathi Roll (Veg)", versions: { restaurant: { cal: 350, prot: 9, carb: 45, fat: 14 }, home: { cal: 300, prot: 8, carb: 40, fat: 10 } } },
  "kathi roll chicken": { display: "Kathi Roll (Chicken)", versions: { restaurant: { cal: 420, prot: 18, carb: 40, fat: 18 }, home: { cal: 360, prot: 16, carb: 36, fat: 12 } } },

  /* Bakery & Fast Food */
  "veg burger": { display: "Veg Burger (1)", versions: { restaurant: { cal: 380, prot: 10, carb: 55, fat: 15 }, home: { cal: 320, prot: 9, carb: 48, fat: 12 } } },
  "chicken burger": { display: "Chicken Burger (1)", versions: { restaurant: { cal: 450, prot: 20, carb: 45, fat: 22 }, home: { cal: 380, prot: 18, carb: 40, fat: 16 } } },
  "pizza slice veg": { display: "Pizza (Veg, 1 slice)", versions: { restaurant: { cal: 280, prot: 10, carb: 30, fat: 12 }, home: { cal: 240, prot: 9, carb: 28, fat: 9 } } },
  "sandwich veg grilled": { display: "Grilled Veg Sandwich (1)", versions: { restaurant: { cal: 300, prot: 8, carb: 40, fat: 12 }, home: { cal: 260, prot: 8, carb: 36, fat: 8 } } },

  /* Sweets & Desserts */
  "gulab jamun 1": { display: "Gulab Jamun (1)", versions: { restaurant: { cal: 150, prot: 2, carb: 18, fat: 8 }, home: { cal: 130, prot: 2, carb: 16, fat: 6 } } },
  "rasgulla 1": { display: "Rasgulla (1)", versions: { restaurant: { cal: 125, prot: 3, carb: 28, fat: 0.5 }, home: { cal: 110, prot: 3, carb: 26, fat: 0.4 } } },
  "jalebi 100g": { display: "Jalebi (100 g)", versions: { restaurant: { cal: 510, prot: 3, carb: 72, fat: 22 }, home: { cal: 480, prot: 3, carb: 68, fat: 20 } } },
  "kheer 1 cup": { display: "Kheer / Rice Kheer (1 cup)", versions: { restaurant: { cal: 340, prot: 6, carb: 50, fat: 10 }, home: { cal: 280, prot: 6, carb: 42, fat: 8 } } },
  "laddu besan 1": { display: "Besan Laddu (1)", versions: { restaurant: { cal: 250, prot: 5, carb: 30, fat: 14 }, home: { cal: 220, prot: 5, carb: 28, fat: 12 } } },
  "kaju katli 1": { display: "Kaju Katli (1 piece)", versions: { restaurant: { cal: 90, prot: 2, carb: 12, fat: 5 }, home: { cal: 80, prot: 2, carb: 11, fat: 5 } } },

  /* Beverages */
  "chai tea 1 cup": { display: "Tea / Chai (with milk & sugar, 1 cup)", versions: { restaurant: { cal: 60, prot: 1.5, carb: 8, fat: 2 }, home: { cal: 50, prot: 1, carb: 6, fat: 1.5 } } },
  "filter coffee 1 cup": { display: "Filter Coffee (1 cup)", versions: { restaurant: { cal: 80, prot: 1.5, carb: 8, fat: 3 }, home: { cal: 70, prot: 1.5, carb: 6, fat: 2 } } },
  "lassi sweet 1 glass": { display: "Sweet Lassi (1 glass)", versions: { restaurant: { cal: 250, prot: 6, carb: 40, fat: 6 }, home: { cal: 200, prot: 6, carb: 30, fat: 4 } } },
  "lassi salted 1 glass": { display: "Salted Lassi (1 glass)", versions: { restaurant: { cal: 90, prot: 6, carb: 8, fat: 4 }, home: { cal: 80, prot: 6, carb: 6, fat: 3 } } },
  "buttermilk 1 glass": { display: "Buttermilk / Chaas (1 glass)", versions: { restaurant: { cal: 45, prot: 2, carb: 4, fat: 2 }, home: { cal: 40, prot: 2, carb: 3, fat: 1.5 } } },
  "coconut water 1 glass": { display: "Coconut Water (1 glass)", versions: { restaurant: { cal: 40, prot: 1, carb: 9, fat: 0 }, home: { cal: 40, prot: 1, carb: 9, fat: 0 } } },

  /* Fruits & Raw */
  "banana 1 medium": { display: "Banana (1 medium)", versions: { restaurant: { cal: 105, prot: 1.3, carb: 27, fat: 0.3, fiber: 3 }, home: { cal: 95, prot: 1.2, carb: 25, fat: 0.3, fiber: 3 } } },
  "apple 1 medium": { display: "Apple (1 medium)", versions: { restaurant: { cal: 95, prot: 0.5, carb: 25, fat: 0.3, fiber: 4 }, home: { cal: 90, prot: 0.5, carb: 24, fat: 0.3, fiber: 4 } } },
  "mango 1 medium": { display: "Mango (1 medium)", versions: { restaurant: { cal: 150, prot: 2, carb: 35, fat: 1, fiber: 3 }, home: { cal: 140, prot: 2, carb: 33, fat: 1, fiber: 3 } } },
  "orange 1": { display: "Orange (1 medium)", versions: { restaurant: { cal: 62, prot: 1.2, carb: 15, fat: 0.2, fiber: 3 }, home: { cal: 60, prot: 1.1, carb: 14, fat: 0.2, fiber: 3 } } },

  /* Dairy & Proteins */
  "milk whole 100ml": { display: "Milk, whole (100 ml)", versions: { restaurant: { cal: 62, prot: 3.4, carb: 4.8, fat: 3.5 }, home: { cal: 62, prot: 3.4, carb: 4.8, fat: 3.5 } } },
  "curd 100g": { display: "Curd / Yogurt (100 g)", versions: { restaurant: { cal: 60, prot: 3.5, carb: 4.7, fat: 3.3 }, home: { cal: 60, prot: 3.5, carb: 4.7, fat: 3.3 } } },
  "paneer 100g": { display: "Paneer (100 g)", versions: { restaurant: { cal: 320, prot: 18, carb: 6, fat: 26 }, home: { cal: 265, prot: 18, carb: 6, fat: 20 } } },
  "egg whole 1": { display: "Egg (1 large)", versions: { restaurant: { cal: 72, prot: 6, carb: 0.4, fat: 5 }, home: { cal: 72, prot: 6, carb: 0.4, fat: 5 } } },
  "chicken breast 100g": { display: "Chicken Breast (raw, 100 g)", versions: { restaurant: { cal: 165, prot: 31, carb: 0, fat: 3.6 }, home: { cal: 165, prot: 31, carb: 0, fat: 3.6 } } },

  /* Oils, Fats, Condiments */
  "ghee 1 tsp": { display: "Ghee (1 tsp / 5 g)", versions: { restaurant: { cal: 45, prot: 0, carb: 0, fat: 5 }, home: { cal: 45, prot: 0, carb: 0, fat: 5 } } },
  "oil 1 tsp": { display: "Cooking Oil (1 tsp / 5 g)", versions: { restaurant: { cal: 40, prot: 0, carb: 0, fat: 4.5 }, home: { cal: 40, prot: 0, carb: 0, fat: 4.5 } } },
  "butter 1 tsp": { display: "Butter (1 tsp / 5 g)", versions: { restaurant: { cal: 36, prot: 0.1, carb: 0, fat: 4 }, home: { cal: 36, prot: 0.1, carb: 0, fat: 4 } } },
  "cream 1 tbsp": { display: "Fresh Cream (1 tbsp)", versions: { restaurant: { cal: 30, prot: 0.3, carb: 0.4, fat: 3 }, home: { cal: 30, prot: 0.3, carb: 0.4, fat: 3 } } },

  /* Flour & Grains (dry) */
  "wheat flour 100g": { display: "Wheat Flour / Atta (100 g)", versions: { restaurant: { cal: 340, prot: 12, carb: 72, fat: 2.5 }, home: { cal: 340, prot: 12, carb: 72, fat: 2.5 } } },
  "maida 100g": { display: "Maida / Refined Flour (100 g)", versions: { restaurant: { cal: 364, prot: 10, carb: 76, fat: 1 }, home: { cal: 364, prot: 10, carb: 76, fat: 1 } } },
  "besan 100g": { display: "Besan / Gram Flour (100 g)", versions: { restaurant: { cal: 387, prot: 22, carb: 58, fat: 6 }, home: { cal: 387, prot: 22, carb: 58, fat: 6 } } },
  "oats 100g": { display: "Oats (raw, 100 g)", versions: { restaurant: { cal: 389, prot: 16.9, carb: 66, fat: 6.9, fiber: 10.6 }, home: { cal: 389, prot: 16.9, carb: 66, fat: 6.9, fiber: 10.6 } } },

  /* Dry Snacks & Namkeen */
  "bhujia 1 tbsp": { display: "Bhujia / Sev (1 tbsp / 10 g)", versions: { restaurant: { cal: 60, prot: 1, carb: 5, fat: 4 }, home: { cal: 60, prot: 1, carb: 5, fat: 4 } } },
  "chakli 1 piece": { display: "Chakli / Murukku (1 piece)", versions: { restaurant: { cal: 110, prot: 1, carb: 12, fat: 6 }, home: { cal: 100, prot: 1, carb: 11, fat: 5 } } },
  "mathri 1": { display: "Mathri (1)", versions: { restaurant: { cal: 140, prot: 2, carb: 15, fat: 8 }, home: { cal: 120, prot: 2, carb: 14, fat: 6 } } },
  "namkeen mixture 30g": { display: "Namkeen Mixture (30 g)", versions: { restaurant: { cal: 160, prot: 3, carb: 18, fat: 8 }, home: { cal: 140, prot: 3, carb: 16, fat: 7 } } },

  /* Misc / Ready ingredients */
  "sugar 1 tsp": { display: "Sugar (1 tsp / 4 g)", versions: { restaurant: { cal: 16, prot: 0, carb: 4, fat: 0 }, home: { cal: 16, prot: 0, carb: 4, fat: 0 } } },
  "honey 1 tsp": { display: "Honey (1 tsp / 7 g)", versions: { restaurant: { cal: 21, prot: 0, carb: 5.7, fat: 0 }, home: { cal: 21, prot: 0, carb: 5.7, fat: 0 } } },
  "condensed milk 1 tbsp": { display: "Condensed Milk (1 tbsp)", versions: { restaurant: { cal: 60, prot: 1.5, carb: 10, fat: 1.7 }, home: { cal: 60, prot: 1.5, carb: 10, fat: 1.7 } } },

  /* Convenience foods */
  "maggi 1 pack cooked": { display: "Maggi / Instant Noodles (1 pack, cooked)", versions: { restaurant: { cal: 380, prot: 8, carb: 55, fat: 14 }, home: { cal: 360, prot: 8, carb: 52, fat: 12 } } },
  "spring roll 1": { display: "Spring Roll (1)", versions: { restaurant: { cal: 150, prot: 3, carb: 18, fat: 8 }, home: { cal: 130, prot: 3, carb: 16, fat: 6 } } },

  /* Quick Proteins & Nuts */
  "almonds 10g": { display: "Almonds (10 g approx 8-9)", versions: { restaurant: { cal: 58, prot: 2, carb: 2, fat: 5, fiber: 1.2 }, home: { cal: 58, prot: 2, carb: 2, fat: 5, fiber: 1.2 } } },
  "peanuts 10g": { display: "Peanuts (10 g)", versions: { restaurant: { cal: 56, prot: 2.6, carb: 1.6, fat: 4.9 }, home: { cal: 56, prot: 2.6, carb: 1.6, fat: 4.9 } } },

  /* Healthy items & seeds */
  "chia seeds 10g": { display: "Chia Seeds (10 g)", versions: { restaurant: { cal: 49, prot: 1.6, carb: 4.3, fat: 3.1, fiber: 4 }, home: { cal: 49, prot: 1.6, carb: 4.3, fat: 3.1, fiber: 4 } } },

  /* Sample / placeholder */
  "sample food": { display: "Sample Food (example)", versions: { restaurant: { cal: 200, prot: 10, carb: 20, fat: 8 }, home: { cal: 160, prot: 8, carb: 18, fat: 6 } } }

}; // end foodDB

// Lowercase keys array for fast search
const foodKeys = Object.keys(foodDB).map(k => k.toLowerCase());
