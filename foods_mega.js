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
