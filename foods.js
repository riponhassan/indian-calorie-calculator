/* ===========================================================
   HASSAN CHEF — INDIAN CALORIE CALCULATOR
   MASTER FOOD DATABASE (Fixed Version)
   =========================================================== */

// 1. CREATE THE MASTER BOX FIRST (Prevents Crashing)
var foodDB = {}; 

/* ---------------------------------------------
   0) BASE DATABASE (Roti, Rice, Dal, etc.)
--------------------------------------------- */
var baseFoods = {
  "rice cooked": { display:"Cooked Rice (100g)", versions:{ home:{cal:130,prot:2.5,carb:28,fat:0.3}, restaurant:{cal:150,prot:2.5,carb:30,fat:0.5} } },
  "roti": { display:"Roti / Chapati", versions:{ home:{cal:120,prot:3,carb:18,fat:3}, restaurant:{cal:140,prot:3,carb:20,fat:4} } },
  "dal": { display:"Dal (1 cup)", versions:{ home:{cal:180,prot:10,carb:26,fat:4}, restaurant:{cal:220,prot:10,carb:28,fat:8} } },
  "paneer": { display:"Paneer (100g)", versions:{ home:{cal:265,prot:18,carb:6,fat:20}, restaurant:{cal:290,prot:18,carb:6,fat:22} } },
  "chicken curry": { display:"Chicken Curry", versions:{ home:{cal:250,prot:26,carb:6,fat:14}, restaurant:{cal:320,prot:28,carb:8,fat:22} } },
  "egg": { display:"Egg (1 pc)", versions:{ home:{cal:72,prot:6,carb:0.6,fat:5}, restaurant:{cal:80,prot:6,carb:1,fat:6} } }
};

/* ---------------------------------------------
   1) EXTENDED DATABASE (Butter Chicken, Biryani)
--------------------------------------------- */
var extendedFoods = {
  "palak paneer": { display:"Palak Paneer", versions:{ home:{cal:250,prot:12,carb:10,fat:18}, restaurant:{cal:340,prot:12,carb:12,fat:26} } },
  "butter chicken": { display:"Butter Chicken", versions:{ home:{cal:420,prot:30,carb:12,fat:28}, restaurant:{cal:520,prot:32,carb:14,fat:36} } },
  "veg biryani": { display:"Veg Biryani", versions:{ home:{cal:320,prot:6,carb:54,fat:6}, restaurant:{cal:420,prot:6,carb:60,fat:14} } },
  "chicken biryani": { display:"Chicken Biryani", versions:{ home:{cal:480,prot:28,carb:62,fat:12}, restaurant:{cal:650,prot:30,carb:80,fat:20} } }
};

/* ---------------------------------------------
   2) MEGA DATABASE — LARGE LIST
--------------------------------------------- */
var megaFoods = {

  /* ------------ CHUNK 1 (Paneer + Chicken + Mutton) ------------ */
  "shahi paneer": {
    display:"Shahi Paneer",
    versions:{ restaurant:{cal:520,prot:16,carb:20,fat:38}, home:{cal:400,prot:15,carb:18,fat:26} }
  },
  "paneer lababdar": {
    display:"Paneer Lababdar",
    versions:{ restaurant:{cal:550,prot:18,carb:22,fat:40}, home:{cal:420,prot:17,carb:20,fat:28} }
  },
  "paneer do pyaza": {
    display:"Paneer Do Pyaza",
    versions:{ restaurant:{cal:460,prot:18,carb:18,fat:32}, home:{cal:350,prot:16,carb:16,fat:20} }
  },

  /* ------------ SOUTH INDIAN ------------ */
  "bisibele bath": { display:"Bisi Bele Bath (Karnataka)", versions:{ restaurant:{cal:360,prot:8,carb:56,fat:10}, home:{cal:300,prot:8,carb:50,fat:8} } },
  "mangalore buns": { display:"Mangalore Buns (2 pcs)", versions:{ restaurant:{cal:420,prot:6,carb:68,fat:12}, home:{cal:360,prot:6,carb:60,fat:10} } },
  "neer dosa": { display:"Neer Dosa (2 pcs)", versions:{ restaurant:{cal:210,prot:2,carb:38,fat:2}, home:{cal:180,prot:2,carb:35,fat:2} } },
  "prawn gassi": { display:"Prawn Gassi (Mangalorean)", versions:{ restaurant:{cal:350,prot:26,carb:8,fat:20}, home:{cal:300,prot:24,carb:6,fat:16} } },
  "chicken ghee roast": { display:"Chicken Ghee Roast", versions:{ restaurant:{cal:520,prot:32,carb:10,fat:38}, home:{cal:420,prot:30,carb:8,fat:26} } },
  "mutton sukka": { display:"Mutton Sukka", versions:{ restaurant:{cal:480,prot:34,carb:8,fat:30}, home:{cal:400,prot:32,carb:6,fat:22} } },
  "egg curry andhra": { display:"Andhra Egg Curry", versions:{ restaurant:{cal:260,prot:14,carb:6,fat:18}, home:{cal:220,prot:14,carb:5,fat:12} } },
  "andhra chicken fry": { display:"Andhra Chicken Fry", versions:{ restaurant:{cal:420,prot:32,carb:6,fat:28}, home:{cal:350,prot:30,carb:5,fat:20} } },
  "andhra fish fry": { display:"Andhra Fish Fry", versions:{ restaurant:{cal:380,prot:30,carb:6,fat:22}, home:{cal:320,prot:28,carb:5,fat:16} } },
  "gongura chicken": { display:"Gongura Chicken", versions:{ restaurant:{cal:430,prot:32,carb:8,fat:28}, home:{cal:360,prot:30,carb:7,fat:20} } },
  "gongura mutton": { display:"Gongura Mutton", versions:{ restaurant:{cal:580,prot:32,carb:10,fat:42}, home:{cal:480,prot:30,carb:8,fat:30} } },
  "hyderabadi chicken 65": { display:"Chicken 65 Hyderabadi", versions:{ restaurant:{cal:420,prot:28,carb:10,fat:28}, home:{cal:360,prot:26,carb:8,fat:22} } },
  "hyderabadi egg biryani": { display:"Hyderabadi Egg Biryani", versions:{ restaurant:{cal:540,prot:24,carb:78,fat:16}, home:{cal:480,prot:22,carb:70,fat:12} } },
  "hyderabadi fish biryani": { display:"Hyderabadi Fish Biryani", versions:{ restaurant:{cal:580,prot:32,carb:80,fat:18}, home:{cal:500,prot:30,carb:72,fat:14} } },
  "hyderabadi mutton biryani": { display:"Hyderabadi Mutton Biryani", versions:{ restaurant:{cal:850,prot:38,carb:90,fat:44}, home:{cal:720,prot:34,carb:80,fat:32} } },
  "andhra veg biryani": { display:"Andhra Veg Biryani", versions:{ restaurant:{cal:520,prot:10,carb:78,fat:18}, home:{cal:460,prot:9,carb:70,fat:14} } },

  /* ------------ MAHARASHTRIAN ------------ */
  "aloo bhaji": { display:"Aloo Bhaji", versions:{ restaurant:{cal:220,prot:4,carb:32,fat:10}, home:{cal:190,prot:4,carb:28,fat:8} } },
  "baingan bharta maharashtrian": { display:"Baingan Bharta (Maharashtrian)", versions:{ restaurant:{cal:200,prot:4,carb:14,fat:12}, home:{cal:160,prot:4,carb:12,fat:8} } },
  "thalipeeth": { display:"Thalipeeth", versions:{ restaurant:{cal:260,prot:8,carb:28,fat:10}, home:{cal:220,prot:8,carb:24,fat:8} } },
  "bhakri": { display:"Bhakri (Jowar/Ragi)", versions:{ restaurant:{cal:180,prot:4,carb:30,fat:2}, home:{cal:160,prot:4,carb:28,fat:2} } },
  "sol kadhi": { display:"Sol Kadhi", versions:{ restaurant:{cal:110,prot:2,carb:8,fat:6}, home:{cal:90,prot:2,carb:6,fat:4} } },
  "pithla": { display:"Pithla", versions:{ restaurant:{cal:220,prot:10,carb:20,fat:12}, home:{cal:180,prot:10,carb:18,fat:8} } },
  "kolhapuri tambda rassa": { display:"Kolhapuri Tambda Rassa", versions:{ restaurant:{cal:420,prot:26,carb:8,fat:28}, home:{cal:340,prot:24,carb:8,fat:20} } },
  "kolhapuri pandhra rassa": { display:"Kolhapuri Pandhra Rassa", versions:{ restaurant:{cal:360,prot:24,carb:8,fat:22}, home:{cal:300,prot:22,carb:7,fat:16} } },

  /* ------------ GUJARATI ------------ */
  "fafda": { display:"Fafda (100g)", versions:{ restaurant:{cal:480,prot:10,carb:55,fat:22}, home:{cal:420,prot:10,carb:50,fat:18} } },
  "jalebi fafda": { display:"Jalebi + Fafda Combo", versions:{ restaurant:{cal:650,prot:10,carb:100,fat:26}, home:{cal:580,prot:10,carb:90,fat:20} } },
  "sev tamatar": { display:"Sev Tamatar Sabzi", versions:{ restaurant:{cal:300,prot:6,carb:34,fat:14}, home:{cal:260,prot:6,carb:32,fat:10} } },
  "khandvi": { display:"Khandvi", versions:{ restaurant:{cal:320,prot:8,carb:30,fat:18}, home:{cal:260,prot:8,carb:28,fat:12} } },

  /* ------------ BENGALI ------------ */
  "fish fry bengali": { display:"Bengali Fish Fry", versions:{ restaurant:{cal:380,prot:22,carb:18,fat:22}, home:{cal:320,prot:20,carb:16,fat:16} } },
  "kosha mangsho": { display:"Kosha Mangsho", versions:{ restaurant:{cal:540,prot:32,carb:10,fat:38}, home:{cal:460,prot:30,carb:8,fat:28} } },
  "begun bhaja": { display:"Begun Bhaja", versions:{ restaurant:{cal:300,prot:4,carb:18,fat:22}, home:{cal:240,prot:4,carb:16,fat:16} } },
  "mochar ghonto": { display:"Mochar Ghonto", versions:{ restaurant:{cal:260,prot:6,carb:24,fat:12}, home:{cal:220,prot:6,carb:22,fat:8} } },
  "pithe puli": { display:"Pithe Puli", versions:{ restaurant:{cal:200,prot:4,carb:34,fat:6}, home:{cal:180,prot:4,carb:30,fat:5} } },

  /* ------------ PUNJABI ------------ */
  "amritsari kulcha": { display:"Amritsari Kulcha", versions:{ restaurant:{cal:420,prot:10,carb:60,fat:16}, home:{cal:360,prot:10,carb:55,fat:12} } },
  "chole bhature": { display:"Chole Bhature", versions:{ restaurant:{cal:780,prot:18,carb:90,fat:36}, home:{cal:680,prot:16,carb:82,fat:28} } },
  "sarson ka saag": { display:"Sarson Ka Saag", versions:{ restaurant:{cal:260,prot:8,carb:16,fat:18}, home:{cal:200,prot:7,carb:14,fat:10} } },
  "makki ki roti": { display:"Makki Ki Roti", versions:{ restaurant:{cal:210,prot:4,carb:28,fat:8}, home:{cal:190,prot:4,carb:26,fat:6} } },
  "dal makhani": { display:"Dal Makhani", versions:{ restaurant:{cal:420,prot:14,carb:32,fat:24}, home:{cal:340,prot:13,carb:28,fat:16} } },
  "amritsari fish fry": { display:"Amritsari Fish Fry", versions:{ restaurant:{cal:420,prot:30,carb:12,fat:24}, home:{cal:360,prot:28,carb:10,fat:18} } },

  /* ------------ STREET FOOD ------------ */
  "dabeli": { display:"Dabeli", versions:{ restaurant:{cal:420,prot:8,carb:55,fat:18}, home:{cal:350,prot:8,carb:48,fat:14} } },
  "kachori": { display:"Kachori", versions:{ restaurant:{cal:320,prot:5,carb:32,fat:18}, home:{cal:280,prot:5,carb:30,fat:14} } },
  "kachori sabzi": { display:"Kachori Sabzi", versions:{ restaurant:{cal:480,prot:8,carb:60,fat:22}, home:{cal:420,prot:8,carb:55,fat:18} } },
  "aloo tikki": { display:"Aloo Tikki (2 pcs)", versions:{ restaurant:{cal:280,prot:4,carb:34,fat:12}, home:{cal:240,prot:4,carb:30,fat:10} } },
  "sev puri": { display:"Sev Puri", versions:{ restaurant:{cal:360,prot:6,carb:56,fat:14}, home:{cal:300,prot:6,carb:50,fat:10} } },
  "ragda pattice": { display:"Ragda Pattice", versions:{ restaurant:{cal:420,prot:12,carb:60,fat:14}, home:{cal:360,prot:12,carb:54,fat:10} } },

  /* ------------ FAST FOOD / MODERN ------------ */
  "chicken burger indian": { display:"Chicken Burger (Indian style)", versions:{ restaurant:{cal:580,prot:22,carb:60,fat:28}, home:{cal:500,prot:20,carb:55,fat:22} } },
  "paneer burger": { display:"Paneer Burger", versions:{ restaurant:{cal:600,prot:20,carb:62,fat:30}, home:{cal:520,prot:18,carb:58,fat:24} } },
  "veg cheese sandwich": { display:"Veg Cheese Sandwich", versions:{ restaurant:{cal:380,prot:10,carb:38,fat:18}, home:{cal:330,prot:9,carb:34,fat:14} } },
  "paneer frankie": { display:"Paneer Frankie / Roll", versions:{ restaurant:{cal:550,prot:18,carb:50,fat:28}, home:{cal:460,prot:16,carb:46,fat:20} } },
  "chicken frankie": { display:"Chicken Frankie / Roll", versions:{ restaurant:{cal:580,prot:26,carb:52,fat:28}, home:{cal:480,prot:24,carb:48,fat:20} } },
  "banana chips 100g": { display:"Banana Chips (100g)", versions:{ restaurant:{cal:520,prot:3,carb:50,fat:32}, home:{cal:460,prot:3,carb:46,fat:28} } },

  /* ------------ BEVERAGES ------------ */
  "masala chai": { display:"Masala Chai (1 cup)", versions:{ restaurant:{cal:90,prot:2,carb:12,fat:4}, home:{cal:70,prot:2,carb:10,fat:3} } },
  "badam milk": { display:"Badam Milk (1 glass)", versions:{ restaurant:{cal:260,prot:8,carb:28,fat:12}, home:{cal:220,prot:8,carb:22,fat:10} } },
  "rose milk": { display:"Rose Milk", versions:{ restaurant:{cal:220,prot:4,carb:34,fat:8}, home:{cal:190,prot:4,carb:30,fat:6} } },
  "jaljeera drink": { display:"Jaljeera Drink", versions:{ restaurant:{cal:40,prot:1,carb:8,fat:0}, home:{cal:35,prot:1,carb:7,fat:0} } },

  /* ------------ SWEETS / DESSERT ------------ */
  "rasgulla": { display:"Rasgulla (1 pc)", versions:{ restaurant:{cal:125,prot:2,carb:22,fat:3}, home:{cal:110,prot:2,carb:20,fat:2} } },
  "rasmalai": { display:"Rasmalai (1 pc)", versions:{ restaurant:{cal:240,prot:6,carb:26,fat:12}, home:{cal:210,prot:6,carb:24,fat:10} } },
  "sandesh": { display:"Sandesh", versions:{ restaurant:{cal:140,prot:4,carb:18,fat:6}, home:{cal:120,prot:4,carb:16,fat:4} } },
  "cham cham": { display:"Cham Cham", versions:{ restaurant:{cal:220,prot:4,carb:34,fat:10}, home:{cal:190,prot:4,carb:30,fat:8} } },

  /* ------------ SOUTH SNACKS ------------ */
  "banana bajji": { display:"Banana Bajji (1 pc)", versions:{ restaurant:{cal:160,prot:2,carb:28,fat:6}, home:{cal:140,prot:2,carb:26,fat:5} } },
  "mirchi bajji": { display:"Mirchi Bajji (1 pc)", versions:{ restaurant:{cal:180,prot:3,carb:20,fat:10}, home:{cal:150,prot:3,carb:18,fat:8} } },
  "bondas": { display:"Aloo Bonda (1 pc)", versions:{ restaurant:{cal:200,prot:3,carb:30,fat:10}, home:{cal:170,prot:3,carb:26,fat:8} } },
  "maddur vada": { display:"Maddur Vada", versions:{ restaurant:{cal:260,prot:4,carb:28,fat:14}, home:{cal:220,prot:4,carb:24,fat:10} } },

  /* ------------ HIGH PROTEIN ------------ */
  "tofu 100g": { display:"Tofu (100 g)", versions:{ restaurant:{cal:76,prot:8,carb:2,fat:4}, home:{cal:76,prot:8,carb:2,fat:4} } },
  "egg whites 100g": { display:"Egg Whites (100 g)", versions:{ restaurant:{cal:52,prot:11,carb:0.7,fat:0.1}, home:{cal:52,prot:11,carb:0.7,fat:0.1} } },
  "chicken breast 100g": { display:"Chicken Breast (100 g)", versions:{ restaurant:{cal:165,prot:31,carb:0,fat:4}, home:{cal:165,prot:31,carb:0,fat:4} } },

  /* ------------ RAW INGREDIENTS ------------ */
  "wheat flour 100g": { display:"Wheat Flour (100 g)", versions:{ restaurant:{cal:340,prot:12,carb:72,fat:2}, home:{cal:340,prot:12,carb:72,fat:2} } },
  "rice flour 100g": { display:"Rice Flour (100 g)", versions:{ restaurant:{cal:366,prot:6,carb:80,fat:1}, home:{cal:366,prot:6,carb:80,fat:1} } },
  "besan 100g": { display:"Besan (100 g)", versions:{ restaurant:{cal:387,prot:22,carb:58,fat:6}, home:{cal:387,prot:22,carb:58,fat:6} } },

  /* ------------ FESTIVE ------------ */
  "sheer khurma": { display:"Sheer Khurma", versions:{ restaurant:{cal:380,prot:10,carb:48,fat:16}, home:{cal:320,prot:10,carb:42,fat:12} } },
  "seviyan kheer": { display:"Seviyan Kheer", versions:{ restaurant:{cal:320,prot:8,carb:45,fat:12}, home:{cal:260,prot:7,carb:38,fat:10} } }
};

/* ---------------------------------------------
   3) FINAL MERGE (Combines everything)
--------------------------------------------- */
// Add Base + Extended + Mega into the master foodDB
Object.assign(foodDB, baseFoods, extendedFoods, megaFoods);
