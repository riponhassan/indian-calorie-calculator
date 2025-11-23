/* ===========================================================
   HASSAN CHEF — INDIAN CALORIE CALCULATOR
   MASTER FOOD DATABASE (Fixed Version)
   =========================================================== */

var foodDB = {}; 

/* ---------------------------------------------
   0) BASE DATABASE
--------------------------------------------- */
var baseFoods = {
  "rice cooked": { display:"Cooked Rice (100g)", versions:{ home:{cal:130,prot:2.5,carb:28,fat:0.3}, restaurant:{cal:150,prot:2.5,carb:30,fat:0.5} } },
  "roti": { display:"Roti / Chapati", versions:{ home:{cal:120,prot:3,carb:18,fat:3}, restaurant:{cal:140,prot:3,carb:20,fat:4} } },
  "butter naan": { display:"Butter Naan", versions:{ home:{cal:220,prot:6,carb:38,fat:6}, restaurant:{cal:290,prot:7,carb:42,fat:12} } },
  "garlic naan": { display:"Garlic Naan", versions:{ home:{cal:230,prot:6,carb:38,fat:7}, restaurant:{cal:310,prot:7,carb:44,fat:14} } },
  "plain naan": { display:"Plain Naan", versions:{ home:{cal:200,prot:6,carb:38,fat:4}, restaurant:{cal:260,prot:7,carb:42,fat:8} } },
  "tandoori roti": { display:"Tandoori Roti", versions:{ home:{cal:120,prot:3,carb:24,fat:1}, restaurant:{cal:160,prot:4,carb:28,fat:4} } },
  "dal": { display:"Dal (1 cup)", versions:{ home:{cal:180,prot:10,carb:26,fat:4}, restaurant:{cal:220,prot:10,carb:28,fat:8} } },
  "paneer": { display:"Paneer (100g)", versions:{ home:{cal:265,prot:18,carb:6,fat:20}, restaurant:{cal:290,prot:18,carb:6,fat:22} } },
  "chicken curry": { display:"Chicken Curry", versions:{ home:{cal:250,prot:26,carb:6,fat:14}, restaurant:{cal:320,prot:28,carb:8,fat:22} } },
  "egg": { display:"Egg (1 pc)", versions:{ home:{cal:72,prot:6,carb:0.6,fat:5}, restaurant:{cal:80,prot:6,carb:1,fat:6} } }
};

/* ---------------------------------------------
   1) EXTENDED DATABASE
--------------------------------------------- */
var extendedFoods = {
  "palak paneer": { display:"Palak Paneer", versions:{ home:{cal:250,prot:12,carb:10,fat:18}, restaurant:{cal:340,prot:12,carb:12,fat:26} } },
  "butter chicken": { display:"Butter Chicken", versions:{ home:{cal:420,prot:30,carb:12,fat:28}, restaurant:{cal:520,prot:32,carb:14,fat:36} } },
  "veg biryani": { display:"Veg Biryani", versions:{ home:{cal:320,prot:6,carb:54,fat:6}, restaurant:{cal:420,prot:6,carb:60,fat:14} } },
  "chicken biryani": { display:"Chicken Biryani", versions:{ home:{cal:480,prot:28,carb:62,fat:12}, restaurant:{cal:650,prot:30,carb:80,fat:20} } }
};

/* ---------------------------------------------
   2) MEGA DATABASE
--------------------------------------------- */
var megaFoods = {
  "shahi paneer": { display:"Shahi Paneer", versions:{ restaurant:{cal:520,prot:16,carb:20,fat:38}, home:{cal:400,prot:15,carb:18,fat:26} } },
  "paneer lababdar": { display:"Paneer Lababdar", versions:{ restaurant:{cal:550,prot:18,carb:22,fat:40}, home:{cal:420,prot:17,carb:20,fat:28} } },
  "paneer do pyaza": { display:"Paneer Do Pyaza", versions:{ restaurant:{cal:460,prot:18,carb:18,fat:32}, home:{cal:350,prot:16,carb:16,fat:20} } }
  // Add your other items here if needed, making sure they are ONE line each.
};

// MERGE EVERYTHING
Object.assign(foodDB, baseFoods, extendedFoods, megaFoods);
