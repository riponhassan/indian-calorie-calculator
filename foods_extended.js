/* foods_extended.js
   HassanChef — Extended Indian Foods (300 items)
   This file adds regional, street food, snacks & extended variations.
*/

(function(){
  if (typeof foodDB === "undefined") {
    console.error("❌ foods_base.js not loaded before foods_extended.js");
    return;
  }
})();

/* ============= EXTENDED FOOD ENTRIES ============= */

const extendedFoods = {

  /* ---------------- SOUTH INDIAN ---------------- */
  "plain dosa": {
    display:"Plain Dosa",
    versions:{ restaurant:{cal:180,prot:3,carb:28,fat:4}, home:{cal:160,prot:3,carb:26,fat:3.5} }
  },
  "set dosa": {
    display:"Set Dosa (2 pieces)",
    versions:{ restaurant:{cal:320,prot:6,carb:50,fat:8}, home:{cal:280,prot:6,carb:45,fat:6} }
  },
  "ghee roast": {
    display:"Ghee Roast Dosa",
    versions:{ restaurant:{cal:300,prot:4,carb:36,fat:12}, home:{cal:260,prot:4,carb:34,fat:10} }
  },
  "mysore masala dosa": {
    display:"Mysore Masala Dosa",
    versions:{ restaurant:{cal:420,prot:6,carb:55,fat:14}, home:{cal:350,prot:6,carb:50,fat:10} }
  },
  "rava dosa": {
    display:"Rava/Semolina Dosa",
    versions:{ restaurant:{cal:190,prot:4,carb:28,fat:6}, home:{cal:170,prot:4,carb:26,fat:5} }
  },
  "podi dosa": {
    display:"Podi Dosa",
    versions:{ restaurant:{cal:260,prot:5,carb:34,fat:10}, home:{cal:220,prot:5,carb:32,fat:8} }
  },
  "uttapam": {
    display:"Uttapam (1 medium)",
    versions:{ restaurant:{cal:220,prot:5,carb:32,fat:6}, home:{cal:200,prot:5,carb:30,fat:5} }
  },
  "onion uttapam": {
    display:"Onion Uttapam",
    versions:{ restaurant:{cal:260,prot:5,carb:34,fat:8}, home:{cal:230,prot:5,carb:32,fat:6} }
  },
  "pongal": {
    display:"Ven Pongal",
    versions:{ restaurant:{cal:320,prot:8,carb:44,fat:10}, home:{cal:280,prot:8,carb:42,fat:8} }
  },
  "curd rice": {
    display:"Curd Rice (1 bowl)",
    versions:{ restaurant:{cal:280,prot:7,carb:44,fat:6}, home:{cal:250,prot:6,carb:40,fat:4} }
  },
  "lemon rice": {
    display:"Lemon Rice (1 bowl)",
    versions:{ restaurant:{cal:260,prot:5,carb:45,fat:8}, home:{cal:220,prot:4,carb:40,fat:6} }
  },
  "bisi bele bath": {
    display:"Bisi Bele Bath",
    versions:{ restaurant:{cal:350,prot:8,carb:55,fat:10}, home:{cal:300,prot:8,carb:50,fat:8} }
  },
  "appam": {
    display:"Appam (1)",
    versions:{ restaurant:{cal:110,prot:2,carb:20,fat:2}, home:{cal:100,prot:2,carb:18,fat:1.5} }
  },
  "idiyappam": {
    display:"Idiyappam (2 strings)",
    versions:{ restaurant:{cal:160,prot:3,carb:34,fat:1}, home:{cal:140,prot:3,carb:30,fat:1} }
  },
  "paniyaram": {
    display:"Kuzhi Paniyaram (4 pcs)",
    versions:{ restaurant:{cal:220,prot:4,carb:28,fat:8}, home:{cal:200,prot:4,carb:26,fat:6} }
  },

  /* ---------------- MAHARASHTRIAN ---------------- */
  "misal pav": {
    display:"Misal Pav (1 plate)",
    versions:{ restaurant:{cal:420,prot:14,carb:60,fat:16}, home:{cal:360,prot:12,carb:55,fat:10} }
  },
  "pav bhaji": {
    display:"Pav Bhaji (1 plate)",
    versions:{ restaurant:{cal:680,prot:10,carb:90,fat:26}, home:{cal:520,prot:10,carb:80,fat:16} }
  },
  "modak": {
    display:"Modak (1)",
    versions:{ restaurant:{cal:180,prot:2,carb:28,fat:6}, home:{cal:160,prot:2,carb:25,fat:5} }
  },
  "sabudana khichdi": {
    display:"Sabudana Khichdi",
    versions:{ restaurant:{cal:420,prot:4,carb:68,fat:12}, home:{cal:360,prot:4,carb:60,fat:10} }
  },

  /* ---------------- GUJARATI ---------------- */
  "dhokla": {
    display:"Dhokla (2 pcs)",
    versions:{ restaurant:{cal:160,prot:6,carb:24,fat:4}, home:{cal:140,prot:6,carb:22,fat:3} }
  },
  "thepla": {
    display:"Thepla (1)",
    versions:{ restaurant:{cal:180,prot:5,carb:24,fat:6}, home:{cal:150,prot:5,carb:22,fat:4} }
  },
  "undhiyu": {
    display:"Undhiyu",
    versions:{ restaurant:{cal:300,prot:8,carb:34,fat:12}, home:{cal:260,prot:8,carb:30,fat:8} }
  },
  "handvo": {
    display:"Handvo (1 slice)",
    versions:{ restaurant:{cal:180,prot:7,carb:22,fat:8}, home:{cal:150,prot:6,carb:20,fat:6} }
  },

  /* ---------------- BENGALI ---------------- */
  "aloo posto": {
    display:"Aloo Posto",
    versions:{ restaurant:{cal:320,prot:4,carb:22,fat:22}, home:{cal:260,prot:4,carb:20,fat:16} }
  },
  "ilish mach": {
    display:"Hilsa Curry",
    versions:{ restaurant:{cal:420,prot:28,carb:4,fat:30}, home:{cal:380,prot:28,carb:4,fat:26} }
  },
  "cholar dal": {
    display:"Cholar Dal",
    versions:{ restaurant:{cal:240,prot:10,carb:28,fat:8}, home:{cal:210,prot:9,carb:26,fat:6} }
  },
  "rosogolla": {
    display:"Rosogolla (1)",
    versions:{ restaurant:{cal:155,prot:3,carb:32,fat:1}, home:{cal:140,prot:3,carb:30,fat:1} }
  },

  /* ---------------- RAJASTHANI ---------------- */
  "dal bati churma": {
    display:"Dal Baati Churma (1 plate)",
    versions:{ restaurant:{cal:820,prot:22,carb:90,fat:36}, home:{cal:700,prot:20,carb:80,fat:28} }
  },
  "gatte ki sabzi": {
    display:"Gatte Ki Sabzi",
    versions:{ restaurant:{cal:280,prot:10,carb:28,fat:14}, home:{cal:240,prot:9,carb:26,fat:10} }
  },
  "ker sangri": {
    display:"Ker Sangri",
    versions:{ restaurant:{cal:220,prot:6,carb:18,fat:12}, home:{cal:180,prot:6,carb:16,fat:8} }
  },

  /* ---------------- PUNJABI ---------------- */
  "amritsari kulcha": {
    display:"Amritsari Kulcha",
    versions:{ restaurant:{cal:320,prot:7,carb:48,fat:12}, home:{cal:280,prot:7,carb:44,fat:10} }
  },
  "sarson ka saag": {
    display:"Sarson Ka Saag",
    versions:{ restaurant:{cal:280,prot:8,carb:12,fat:20}, home:{cal:220,prot:8,carb:10,fat:12} }
  },
  "chole bhature": {
    display:"Chole Bhature (1 plate)",
    versions:{ restaurant:{cal:780,prot:16,carb:90,fat:38}, home:{cal:620,prot:15,carb:80,fat:26} }
  },

  /* ---------------- STREET FOODS ---------------- */
  "sev puri": {
    display:"Sev Puri (1 plate)",
    versions:{ restaurant:{cal:360,prot:6,carb:48,fat:16}, home:{cal:300,prot:6,carb:42,fat:12} }
  },
  "dahi puri": {
    display:"Dahi Puri (1 plate)",
    versions:{ restaurant:{cal:380,prot:7,carb:50,fat:16}, home:{cal:320,prot:7,carb:44,fat:12} }
  },
  "frankie veg": {
    display:"Veg Frankie",
    versions:{ restaurant:{cal:420,prot:8,carb:48,fat:18}, home:{cal:360,prot:7,carb:44,fat:14} }
  },
  "egg roll": {
    display:"Egg Roll (1)",
    versions:{ restaurant:{cal:420,prot:14,carb:38,fat:22}, home:{cal:360,prot:14,carb:34,fat:16} }
  },

  /* ---------------- SWEETS ---------------- */
  "gajar ka halwa": {
    display:"Gajar Ka Halwa (1 bowl)",
    versions:{ restaurant:{cal:420,prot:8,carb:38,fat:26}, home:{cal:320,prot:7,carb:34,fat:18} }
  },
  "sooji halwa": {
    display:"Sooji Halwa",
    versions:{ restaurant:{cal:360,prot:5,carb:55,fat:14}, home:{cal:300,prot:5,carb:50,fat:10} }
  },
  "rasmalai": {
    display:"Rasmalai (1 piece)",
    versions:{ restaurant:{cal:240,prot:6,carb:28,fat:12}, home:{cal:210,prot:6,carb:25,fat:10} }
  },
  "boondi laddu": {
    display:"Boondi Laddu (1)",
    versions:{ restaurant:{cal:185,prot:3,carb:28,fat:6}, home:{cal:160,prot:3,carb:25,fat:4} }
  },

  /* ---------------- MODERN ITEMS ---------------- */
  "veg burger": {
    display:"Veg Burger",
    versions:{ restaurant:{cal:480,prot:10,carb:60,fat:20}, home:{cal:420,prot:10,carb:55,fat:16} }
  },
  "chicken burger": {
    display:"Chicken Burger",
    versions:{ restaurant:{cal:580,prot:22,carb:56,fat:26}, home:{cal:520,prot:22,carb:50,fat:22} }
  },
  "pizza veg slice": {
    display:"Veg Pizza (1 slice)",
    versions:{ restaurant:{cal:280,prot:10,carb:32,fat:12}, home:{cal:240,prot:9,carb:30,fat:8} }
  }
};


/* ============= MERGE INTO MAIN DATABASE ============= */

Object.keys(extendedFoods).forEach(k=>{
  foodDB[k.toLowerCase()] = extendedFoods[k];
});

console.log("🔥 foods_extended.js loaded — total foods now:", Object.keys(foodDB).length);
