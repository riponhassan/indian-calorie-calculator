/* foods_mega.js
   HassanChef — Mega Indian Food Database (Chunk 1)
   Add-on to foods_base.js + foods_extended.js
*/

(function(){
  if (typeof foodDB === "undefined") {
    console.error("❌ foods_base.js not loaded before foods_mega.js");
    return;
  }
})();

/* ============= MEGA FOOD ENTRIES (Chunk 1) ============= */

const megaFoods = {

  /* ------------------------------------
     NORTH INDIAN CLASSICS (EXPANDED)
  ------------------------------------ */

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

  "paneer pasanda": {
    display:"Paneer Pasanda",
    versions:{ restaurant:{cal:600,prot:20,carb:24,fat:44}, home:{cal:460,prot:18,carb:20,fat:30} }
  },

  "paneer tikka masala": {
    display:"Paneer Tikka Masala",
    versions:{ restaurant:{cal:580,prot:20,carb:22,fat:42}, home:{cal:440,prot:18,carb:20,fat:28} }
  },

  "paneer handi": {
    display:"Paneer Handi",
    versions:{ restaurant:{cal:520,prot:18,carb:18,fat:38}, home:{cal:400,prot:16,carb:16,fat:26} }
  },

  "paneer jalfrezi": {
    display:"Paneer Jalfrezi",
    versions:{ restaurant:{cal:380,prot:18,carb:18,fat:22}, home:{cal:300,prot:16,carb:16,fat:16} }
  },

  "paneer bhurji": {
    display:"Paneer Bhurji",
    versions:{ restaurant:{cal:420,prot:18,carb:10,fat:32}, home:{cal:350,prot:18,carb:8,fat:22} }
  },

  "paneer kolhapuri": {
    display:"Paneer Kolhapuri",
    versions:{ restaurant:{cal:480,prot:16,carb:18,fat:34}, home:{cal:380,prot:16,carb:16,fat:22} }
  },

  "paneer angara": {
    display:"Paneer Angara",
    versions:{ restaurant:{cal:530,prot:18,carb:20,fat:38}, home:{cal:420,prot:18,carb:18,fat:26} }
  },

  /* ------------------------------------
     CHICKEN GRAVIES (EXPANDED)
  ------------------------------------ */

  "chicken do pyaza": {
    display:"Chicken Do Pyaza",
    versions:{ restaurant:{cal:420,prot:32,carb:10,fat:26}, home:{cal:320,prot:30,carb:8,fat:18} }
  },

  "chicken lababdar": {
    display:"Chicken Lababdar",
    versions:{ restaurant:{cal:520,prot:35,carb:14,fat:34}, home:{cal:420,prot:34,carb:12,fat:24} }
  },

  "chicken handi": {
    display:"Chicken Handi",
    versions:{ restaurant:{cal:480,prot:32,carb:10,fat:30}, home:{cal:380,prot:30,carb:8,fat:20} }
  },

  "chicken kolhapuri": {
    display:"Chicken Kolhapuri",
    versions:{ restaurant:{cal:500,prot:32,carb:12,fat:32}, home:{cal:400,prot:30,carb:10,fat:22} }
  },

  "chicken hyderabadi": {
    display:"Chicken Hyderabadi",
    versions:{ restaurant:{cal:480,prot:32,carb:10,fat:30}, home:{cal:380,prot:30,carb:8,fat:20} }
  },

  "chicken korma": {
    display:"Chicken Korma",
    versions:{ restaurant:{cal:540,prot:34,carb:12,fat:38}, home:{cal:420,prot:32,carb:10,fat:26} }
  },

  "chicken mughlai": {
    display:"Chicken Mughlai",
    versions:{ restaurant:{cal:620,prot:36,carb:12,fat:46}, home:{cal:480,prot:34,carb:10,fat:30} }
  },

  "chicken reshmi curry": {
    display:"Chicken Reshmi Curry",
    versions:{ restaurant:{cal:560,prot:34,carb:10,fat:40}, home:{cal:450,prot:32,carb:8,fat:28} }
  },

  "chicken patiala": {
    display:"Chicken Patiala",
    versions:{ restaurant:{cal:540,prot:34,carb:14,fat:36}, home:{cal:420,prot:32,carb:12,fat:26} }
  },

  "chicken saagwala": {
    display:"Chicken Saagwala",
    versions:{ restaurant:{cal:420,prot:34,carb:10,fat:26}, home:{cal:340,prot:32,carb:8,fat:18} }
  },

  /* ------------------------------------
     MUTTON & SPECIAL GRAVIES
  ------------------------------------ */

  "mutton rogan josh": {
    display:"Mutton Rogan Josh",
    versions:{ restaurant:{cal:620,prot:32,carb:8,fat:46}, home:{cal:520,prot:30,carb:8,fat:34} }
  },

  "mutton handi": {
    display:"Mutton Handi",
    versions:{ restaurant:{cal:680,prot:34,carb:10,fat:52}, home:{cal:580,prot:32,carb:10,fat:42} }
  },

  "mutton korma": {
    display:"Mutton Korma",
    versions:{ restaurant:{cal:700,prot:36,carb:10,fat:54}, home:{cal:580,prot:34,carb:10,fat:40} }
  },

  "mutton nihari": {
    display:"Mutton Nihari",
    versions:{ restaurant:{cal:740,prot:34,carb:12,fat:58}, home:{cal:600,prot:32,carb:10,fat:44} }
  },

  "mutton saagwala": {
    display:"Mutton Saagwala",
    versions:{ restaurant:{cal:620,prot:34,carb:10,fat:46}, home:{cal:520,prot:32,carb:10,fat:34} }
  },

  "mutton masala": {
    display:"Mutton Masala",
    versions:{ restaurant:{cal:640,prot:32,carb:10,fat:48}, home:{cal:540,prot:32,carb:10,fat:36} }
  }

}; // END CHUNK 1
/* ============= MEGA FOOD ENTRIES (Chunk 2) ============= */

Object.assign(megaFoods, {

  /* ------------------------------------
     SOUTH INDIAN (MEGA EXPANSION)
  ------------------------------------ */

  "bisibele bath": {
    display:"Bisi Bele Bath (Karnataka)",
    versions:{ restaurant:{cal:360,prot:8,carb:56,fat:10}, home:{cal:300,prot:8,carb:50,fat:8} }
  },

  "mangalore buns": {
    display:"Mangalore Buns (2 pcs)",
    versions:{ restaurant:{cal:420,prot:6,carb:68,fat:12}, home:{cal:360,prot:6,carb:60,fat:10} }
  },

  "neer dosa": {
    display:"Neer Dosa (2 pcs)",
    versions:{ restaurant:{cal:210,prot:2,carb:38,fat:2}, home:{cal:180,prot:2,carb:35,fat:2} }
  },

  "prawn gassi": {
    display:"Prawn Gassi (Mangalorean)",
    versions:{ restaurant:{cal:350,prot:26,carb:8,fat:20}, home:{cal:300,prot:24,carb:6,fat:16} }
  },

  "chicken ghee roast": {
    display:"Chicken Ghee Roast",
    versions:{ restaurant:{cal:520,prot:32,carb:10,fat:38}, home:{cal:420,prot:30,carb:8,fat:26} }
  },

  "mutton sukka": {
    display:"Mutton Sukka",
    versions:{ restaurant:{cal:480,prot:34,carb:8,fat:30}, home:{cal:400,prot:32,carb:6,fat:22} }
  },

  "egg curry andhra": {
    display:"Andhra Egg Curry",
    versions:{ restaurant:{cal:260,prot:14,carb:6,fat:18}, home:{cal:220,prot:14,carb:5,fat:12} }
  },

  "andhra chicken fry": {
    display:"Andhra Chicken Fry",
    versions:{ restaurant:{cal:420,prot:32,carb:6,fat:28}, home:{cal:350,prot:30,carb:5,fat:20} }
  },

  "andhra fish fry": {
    display:"Andhra Fish Fry",
    versions:{ restaurant:{cal:380,prot:30,carb:6,fat:22}, home:{cal:320,prot:28,carb:5,fat:16} }
  },

  "gongura chicken": {
    display:"Gongura Chicken",
    versions:{ restaurant:{cal:430,prot:32,carb:8,fat:28}, home:{cal:360,prot:30,carb:7,fat:20} }
  },

  "gongura mutton": {
    display:"Gongura Mutton",
    versions:{ restaurant:{cal:580,prot:32,carb:10,fat:42}, home:{cal:480,prot:30,carb:8,fat:30} }
  },

  "hyderabadi chicken 65": {
    display:"Chicken 65 Hyderabadi",
    versions:{ restaurant:{cal:420,prot:28,carb:10,fat:28}, home:{cal:360,prot:26,carb:8,fat:22} }
  },

  "hyderabadi egg biryani": {
    display:"Hyderabadi Egg Biryani",
    versions:{ restaurant:{cal:540,prot:24,carb:78,fat:16}, home:{cal:480,prot:22,carb:70,fat:12} }
  },

  "hyderabadi fish biryani": {
    display:"Hyderabadi Fish Biryani",
    versions:{ restaurant:{cal:580,prot:32,carb:80,fat:18}, home:{cal:500,prot:30,carb:72,fat:14} }
  },

  "hyderabadi mutton biryani": {
    display:"Hyderabadi Mutton Biryani",
    versions:{ restaurant:{cal:850,prot:38,carb:90,fat:44}, home:{cal:720,prot:34,carb:80,fat:32} }
  },

  "andhra veg biryani": {
    display:"Andhra Veg Biryani",
    versions:{ restaurant:{cal:520,prot:10,carb:78,fat:18}, home:{cal:460,prot:9,carb:70,fat:14} }
  },

  /* ------------------------------------
     MAHARASHTRIAN EXPANDED
  ------------------------------------ */

  "aloo bhaji": {
    display:"Aloo Bhaji",
    versions:{ restaurant:{cal:220,prot:4,carb:32,fat:10}, home:{cal:190,prot:4,carb:28,fat:8} }
  },

  "baingan bharta maharashtrian": {
    display:"Baingan Bharta (Maharashtrian)",
    versions:{ restaurant:{cal:200,prot:4,carb:14,fat:12}, home:{cal:160,prot:4,carb:12,fat:8} }
  },

  "thalipeeth": {
    display:"Thalipeeth",
    versions:{ restaurant:{cal:260,prot:8,carb:28,fat:10}, home:{cal:220,prot:8,carb:24,fat:8} }
  },

  "bhakri": {
    display:"Bhakri (Jowar/Ragi)",
    versions:{ restaurant:{cal:180,prot:4,carb:30,fat:2}, home:{cal:160,prot:4,carb:28,fat:2} }
  },

  "sol kadhi": {
    display:"Sol Kadhi",
    versions:{ restaurant:{cal:110,prot:2,carb:8,fat:6}, home:{cal:90,prot:2,carb:6,fat:4} }
  },

  "pithla": {
    display:"Pithla",
    versions:{ restaurant:{cal:220,prot:10,carb:20,fat:12}, home:{cal:180,prot:10,carb:18,fat:8} }
  },

  "kolhapuri tambda rassa": {
    display:"Kolhapuri Tambda Rassa",
    versions:{ restaurant:{cal:420,prot:26,carb:8,fat:28}, home:{cal:340,prot:24,carb:8,fat:20} }
  },

  "kolhapuri pandhra rassa": {
    display:"Kolhapuri Pandhra Rassa",
    versions:{ restaurant:{cal:360,prot:24,carb:8,fat:22}, home:{cal:300,prot:22,carb:7,fat:16} }
  },

  /* ------------------------------------
     GUJARATI EXPANDED
  ------------------------------------ */

  "fafda": {
    display:"Fafda (100g)",
    versions:{ restaurant:{cal:480,prot:10,carb:55,fat:22}, home:{cal:420,prot:10,carb:50,fat:18} }
  },

  "jalebi fafda": {
    display:"Jalebi + Fafda Combo",
    versions:{ restaurant:{cal:650,prot:10,carb:100,fat:26}, home:{cal:580,prot:10,carb:90,fat:20} }
  },

  "sev tamatar": {
    display:"Sev Tamatar Sabzi",
    versions:{ restaurant:{cal:300,prot:6,carb:34,fat:14}, home:{cal:260,prot:6,carb:32,fat:10} }
  },

  "khandvi": {
    display:"Khandvi",
    versions:{ restaurant:{cal:320,prot:8,carb:30,fat:18}, home:{cal:260,prot:8,carb:28,fat:12} }
  },

  /* ------------------------------------
     BENGALI EXPANDED
  ------------------------------------ */

  "fish fry bengali": {
    display:"Bengali Fish Fry",
    versions:{ restaurant:{cal:380,prot:22,carb:18,fat:22}, home:{cal:320,prot:20,carb:16,fat:16} }
  },

  "kosha mangsho": {
    display:"Kosha Mangsho",
    versions:{ restaurant:{cal:540,prot:32,carb:10,fat:38}, home:{cal:460,prot:30,carb:8,fat:28} }
  },

  "begun bhaja": {
    display:"Begun Bhaja",
    versions:{ restaurant:{cal:300,prot:4,carb:18,fat:22}, home:{cal:240,prot:4,carb:16,fat:16} }
  },

  "mochar ghonto": {
    display:"Mochar Ghonto",
    versions:{ restaurant:{cal:260,prot:6,carb:24,fat:12}, home:{cal:220,prot:6,carb:22,fat:8} }
  },

  "pithe puli": {
    display:"Pithe Puli",
    versions:{ restaurant:{cal:200,prot:4,carb:34,fat:6}, home:{cal:180,prot:4,carb:30,fat:5} }
  }

}); // END CHUNK 2
/* ============= MEGA FOOD ENTRIES (Chunk 3) ============= */

Object.assign(megaFoods, {

  /* ------------------------------------
     PUNJABI EXPANDED (MEGA)
  ------------------------------------ */

  "amritsari kulcha": {
    display:"Amritsari Kulcha",
    versions:{ restaurant:{cal:420,prot:10,carb:60,fat:16}, home:{cal:360,prot:10,carb:55,fat:12} }
  },

  "chole bhature": {
    display:"Chole Bhature",
    versions:{ restaurant:{cal:780,prot:18,carb:90,fat:36}, home:{cal:680,prot:16,carb:82,fat:28} }
  },

  "sarson ka saag": {
    display:"Sarson Ka Saag",
    versions:{ restaurant:{cal:260,prot:8,carb:16,fat:18}, home:{cal:200,prot:7,carb:14,fat:10} }
  },

  "makki ki roti": {
    display:"Makki Ki Roti",
    versions:{ restaurant:{cal:210,prot:4,carb:28,fat:8}, home:{cal:190,prot:4,carb:26,fat:6} }
  },

  "dal makhani": {
    display:"Dal Makhani",
    versions:{ restaurant:{cal:420,prot:14,carb:32,fat:24}, home:{cal:340,prot:13,carb:28,fat:16} }
  },

  "paneer lababdar": {
    display:"Paneer Lababdar",
    versions:{ restaurant:{cal:520,prot:18,carb:20,fat:34}, home:{cal:420,prot:16,carb:18,fat:24} }
  },

  "amritsari fish fry": {
    display:"Amritsari Fish Fry",
    versions:{ restaurant:{cal:420,prot:30,carb:12,fat:24}, home:{cal:360,prot:28,carb:10,fat:18} }
  },

  "tandoori roti": {
    display:"Tandoori Roti",
    versions:{ restaurant:{cal:160,prot:5,carb:26,fat:2}, home:{cal:140,prot:5,carb:24,fat:2} }
  },

  /* ------------------------------------
     STREET FOOD EXPANDED (MEGA)
  ------------------------------------ */

  "dabeli": {
    display:"Dabeli",
    versions:{ restaurant:{cal:420,prot:8,carb:55,fat:18}, home:{cal:350,prot:8,carb:48,fat:14} }
  },

  "kachori": {
    display:"Kachori",
    versions:{ restaurant:{cal:320,prot:5,carb:32,fat:18}, home:{cal:280,prot:5,carb:30,fat:14} }
  },

  "kachori sabzi": {
    display:"Kachori Sabzi",
    versions:{ restaurant:{cal:480,prot:8,carb:60,fat:22}, home:{cal:420,prot:8,carb:55,fat:18} }
  },

  "aloo tikki": {
    display:"Aloo Tikki (2 pcs)",
    versions:{ restaurant:{cal:280,prot:4,carb:34,fat:12}, home:{cal:240,prot:4,carb:30,fat:10} }
  },

  "sev puri": {
    display:"Sev Puri",
    versions:{ restaurant:{cal:360,prot:6,carb:56,fat:14}, home:{cal:300,prot:6,carb:50,fat:10} }
  },

  "ragda pattice": {
    display:"Ragda Pattice",
    versions:{ restaurant:{cal:420,prot:12,carb:60,fat:14}, home:{cal:360,prot:12,carb:54,fat:10} }
  },

  /* ------------------------------------
     FAST FOOD / MODERN INDIAN
  ------------------------------------ */

  "chicken burger indian": {
    display:"Chicken Burger (Indian style)",
    versions:{ restaurant:{cal:580,prot:22,carb:60,fat:28}, home:{cal:500,prot:20,carb:55,fat:22} }
  },

  "paneer burger": {
    display:"Paneer Burger",
    versions:{ restaurant:{cal:600,prot:20,carb:62,fat:30}, home:{cal:520,prot:18,carb:58,fat:24} }
  },

  "veg cheese sandwich": {
    display:"Veg Cheese Sandwich",
    versions:{ restaurant:{cal:380,prot:10,carb:38,fat:18}, home:{cal:330,prot:9,carb:34,fat:14} }
  },

  "paneer frankie": {
    display:"Paneer Frankie / Roll",
    versions:{ restaurant:{cal:550,prot:18,carb:50,fat:28}, home:{cal:460,prot:16,carb:46,fat:20} }
  },

  "chicken frankie": {
    display:"Chicken Frankie / Roll",
    versions:{ restaurant:{cal:580,prot:26,carb:52,fat:28}, home:{cal:480,prot:24,carb:48,fat:20} }
  },

  /* ------------------------------------
     SNACKS / NAMKEEN EXPANDED
  ------------------------------------ */

  "banana chips 100g": {
    display:"Banana Chips (100g)",
    versions:{ restaurant:{cal:520,prot:3,carb:50,fat:32}, home:{cal:460,prot:3,carb:46,fat:28} }
  },

  "murukku 100g": {
    display:"Murukku (100g)",
    versions:{ restaurant:{cal:480,prot:6,carb:58,fat:22}, home:{cal:420,prot:6,carb:52,fat:18} }
  },

  "mixture south indian 100g": {
    display:"South Indian Mixture (100g)",
    versions:{ restaurant:{cal:550,prot:8,carb:48,fat:36}, home:{cal:480,prot:8,carb:44,fat:28} }
  },

  "soya chunks 50g": {
    display:"Soya Chunks (50g dry)",
    versions:{ restaurant:{cal:175,prot:27,carb:20,fat:1}, home:{cal:175,prot:27,carb:20,fat:1} }
  },

  /* ------------------------------------
     BEVERAGES EXPANDED
  ------------------------------------ */

  "masala chai": {
    display:"Masala Chai (1 cup)",
    versions:{ restaurant:{cal:90,prot:2,carb:12,fat:4}, home:{cal:70,prot:2,carb:10,fat:3} }
  },

  "badam milk": {
    display:"Badam Milk (1 glass)",
    versions:{ restaurant:{cal:260,prot:8,carb:28,fat:12}, home:{cal:220,prot:8,carb:22,fat:10} }
  },

  "rose milk": {
    display:"Rose Milk",
    versions:{ restaurant:{cal:220,prot:4,carb:34,fat:8}, home:{cal:190,prot:4,carb:30,fat:6} }
  },

  "jaljeera drink": {
    display:"Jaljeera Drink",
    versions:{ restaurant:{cal:40,prot:1,carb:8,fat:0}, home:{cal:35,prot:1,carb:7,fat:0} }
  },

  /* ------------------------------------
     SWEETS / DESSERT EXPANDED
  ------------------------------------ */

  "rasgulla": {
    display:"Rasgulla (1 pc)",
    versions:{ restaurant:{cal:125,prot:2,carb:22,fat:3}, home:{cal:110,prot:2,carb:20,fat:2} }
  },

  "rasmalai": {
    display:"Rasmalai (1 pc)",
    versions:{ restaurant:{cal:240,prot:6,carb:26,fat:12}, home:{cal:210,prot:6,carb:24,fat:10} }
  },

  "sandesh": {
    display:"Sandesh",
    versions:{ restaurant:{cal:140,prot:4,carb:18,fat:6}, home:{cal:120,prot:4,carb:16,fat:4} }
  },

  "cham cham": {
    display:"Cham Cham",
    versions:{ restaurant:{cal:220,prot:4,carb:34,fat:10}, home:{cal:190,prot:4,carb:30,fat:8} }
  },

  "milk cake": {
    display:"Milk Cake",
    versions:{ restaurant:{cal:280,prot:6,carb:38,fat:12}, home:{cal:240,prot:6,carb:34,fat:10} }
  },

}); // END CHUNK 3
/* ============= MEGA FOOD ENTRIES (Chunk 4) ============= */

Object.assign(megaFoods, {

  /* ------------------------------------
     ANDHRA / TELUGU CUISINE (MEGA)
  ------------------------------------ */

  "andhra chicken curry": {
    display:"Andhra Chicken Curry",
    versions:{ restaurant:{cal:480,prot:32,carb:10,fat:32}, home:{cal:380,prot:30,carb:8,fat:22} }
  },

  "gongura mutton": {
    display:"Gongura Mutton",
    versions:{ restaurant:{cal:520,prot:30,carb:8,fat:36}, home:{cal:420,prot:28,carb:6,fat:26} }
  },

  "andhra fish fry": {
    display:"Andhra Fish Fry",
    versions:{ restaurant:{cal:360,prot:32,carb:6,fat:22}, home:{cal:310,prot:30,carb:5,fat:16} }
  },

  "ulavacharu": {
    display:"Ulavacharu (Horsegram Soup)",
    versions:{ restaurant:{cal:160,prot:8,carb:24,fat:4}, home:{cal:140,prot:8,carb:20,fat:3} }
  },

  "pappu": {
    display:"Andhra Pappu (Dal)",
    versions:{ restaurant:{cal:200,prot:10,carb:26,fat:6}, home:{cal:170,prot:9,carb:24,fat:4} }
  },

  "gutti vankaya": {
    display:"Gutti Vankaya Curry",
    versions:{ restaurant:{cal:240,prot:5,carb:14,fat:16}, home:{cal:200,prot:5,carb:12,fat:10} }
  },

  /* ------------------------------------
     TELANGANA FOODS (MEGA)
  ------------------------------------ */

  "hyderabadi biryani": {
    display:"Hyderabadi Chicken Biryani",
    versions:{ restaurant:{cal:720,prot:36,carb:82,fat:30}, home:{cal:580,prot:32,carb:70,fat:20} }
  },

  "double ka meetha": {
    display:"Double Ka Meetha",
    versions:{ restaurant:{cal:380,prot:6,carb:55,fat:14}, home:{cal:320,prot:5,carb:48,fat:10} }
  },

  "mirchi ka salan": {
    display:"Mirchi Ka Salan",
    versions:{ restaurant:{cal:200,prot:4,carb:10,fat:16}, home:{cal:170,prot:4,carb:8,fat:10} }
  },

  "khubani ka meetha": {
    display:"Khubani Ka Meetha",
    versions:{ restaurant:{cal:360,prot:4,carb:65,fat:8}, home:{cal:300,prot:4,carb:55,fat:6} }
  },

  /* ------------------------------------
     MAHARASHTRIAN (MEGA)
  ------------------------------------ */

  "misal pav": {
    display:"Misal Pav",
    versions:{ restaurant:{cal:540,prot:18,carb:62,fat:24}, home:{cal:440,prot:16,carb:55,fat:16} }
  },

  "pithla bhakri": {
    display:"Pithla Bhakri",
    versions:{ restaurant:{cal:420,prot:14,carb:52,fat:14}, home:{cal:360,prot:12,carb:48,fat:12} }
  },

  "sabudana khichdi": {
    display:"Sabudana Khichdi",
    versions:{ restaurant:{cal:450,prot:6,carb:70,fat:16}, home:{cal:380,prot:6,carb:62,fat:12} }
  },

  "modak": {
    display:"Modak (1 pc)",
    versions:{ restaurant:{cal:220,prot:3,carb:40,fat:6}, home:{cal:180,prot:3,carb:34,fat:4} }
  },

  /* ------------------------------------
     NORTH-EAST INDIAN CUISINE
  ------------------------------------ */

  "thukpa veg": {
    display:"Veg Thukpa",
    versions:{ restaurant:{cal:320,prot:10,carb:52,fat:6}, home:{cal:280,prot:10,carb:48,fat:4} }
  },

  "thukpa chicken": {
    display:"Chicken Thukpa",
    versions:{ restaurant:{cal:380,prot:22,carb:52,fat:8}, home:{cal:330,prot:20,carb:48,fat:6} }
  },

  "pork momos": {
    display:"Pork Momos (6 pcs)",
    versions:{ restaurant:{cal:380,prot:18,carb:40,fat:18}, home:{cal:330,prot:16,carb:38,fat:12} }
  },

  "smoked pork curry": {
    display:"Smoked Pork Curry",
    versions:{ restaurant:{cal:520,prot:28,carb:4,fat:44}, home:{cal:460,prot:26,carb:4,fat:36} }
  },

  /* ------------------------------------
     BENGALI EXTENDED
  ------------------------------------ */

  "ilish mach": {
    display:"Ilish Mach (Hilsa Curry)",
    versions:{ restaurant:{cal:420,prot:26,carb:6,fat:30}, home:{cal:360,prot:24,carb:4,fat:24} }
  },

  "cholar dal": {
    display:"Cholar Dal",
    versions:{ restaurant:{cal:240,prot:8,carb:28,fat:10}, home:{cal:200,prot:8,carb:26,fat:6} }
  },

  "bhapa ilish": {
    display:"Bhapa Ilish",
    versions:{ restaurant:{cal:440,prot:28,carb:6,fat:32}, home:{cal:370,prot:26,carb:4,fat:24} }
  },

  "mishti doi": {
    display:"Mishti Doi",
    versions:{ restaurant:{cal:290,prot:8,carb:45,fat:8}, home:{cal:240,prot:8,carb:38,fat:6} }
  },

  /* ------------------------------------
     KARNATAKA CUISINE (MEGA)
  ------------------------------------ */

  "bisibele bath": {
    display:"Bisi Bele Bath",
    versions:{ restaurant:{cal:420,prot:10,carb:62,fat:14}, home:{cal:360,prot:10,carb:55,fat:10} }
  },

  "ragi mudde": {
    display:"Ragi Mudde (1 ball)",
    versions:{ restaurant:{cal:150,prot:3,carb:32,fat:1}, home:{cal:140,prot:3,carb:30,fat:1} }
  },

  "masala puri": {
    display:"Masala Puri",
    versions:{ restaurant:{cal:420,prot:8,carb:68,fat:12}, home:{cal:360,prot:7,carb:60,fat:8} }
  },

  "neer dosa": {
    display:"Neer Dosa (1pc)",
    versions:{ restaurant:{cal:120,prot:2,carb:22,fat:2}, home:{cal:110,prot:2,carb:20,fat:2} }
  },

  /* ------------------------------------
     DRINKS / JUICES (MEGA)
  ------------------------------------ */

  "mosambi juice": {
    display:"Mosambi Juice (200ml)",
    versions:{ restaurant:{cal:120,prot:2,carb:28,fat:0.2}, home:{cal:100,prot:2,carb:24,fat:0.2} }
  },

  "watermelon juice": {
    display:"Watermelon Juice (200ml)",
    versions:{ restaurant:{cal:90,prot:1,carb:22,fat:0.2}, home:{cal:80,prot:1,carb:20,fat:0.2} }
  },

  "apple juice": {
    display:"Apple Juice (200ml)",
    versions:{ restaurant:{cal:110,prot:1,carb:26,fat:0.2}, home:{cal:90,prot:1,carb:22,fat:0.2} }
  },

  "carrot juice": {
    display:"Carrot Juice (200ml)",
    versions:{ restaurant:{cal:90,prot:1.5,carb:20,fat:0.2}, home:{cal:70,prot:1.5,carb:16,fat:0.2} }
  },

}); // END CHUNK 4
/* ============= MEGA FOOD ENTRIES (Chunk 5) ============= */

Object.assign(megaFoods, {

  /* ------------------------------------
     SOUTH INDIAN — EXTENDED MEGA LIST
  ------------------------------------ */

  "mysore masala dosa": {
    display:"Mysore Masala Dosa",
    versions:{ restaurant:{cal:420,prot:7,carb:58,fat:14}, home:{cal:360,prot:7,carb:52,fat:10} }
  },

  "set dosa": {
    display:"Set Dosa (2 pcs)",
    versions:{ restaurant:{cal:380,prot:6,carb:60,fat:10}, home:{cal:340,prot:6,carb:56,fat:8} }
  },

  "rava dosa": {
    display:"Rava Dosa",
    versions:{ restaurant:{cal:260,prot:4,carb:40,fat:8}, home:{cal:240,prot:4,carb:38,fat:6} }
  },

  "uthappam": {
    display:"Uthappam (1 pc)",
    versions:{ restaurant:{cal:220,prot:5,carb:34,fat:6}, home:{cal:200,prot:5,carb:32,fat:4} }
  },

  "onion uthappam": {
    display:"Onion Uthappam",
    versions:{ restaurant:{cal:260,prot:5,carb:38,fat:8}, home:{cal:230,prot:5,carb:35,fat:6} }
  },

  "ghee roast dosa": {
    display:"Ghee Roast Dosa",
    versions:{ restaurant:{cal:480,prot:6,carb:62,fat:22}, home:{cal:420,prot:6,carb:58,fat:16} }
  },

  "puliyogare": {
    display:"Puliyogare / Tamarind Rice",
    versions:{ restaurant:{cal:420,prot:7,carb:60,fat:16}, home:{cal:360,prot:7,carb:55,fat:12} }
  },

  "curd rice": {
    display:"Curd Rice",
    versions:{ restaurant:{cal:320,prot:8,carb:46,fat:10}, home:{cal:260,prot:7,carb:40,fat:6} }
  },

  /* ------------------------------------
     GUJARATI CUISINE — EXPANDED
  ------------------------------------ */

  "thepla": {
    display:"Thepla (1 pc)",
    versions:{ restaurant:{cal:160,prot:3,carb:22,fat:6}, home:{cal:140,prot:3,carb:20,fat:5} }
  },

  "methi thepla": {
    display:"Methi Thepla",
    versions:{ restaurant:{cal:170,prot:3,carb:22,fat:7}, home:{cal:150,prot:3,carb:20,fat:5} }
  },

  "dhokla": {
    display:"Dhokla (2 pc)",
    versions:{ restaurant:{cal:150,prot:6,carb:24,fat:3}, home:{cal:130,prot:6,carb:22,fat:2} }
  },

  "khandvi": {
    display:"Khandvi",
    versions:{ restaurant:{cal:180,prot:8,carb:22,fat:6}, home:{cal:150,prot:7,carb:20,fat:4} }
  },

  "undhiyu": {
    display:"Undhiyu",
    versions:{ restaurant:{cal:340,prot:8,carb:30,fat:22}, home:{cal:290,prot:8,carb:28,fat:16} }
  },

  "fajeto": {
    display:"Fajeto (Gujarati Kadhi with Mango)",
    versions:{ restaurant:{cal:160,prot:5,carb:20,fat:5}, home:{cal:140,prot:5,carb:18,fat:4} }
  },

  /* ------------------------------------
     RAJASTHANI MEGA LIST
  ------------------------------------ */

  "dal baati": {
    display:"Dal Baati",
    versions:{ restaurant:{cal:520,prot:16,carb:54,fat:24}, home:{cal:460,prot:15,carb:50,fat:18} }
  },

  "gatte ki sabzi": {
    display:"Gatte Ki Sabzi",
    versions:{ restaurant:{cal:280,prot:10,carb:22,fat:16}, home:{cal:240,prot:10,carb:20,fat:12} }
  },

  "ker sangri": {
    display:"Ker Sangri",
    versions:{ restaurant:{cal:260,prot:6,carb:18,fat:16}, home:{cal:220,prot:6,carb:16,fat:12} }
  },

  "moong dal halwa": {
    display:"Moong Dal Halwa",
    versions:{ restaurant:{cal:360,prot:8,carb:42,fat:18}, home:{cal:300,prot:7,carb:38,fat:14} }
  },

  /* ------------------------------------
     SOUTH BREAKFAST EXTRAS
  ------------------------------------ */

  "pongal": {
    display:"Pongal",
    versions:{ restaurant:{cal:320,prot:8,carb:46,fat:10}, home:{cal:280,prot:8,carb:42,fat:8} }
  },

  "kesari bath": {
    display:"Kesari Bath",
    versions:{ restaurant:{cal:340,prot:4,carb:64,fat:8}, home:{cal:300,prot:4,carb:60,fat:6} }
  },

  /* ------------------------------------
     FRIED FOODS EXPANDED (MEGA)
  ------------------------------------ */

  "fish fry": {
    display:"Fish Fry (Indian Style)",
    versions:{ restaurant:{cal:340,prot:32,carb:4,fat:22}, home:{cal:290,prot:30,carb:4,fat:16} }
  },

  "prawn fry": {
    display:"Prawn Fry",
    versions:{ restaurant:{cal:260,prot:28,carb:4,fat:12}, home:{cal:220,prot:26,carb:4,fat:8} }
  },

  "chicken fry": {
    display:"Chicken Fry",
    versions:{ restaurant:{cal:360,prot:28,carb:6,fat:22}, home:{cal:300,prot:26,carb:4,fat:16} }
  },

  "fish cutlet": {
    display:"Fish Cutlet",
    versions:{ restaurant:{cal:280,prot:14,carb:24,fat:14}, home:{cal:240,prot:14,carb:22,fat:10} }
  },

  /* ------------------------------------
     POPULAR ROTI / BREAD VARIANTS
  ------------------------------------ */

  "missi roti": {
    display:"Missi Roti",
    versions:{ restaurant:{cal:180,prot:5,carb:26,fat:6}, home:{cal:160,prot:5,carb:24,fat:4} }
  },

  "rumali roti": {
    display:"Rumali Roti",
    versions:{ restaurant:{cal:120,prot:3,carb:22,fat:2}, home:{cal:100,prot:3,carb:20,fat:1} }
  },

  "lachha paratha": {
    display:"Lachha Paratha",
    versions:{ restaurant:{cal:360,prot:6,carb:40,fat:18}, home:{cal:300,prot:6,carb:36,fat:14} }
  },

  /* ------------------------------------
     VEG CURRIES EXTENDED (MEGA)
  ------------------------------------ */

  "veg kolhapuri": {
    display:"Veg Kolhapuri",
    versions:{ restaurant:{cal:300,prot:8,carb:20,fat:18}, home:{cal:250,prot:8,carb:18,fat:12} }
  },

  "veg handi": {
    display:"Veg Handi",
    versions:{ restaurant:{cal:340,prot:9,carb:20,fat:22}, home:{cal:280,prot:9,carb:18,fat:14} }
  },

  "veg jalfrezi": {
    display:"Veg Jalfrezi",
    versions:{ restaurant:{cal:260,prot:8,carb:20,fat:14}, home:{cal:220,prot:8,carb:18,fat:10} }
  },

  "baingan bharta": {
    display:"Baingan Bharta",
    versions:{ restaurant:{cal:220,prot:5,carb:18,fat:12}, home:{cal:180,prot:5,carb:16,fat:8} }
  },

  /* ------------------------------------
     CHINESE INDIAN FUSION
  ------------------------------------ */

  "veg fried rice": {
    display:"Veg Fried Rice",
    versions:{ restaurant:{cal:420,prot:8,carb:60,fat:14}, home:{cal:360,prot:8,carb:56,fat:10} }
  },

  "chicken fried rice": {
    display:"Chicken Fried Rice",
    versions:{ restaurant:{cal:480,prot:22,carb:60,fat:16}, home:{cal:420,prot:20,carb:55,fat:12} }
  },

  "veg noodles": {
    display:"Veg Noodles",
    versions:{ restaurant:{cal:380,prot:8,carb:58,fat:10}, home:{cal:330,prot:8,carb:54,fat:8} }
  },

  "chicken noodles": {
    display:"Chicken Noodles",
    versions:{ restaurant:{cal:450,prot:20,carb:60,fat:14}, home:{cal:390,prot:18,carb:56,fat:10} }
  },

  "manchow soup veg": {
    display:"Veg Manchow Soup",
    versions:{ restaurant:{cal:160,prot:6,carb:18,fat:6}, home:{cal:130,prot:6,carb:16,fat:4} }
  },

});
/* ============= MEGA FOOD ENTRIES (Chunk 6) ============= */

Object.assign(megaFoods, {

  /* ------------------------------------
     SOUTH INDIAN SNACKS — MEGA EXTENDED
  ------------------------------------ */

  "banana bajji": {
    display:"Banana Bajji (1 pc)",
    versions:{ restaurant:{cal:160,prot:2,carb:28,fat:6}, home:{cal:140,prot:2,carb:26,fat:5} }
  },

  "mirchi bajji": {
    display:"Mirchi Bajji (1 pc)",
    versions:{ restaurant:{cal:180,prot:3,carb:20,fat:10}, home:{cal:150,prot:3,carb:18,fat:8} }
  },

  "bondas": {
    display:"Aloo Bonda (1 pc)",
    versions:{ restaurant:{cal:200,prot:3,carb:30,fat:10}, home:{cal:170,prot:3,carb:26,fat:8} }
  },

  "maddur vada": {
    display:"Maddur Vada",
    versions:{ restaurant:{cal:260,prot:4,carb:28,fat:14}, home:{cal:220,prot:4,carb:24,fat:10} }
  },

  /* ------------------------------------
     POPULAR FRANKIES / ROLLS
  ------------------------------------ */

  "egg roll": {
    display:"Kolkata Egg Roll",
    versions:{ restaurant:{cal:380,prot:12,carb:40,fat:16}, home:{cal:330,prot:12,carb:36,fat:12} }
  },

  "egg chicken roll": {
    display:"Kolkata Egg Chicken Roll",
    versions:{ restaurant:{cal:480,prot:22,carb:42,fat:22}, home:{cal:420,prot:20,carb:40,fat:16} }
  },

  "paneer kathi roll": {
    display:"Paneer Kathi Roll",
    versions:{ restaurant:{cal:520,prot:20,carb:48,fat:24}, home:{cal:440,prot:18,carb:45,fat:18} }
  },

  "veg kathi roll": {
    display:"Veg Kathi Roll",
    versions:{ restaurant:{cal:420,prot:10,carb:50,fat:18}, home:{cal:360,prot:10,carb:46,fat:14} }
  },

  /* ------------------------------------
     INDIAN SWEETS — MEGA EXTRA
  ------------------------------------ */

  "kajukatli": {
    display:"Kaju Katli (1 pc)",
    versions:{ restaurant:{cal:65,prot:1.5,carb:7,fat:3.5}, home:{cal:60,prot:1.5,carb:6,fat:3} }
  },

  "sohan papdi": {
    display:"Sohan Papdi (1 pc)",
    versions:{ restaurant:{cal:90,prot:2,carb:12,fat:4}, home:{cal:80,prot:2,carb:10,fat:3} }
  },

  "rasmalai bowl": {
    display:"Rasmalai Bowl",
    versions:{ restaurant:{cal:310,prot:8,carb:36,fat:16}, home:{cal:260,prot:8,carb:32,fat:12} }
  },

  "ladoo besan": {
    display:"Besan Ladoo (1 pc)",
    versions:{ restaurant:{cal:210,prot:4,carb:26,fat:10}, home:{cal:180,prot:4,carb:24,fat:8} }
  },

  "ladoo rava": {
    display:"Rava Ladoo (1 pc)",
    versions:{ restaurant:{cal:190,prot:3,carb:24,fat:9}, home:{cal:160,prot:3,carb:22,fat:6} }
  },

  /* ------------------------------------
     INDIAN SNACK PACKETS (NAMKEEN)
  ------------------------------------ */

  "haldiram bhujia 100g": {
    display:"Haldiram Bhujia (100g)",
    versions:{ restaurant:{cal:550,prot:10,carb:42,fat:38}, home:{cal:550,prot:10,carb:42,fat:38} }
  },

  "haldiram navratan 100g": {
    display:"Haldiram Navratan Mix (100g)",
    versions:{ restaurant:{cal:540,prot:12,carb:46,fat:34}, home:{cal:540,prot:12,carb:46,fat:34} }
  },

  "haldiram bhelpuri": {
    display:"Haldiram Bhelpuri (1 pack)",
    versions:{ restaurant:{cal:380,prot:6,carb:54,fat:12}, home:{cal:380,prot:6,carb:54,fat:12} }
  },

  /* ------------------------------------
     COMMON RAW INGREDIENTS — MEGA
  ------------------------------------ */

  "wheat flour 100g": {
    display:"Whole Wheat Flour (100 g)",
    versions:{ restaurant:{cal:340,prot:12,carb:72,fat:2}, home:{cal:340,prot:12,carb:72,fat:2} }
  },

  "rice flour 100g": {
    display:"Rice Flour (100 g)",
    versions:{ restaurant:{cal:366,prot:6,carb:80,fat:1}, home:{cal:366,prot:6,carb:80,fat:1} }
  },

  "besan 100g": {
    display:"Besan (100 g)",
    versions:{ restaurant:{cal:387,prot:22,carb:58,fat:6}, home:{cal:387,prot:22,carb:58,fat:6} }
  },

  "moong dal 100g": {
    display:"Moong Dal (100 g dry)",
    versions:{ restaurant:{cal:347,prot:24,carb:63,fat:1.5}, home:{cal:347,prot:24,carb:63,fat:1.5} }
  },

  "urad dal 100g": {
    display:"Urad Dal (100 g dry)",
    versions:{ restaurant:{cal:347,prot:25,carb:58,fat:1.5}, home:{cal:347,prot:25,carb:58,fat:1.5} }
  },

  "chana dal 100g": {
    display:"Chana Dal (100 g dry)",
    versions:{ restaurant:{cal:369,prot:21,carb:60,fat:5}, home:{cal:369,prot:21,carb:60,fat:5} }
  },

  "rajma dry 100g": {
    display:"Rajma (100 g dry)",
    versions:{ restaurant:{cal:337,prot:24,carb:60,fat:1}, home:{cal:337,prot:24,carb:60,fat:1} }
  },

  "soybean 100g": {
    display:"Soybean (100 g dry)",
    versions:{ restaurant:{cal:432,prot:36,carb:30,fat:20}, home:{cal:432,prot:36,carb:30,fat:20} }
  },

  /* ------------------------------------
     HIGH PROTEIN INGREDIENTS (GYM USERS)
  ------------------------------------ */

  "tofu 100g": {
    display:"Tofu (100 g)",
    versions:{ restaurant:{cal:76,prot:8,carb:2,fat:4}, home:{cal:76,prot:8,carb:2,fat:4} }
  },

  "egg whites 100g": {
    display:"Egg Whites (100 g)",
    versions:{ restaurant:{cal:52,prot:11,carb:0.7,fat:0.1}, home:{cal:52,prot:11,carb:0.7,fat:0.1} }
  },

  "chicken breast 100g": {
    display:"Chicken Breast (100 g)",
    versions:{ restaurant:{cal:165,prot:31,carb:0,fat:4}, home:{cal:165,prot:31,carb:0,fat:4} }
  },

  "prawns 100g": {
    display:"Prawns (100 g)",
    versions:{ restaurant:{cal:105,prot:22,carb:1,fat:1}, home:{cal:105,prot:22,carb:1,fat:1} }
  },

  "salmon 100g": {
    display:"Salmon (100 g)",
    versions:{ restaurant:{cal:208,prot:22,carb:0,fat:13}, home:{cal:208,prot:22,carb:0,fat:13} }
  },

}); // END CHUNK 6
/* ============= MEGA FOOD ENTRIES (Chunk 7) ============= */

Object.assign(megaFoods, {

  /* ------------------------------------
     MUMBAI STREET FOOD – MEGA
  ------------------------------------ */

  "keema pav": {
    display:"Keema Pav",
    versions:{ restaurant:{cal:520,prot:22,carb:42,fat:28}, home:{cal:440,prot:20,carb:38,fat:20} }
  },

  "bombay sandwich": {
    display:"Bombay Veg Sandwich",
    versions:{ restaurant:{cal:320,prot:8,carb:42,fat:12}, home:{cal:280,prot:8,carb:38,fat:8} }
  },

  "misal": {
    display:"Misal (matki usal only)",
    versions:{ restaurant:{cal:260,prot:12,carb:28,fat:10}, home:{cal:220,prot:12,carb:24,fat:6} }
  },

  "sukha bhel": {
    display:"Sukha Bhel",
    versions:{ restaurant:{cal:380,prot:8,carb:56,fat:12}, home:{cal:320,prot:7,carb:50,fat:8} }
  },

  "shev puri": {
    display:"Shev Puri",
    versions:{ restaurant:{cal:360,prot:6,carb:56,fat:14}, home:{cal:300,prot:5,carb:50,fat:10} }
  },

  /* ------------------------------------
     DELHI STREET FOOD – MEGA
  ------------------------------------ */

  "ram ladoo": {
    display:"Ram Ladoo",
    versions:{ restaurant:{cal:260,prot:8,carb:24,fat:14}, home:{cal:220,prot:7,carb:22,fat:10} }
  },

  "daulat ki chaat": {
    display:"Daulat Ki Chaat",
    versions:{ restaurant:{cal:180,prot:3,carb:22,fat:8}, home:{cal:150,prot:3,carb:18,fat:6} }
  },

  "nagori halwa": {
    display:"Nagori Halwa",
    versions:{ restaurant:{cal:420,prot:6,carb:60,fat:18}, home:{cal:360,prot:6,carb:55,fat:14} }
  },

  "bedmi puri": {
    display:"Bedmi Puri (1 pc)",
    versions:{ restaurant:{cal:190,prot:4,carb:22,fat:10}, home:{cal:170,prot:4,carb:20,fat:8} }
  },

  "aloo sabzi bedmi": {
    display:"Aloo Sabzi (with Bedmi)",
    versions:{ restaurant:{cal:220,prot:4,carb:28,fat:12}, home:{cal:190,prot:4,carb:24,fat:8} }
  },

  /* ------------------------------------
     PAKISTANI CUISINE – MEGA EXPANSION
  ------------------------------------ */

  "nihari": {
    display:"Beef Nihari",
    versions:{ restaurant:{cal:620,prot:28,carb:16,fat:42}, home:{cal:540,prot:26,carb:14,fat:32} }
  },

  "haleem": {
    display:"Beef Haleem",
    versions:{ restaurant:{cal:420,prot:26,carb:34,fat:18}, home:{cal:360,prot:24,carb:30,fat:12} }
  },

  "chapli kabab": {
    display:"Chapli Kabab (1 pc)",
    versions:{ restaurant:{cal:280,prot:22,carb:6,fat:18}, home:{cal:240,prot:20,carb:5,fat:14} }
  },

  "karahi chicken": {
    display:"Chicken Karahi",
    versions:{ restaurant:{cal:480,prot:32,carb:8,fat:32}, home:{cal:400,prot:30,carb:8,fat:22} }
  },

  "karahi gosht": {
    display:"Mutton Karahi",
    versions:{ restaurant:{cal:620,prot:32,carb:6,fat:48}, home:{cal:540,prot:30,carb:6,fat:36} }
  },

  "biryani sindhi": {
    display:"Sindhi Biryani",
    versions:{ restaurant:{cal:740,prot:32,carb:92,fat:28}, home:{cal:600,prot:30,carb:80,fat:20} }
  },

  "lahori chargha": {
    display:"Lahori Chargha",
    versions:{ restaurant:{cal:680,prot:48,carb:4,fat:48}, home:{cal:580,prot:45,carb:4,fat:38} }
  },

  /* ------------------------------------
     BANGLADESHI CUISINE – MEGA EXPANSION
  ------------------------------------ */

  "bhuna khichuri": {
    display:"Bhuna Khichuri",
    versions:{ restaurant:{cal:420,prot:14,carb:62,fat:12}, home:{cal:360,prot:12,carb:58,fat:8} }
  },

  "ilish bhapa": {
    display:"Ilish Bhapa",
    versions:{ restaurant:{cal:440,prot:28,carb:6,fat:32}, home:{cal:380,prot:26,carb:4,fat:24} }
  },

  "morog polao": {
    display:"Morog Polao",
    versions:{ restaurant:{cal:650,prot:32,carb:82,fat:22}, home:{cal:540,prot:30,carb:72,fat:16} }
  },

  "fuchka": {
    display:"Fuchka / Puchka (6 pcs)",
    versions:{ restaurant:{cal:220,prot:4,carb:32,fat:8}, home:{cal:190,prot:4,carb:28,fat:6} }
  },

  "bhorta mixed": {
    display:"Mixed Bhorta Plate",
    versions:{ restaurant:{cal:260,prot:6,carb:20,fat:16}, home:{cal:220,prot:6,carb:18,fat:12} }
  },

  /* ------------------------------------
     SOUTH INDIAN NON-VEG EXTENDED
  ------------------------------------ */

  "kerala fish curry": {
    display:"Kerala Fish Curry",
    versions:{ restaurant:{cal:420,prot:30,carb:8,fat:28}, home:{cal:330,prot:28,carb:6,fat:18} }
  },

  "kerala beef fry": {
    display:"Kerala Beef Fry",
    versions:{ restaurant:{cal:520,prot:34,carb:4,fat:40}, home:{cal:440,prot:32,carb:4,fat:30} }
  },

  "andhra prawn fry": {
    display:"Andhra Prawn Fry",
    versions:{ restaurant:{cal:300,prot:28,carb:6,fat:16}, home:{cal:260,prot:26,carb:4,fat:10} }
  },

  "kongunadu chicken": {
    display:"Kongunadu Chicken",
    versions:{ restaurant:{cal:440,prot:32,carb:8,fat:26}, home:{cal:360,prot:30,carb:6,fat:18} }
  },

  /* ------------------------------------
     HIGHLY SEARCHED FESTIVE ITEMS
  ------------------------------------ */

  "sheer khurma": {
    display:"Sheer Khurma",
    versions:{ restaurant:{cal:380,prot:10,carb:48,fat:16}, home:{cal:320,prot:10,carb:42,fat:12} }
  },

  "seviyan kheer": {
    display:"Seviyan Kheer",
    versions:{ restaurant:{cal:320,prot:8,carb:45,fat:12}, home:{cal:260,prot:7,carb:38,fat:10} }
  },

  "moong dal pakoda": {
    display:"Moong Dal Pakoda",
    versions:{ restaurant:{cal:440,prot:10,carb:36,fat:28}, home:{cal:360,prot:10,carb:32,fat:20} }
  },

}); // END CHUNK 7
/* ============= MEGA FOOD ENTRIES (Chunk 8 — FINAL) ============= */

Object.assign(megaFoods, {

  /* ------------------------------------
     1) GYM DIET — HIGH PROTEIN INDIAN FOODS
  ------------------------------------ */

  "grilled chicken breast 100g": {
    display:"Grilled Chicken Breast (100 g)",
    versions:{ restaurant:{cal:165,prot:31,carb:0,fat:3.5}, home:{cal:150,prot:30,carb:0,fat:2} }
  },

  "boiled chana 100g": {
    display:"Boiled Chana (100 g)",
    versions:{ restaurant:{cal:164,prot:9,carb:27,fat:2}, home:{cal:160,prot:9,carb:26,fat:2} }
  },

  "sprouts salad": {
    display:"Sprouts Salad (1 bowl)",
    versions:{ restaurant:{cal:190,prot:14,carb:28,fat:3}, home:{cal:160,prot:12,carb:25,fat:2} }
  },

  "grilled paneer 100g": {
    display:"Grilled Paneer (100 g)",
    versions:{ restaurant:{cal:310,prot:20,carb:6,fat:22}, home:{cal:260,prot:18,carb:6,fat:16} }
  },

  "egg whites 3": {
    display:"Egg Whites (3 pcs)",
    versions:{ restaurant:{cal:51,prot:11,carb:0,fat:0}, home:{cal:48,prot:11,carb:0,fat:0} }
  },

  "oats porridge 1 cup": {
    display:"Oats Porridge (1 cup)",
    versions:{ restaurant:{cal:230,prot:8,carb:38,fat:4}, home:{cal:190,prot:7,carb:32,fat:3} }
  },


  /* ------------------------------------
     2) LOW CALORIE INDIAN FOODS
  ------------------------------------ */

  "lauki sabzi": {
    display:"Lauki Sabzi (1 cup)",
    versions:{ restaurant:{cal:80,prot:2,carb:10,fat:4}, home:{cal:60,prot:2,carb:8,fat:2} }
  },

  "tinda sabzi": {
    display:"Tinda Sabzi (1 cup)",
    versions:{ restaurant:{cal:90,prot:2,carb:10,fat:5}, home:{cal:70,prot:2,carb:8,fat:3} }
  },

  "karele ki sabzi": {
    display:"Karela Sabzi (1 cup)",
    versions:{ restaurant:{cal:100,prot:3,carb:12,fat:5}, home:{cal:80,prot:3,carb:10,fat:3} }
  },

  "mooli salad": {
    display:"Mooli Salad",
    versions:{ restaurant:{cal:35,prot:1,carb:6,fat:0}, home:{cal:30,prot:1,carb:6,fat:0} }
  },

  "cabbage sabzi": {
    display:"Cabbage Sabzi (1 cup)",
    versions:{ restaurant:{cal:90,prot:3,carb:12,fat:4}, home:{cal:70,prot:3,carb:10,fat:2} }
  },


  /* ------------------------------------
     3) DIABETIC FRIENDLY INDIAN FOODS
  ------------------------------------ */

  "moong dal chilla": {
    display:"Moong Dal Chilla (1)",
    versions:{ restaurant:{cal:128,prot:6,carb:14,fat:5}, home:{cal:110,prot:6,carb:12,fat:4} }
  },

  "palak soup": {
    display:"Palak Soup",
    versions:{ restaurant:{cal:90,prot:4,carb:10,fat:3}, home:{cal:70,prot:4,carb:8,fat:2} }
  },

  "besan chilla": {
    display:"Besan Chilla (1)",
    versions:{ restaurant:{cal:150,prot:6,carb:16,fat:7}, home:{cal:120,prot:6,carb:12,fat:5} }
  },

  "jowar roti": {
    display:"Jowar Roti",
    versions:{ restaurant:{cal:120,prot:3,carb:24,fat:2}, home:{cal:110,prot:3,carb:22,fat:2} }
  },

  "bajra roti": {
    display:"Bajra Roti",
    versions:{ restaurant:{cal:160,prot:4,carb:32,fat:3}, home:{cal:140,prot:4,carb:30,fat:2} }
  },

  "paneer bhurji no onion garlic": {
    display:"Paneer Bhurji (without onion/garlic)",
    versions:{ restaurant:{cal:260,prot:18,carb:6,fat:18}, home:{cal:210,prot:18,carb:6,fat:12} }
  },


  /* ------------------------------------
     4) JAIN FOOD ITEMS
  ------------------------------------ */

  "jain pav bhaji": {
    display:"Jain Pav Bhaji",
    versions:{ restaurant:{cal:620,prot:10,carb:90,fat:24}, home:{cal:480,prot:10,carb:80,fat:14} }
  },

  "jain pulao": {
    display:"Jain Pulao",
    versions:{ restaurant:{cal:330,prot:6,carb:52,fat:10}, home:{cal:290,prot:6,carb:48,fat:8} }
  },

  "jain biryani": {
    display:"Jain Biryani",
    versions:{ restaurant:{cal:420,prot:8,carb:60,fat:14}, home:{cal:360,prot:8,carb:55,fat:10} }
  },

  "jain dosa": {
    display:"Jain Dosa",
    versions:{ restaurant:{cal:180,prot:3,carb:28,fat:4}, home:{cal:160,prot:3,carb:26,fat:3.5} }
  },

  "jain kadhi": {
    display:"Jain Kadhi",
    versions:{ restaurant:{cal:150,prot:4,carb:16,fat:6}, home:{cal:120,prot:4,carb:14,fat:4} }
  },


  /* ------------------------------------
     5) ANDHRA & TAMIL TIFFIN COMPLETE SET
  ------------------------------------ */

  "ghee pongal": {
    display:"Ghee Pongal",
    versions:{ restaurant:{cal:420,prot:8,carb:50,fat:20}, home:{cal:340,prot:8,carb:45,fat:14} }
  },

  "curd rice": {
    display:"Curd Rice",
    versions:{ restaurant:{cal:310,prot:6,carb:44,fat:10}, home:{cal:260,prot:6,carb:40,fat:6} }
  },

  "lemon rice": {
    display:"Lemon Rice",
    versions:{ restaurant:{cal:280,prot:5,carb:50,fat:8}, home:{cal:240,prot:5,carb:45,fat:6} }
  },

  "puliyogare": {
    display:"Puliyogare",
    versions:{ restaurant:{cal:360,prot:6,carb:55,fat:12}, home:{cal:300,prot:6,carb:50,fat:8} }
  },

  "rava kichadi": {
    display:"Rava Kichadi",
    versions:{ restaurant:{cal:280,prot:5,carb:45,fat:10}, home:{cal:240,prot:5,carb:40,fat:8} }
  },

  "mysore bonda": {
    display:"Mysore Bonda",
    versions:{ restaurant:{cal:140,prot:3,carb:16,fat:6}, home:{cal:120,prot:3,carb:14,fat:5} }
  },


  /* ------------------------------------
     6) GUJARATI SNACKS / THALI ITEMS
  ------------------------------------ */

  "sev tameta": {
    display:"Sev Tameta",
    versions:{ restaurant:{cal:220,prot:4,carb:20,fat:12}, home:{cal:180,prot:4,carb:18,fat:8} }
  },

  "undhiyu": {
    display:"Undhiyu",
    versions:{ restaurant:{cal:380,prot:8,carb:36,fat:22}, home:{cal:320,prot:8,carb:32,fat:14} }
  },

  "thepla": {
    display:"Thepla (1)",
    versions:{ restaurant:{cal:140,prot:3,carb:20,fat:6}, home:{cal:120,prot:3,carb:18,fat:4} }
  },

  "fafda": {
    display:"Fafda (1 stick)",
    versions:{ restaurant:{cal:120,prot:2,carb:14,fat:6}, home:{cal:100,prot:2,carb:12,fat:5} }
  },

  "khandvi": {
    display:"Khandvi (100 g)",
    versions:{ restaurant:{cal:180,prot:6,carb:20,fat:7}, home:{cal:150,prot:6,carb:16,fat:5} }
  },


  /* ------------------------------------
     7) INDIAN FUSION — SUBWAY INDIA / KFC INDIA / DOMINOS
  ------------------------------------ */

  "subway paneer tikka 6inch": {
    display:"Subway Paneer Tikka 6-inch",
    versions:{ restaurant:{cal:420,prot:18,carb:54,fat:12}, home:{cal:380,prot:18,carb:50,fat:10} }
  },

  "subway aloo patty 6inch": {
    display:"Subway Aloo Patty 6-inch",
    versions:{ restaurant:{cal:420,prot:12,carb:58,fat:12}, home:{cal:380,prot:12,carb:54,fat:10} }
  },

  "kfc chicken popcorn regular": {
    display:"KFC Chicken Popcorn (regular)",
    versions:{ restaurant:{cal:390,prot:16,carb:26,fat:24}, home:{cal:340,prot:16,carb:24,fat:18} }
  },

  "kfc zinger": {
    display:"KFC Zinger Burger",
    versions:{ restaurant:{cal:460,prot:20,carb:48,fat:20}, home:{cal:420,prot:20,carb:44,fat:16} }
  },

  "dominos veg pizza slice": {
    display:"Dominos Veg Pizza (1 slice)",
    versions:{ restaurant:{cal:220,prot:8,carb:28,fat:8}, home:{cal:200,prot:8,carb:26,fat:6} }
  },

  "dominos nonveg pizza slice": {
    display:"Dominos Non-Veg Pizza (1 slice)",
    versions:{ restaurant:{cal:260,prot:12,carb:28,fat:10}, home:{cal:240,prot:12,carb:26,fat:8} }
  },

});  // END OF CHUNK 8 (FINAL)

