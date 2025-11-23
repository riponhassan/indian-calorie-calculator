// generate_foods.js
// Run: node generate_foods.js
// Output: foods_mega.js (in same folder)

const fs = require('fs');
const path = require('path');

/*
  Basic approach:
  - seedList: core items (Indian + global)
  - templates: rules to create variants (100g, serving, restaurant/home)
  - aliases: add common alternative names (Hindi/short)
  - result: an object 'megaFoods' ready for Object.assign into foodDB
*/

const seedList = [
  // A compact seed of high-value items (extend as you like)
  { key: "butter chicken", display: "Butter Chicken", kcal: 650, prot: 38, carb: 10, fat: 44 },
  { key: "palak paneer 1 cup", display: "Palak Paneer (1 cup)", kcal: 420, prot: 18, carb: 10, fat: 30 },
  { key: "paneer 100g", display: "Paneer (100 g)", kcal: 320, prot: 18, carb: 6, fat: 26 },
  { key: "chicken biryani", display: "Chicken Biryani (1 plate)", kcal: 700, prot: 35, carb: 80, fat: 28 },
  { key: "white rice 100g", display: "Cooked White Rice (100 g)", kcal: 130, prot: 2.5, carb: 28, fat: 0.3 },
  { key: "roti", display: "Roti / Chapati (1 medium)", kcal: 100, prot: 3, carb: 16, fat: 2 },
  { key: "naan", display: "Naan (1 piece)", kcal: 260, prot: 7, carb: 45, fat: 5 },
  { key: "mcdonalds burger", display: "McDonald's Burger (1)", kcal: 290, prot: 15, carb: 30, fat: 12 },
  { key: "subway paneer 6inch", display: "Subway Paneer Tikka 6-inch", kcal: 420, prot: 18, carb: 54, fat: 12 },
  { key: "kfc zinger", display: "KFC Zinger Burger", kcal: 460, prot: 20, carb: 48, fat: 20 },
  { key: "pizza slice veg", display: "Veg Pizza (1 slice)", kcal: 220, prot: 8, carb: 28, fat: 8 },
  { key: "egg boiled 1", display: "Boiled Egg (1 large)", kcal: 78, prot: 6, carb: 0.6, fat: 5 }
  // extend seedList as you want...
];

// templates produce variants automatically
const templates = [
  // standard 100g variant
  { suffix: " 100g", scale: (base) => ({ kcal: Math.round(base.kcal * 100 / 150), prot: +(base.prot * 100/150).toFixed(1), carb: +(base.carb * 100/150).toFixed(1), fat: +(base.fat * 100/150).toFixed(1) }) },
  // serving variant (use base as "per serving" — keep same)
  { suffix: "", scale: (base) => ({ kcal: base.kcal, prot: base.prot, carb: base.carb, fat: base.fat }) },
  // half serving
  { suffix: " (1/2 serving)", scale: (base) => ({ kcal: Math.round(base.kcal*0.5), prot: +(base.prot*0.5).toFixed(1), carb: +(base.carb*0.5).toFixed(1), fat: +(base.fat*0.5).toFixed(1) }) },
  // double serving
  { suffix: " (2 servings)", scale: (base) => ({ kcal: Math.round(base.kcal*2), prot: +(base.prot*2).toFixed(1), carb: +(base.carb*2).toFixed(1), fat: +(base.fat*2).toFixed(1) }) },
];

// alias patterns (simple)
const aliasMap = {
  "roti": ["chapati", "phulka"],
  "butter chicken": ["murgh makhani", "murgh makhni"],
  "palak paneer 1 cup": ["palak paneer", "spinach paneer"],
  "white rice 100g": ["basmati 100g", "rice 100g"]
};

function cleanKey(s){ return s.toString().toLowerCase().replace(/\s+/g,' ').trim(); }

const mega = {};
const maxAutoPerSeed = templates.length * 3; // estimate

// helper to make versions (restaurant/home)
function makeVersions(entryObj){
  // entryObj: { kcal, prot, carb, fat }
  // restaurant tends to be richer (~+15-30% fat/kcal) — tuneable
  const home = { cal: entryObj.kcal, prot: round1(entryObj.prot), carb: round1(entryObj.carb), fat: round1(entryObj.fat) };
  const restaurant = {
    cal: Math.round(entryObj.kcal * 1.18),
    prot: round1(entryObj.prot * 1.05),
    carb: round1(entryObj.carb * 1.05),
    fat: round1(entryObj.fat * 1.25)
  };
  return { restaurant, home };
}

function round1(v){ return Math.round(v*10)/10; }

// Build entries
seedList.forEach(seed => {
  templates.forEach(t => {
    const keyBase = cleanKey(seed.key + t.suffix);
    const scaled = t.scale(seed);
    const versions = makeVersions(scaled);

    mega[keyBase] = {
      display: seed.display + (t.suffix ? " " + t.suffix : ""),
      versions
    };

    // also add simple gram-based keys if not duplicate
    if (!keyBase.includes("100g")) {
      const gramKey = cleanKey(seed.key + " 100g");
      if (!mega[gramKey]) {
        const s100 = templates.find(x=>x.suffix===" 100g");
        if (s100){
          const scaled100 = s100.scale(seed);
          mega[gramKey] = { display: seed.display + " (100 g)", versions: makeVersions(scaled100) };
        }
      }
    }

    // add aliases if present
    const aliases = aliasMap[seed.key];
    if (aliases && Array.isArray(aliases)){
      aliases.forEach(a=>{
        const ak = cleanKey(a + t.suffix);
        if (!mega[ak]) mega[ak] = { display: seed.display + (t.suffix ? " "+t.suffix : ""), versions };
      });
    }
  });
});

// Add some global staples automatically (looped generation)
const globalStarches = ["white rice","brown rice","spaghetti","penne pasta","quinoa"];
globalStarches.forEach(g=>{
  ["100g","1 cup","1 bowl"].forEach(portion=>{
    const k = cleanKey(`${g} ${portion}`);
    if (!mega[k]){
      // very rough estimates
      const base = { kcal: (g==="brown rice"? 111 : g==="quinoa"?120:130), prot: 2.5, carb: 27, fat: 0.5 };
      mega[k] = { display: `${capitalize(g)} (${portion})`, versions: makeVersions(base) };
    }
  })
});

// Merge any explicit items you want (extendable)
const explicit = {
  "mcdonalds fries small": { display: "McDonald's Fries (Small)", versions: { restaurant:{cal:230,prot:3,carb:29,fat:11}, home:{cal:230,prot:3,carb:29,fat:11} } },
  "coca cola can": { display: "Coca-Cola (330 ml)", versions: { restaurant:{cal:140,prot:0,carb:35,fat:0}, home:{cal:140,prot:0,carb:35,fat:0} } }
};
Object.keys(explicit).forEach(k=> mega[cleanKey(k)] = explicit[k]);

// final output wrapper - safe merging object
const output = `// foods_mega.js — generated by generate_foods.js\n(function(){\n  if (typeof foodDB === 'undefined') { console.warn('Warning: foods.js not loaded (base). mega will still define megaFoods global.'); }\n  const megaFoods = ${JSON.stringify(mega, null, 2)};\n  if (typeof foodDB !== 'undefined') Object.assign(foodDB, megaFoods);\n  if (typeof window !== 'undefined') window.megaFoods = megaFoods;\n})();\n`;

// write file
const outPath = path.join(__dirname, 'foods_mega.js');
fs.writeFileSync(outPath, output, 'utf8');
console.log('✅ foods_mega.js written — items:', Object.keys(mega).length);

function capitalize(s){ return s.charAt(0).toUpperCase() + s.slice(1); }
