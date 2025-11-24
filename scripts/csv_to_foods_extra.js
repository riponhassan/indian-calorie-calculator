// scripts/csv_to_foods_extra.js
const fs = require('fs');
const csv = require('csv-parse/lib/sync'); // npm i csv-parse (if running locally)

const csvPath = 'data/indian_restaurant_500_items.csv';
const outPath = 'data/foods_extra.json';

const raw = fs.readFileSync(csvPath, 'utf8');
const rows = csv(raw, { columns: true, skip_empty_lines: true });

const out = rows.map(r => {
  // normalise keys (depending on your CSV headings)
  return {
    name: r.name || r.Name || `${r.category} ${r.name}`,
    unit: r.unit || 'serving',
    versions: {
      home: {
        cal: Number(r.cal) || Number(r.cal_home) || 0,
        prot: Number(r.protein) || Number(r.prot) || 0,
        carb: Number(r.carbs) || Number(r.carb) || 0,
        fat: Number(r.fat) || 0
      },
      restaurant: {
        cal: Number(r.cal_restaurant) || Number(r.cal) || 0,
        prot: Number(r.protein) || Number(r.prot) || 0,
        carb: Number(r.carbs) || Number(r.carb) || 0,
        fat: Number(r.fat) || 0
      }
    }
  };
});

fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
console.log('Wrote', out.length, 'items to', outPath);
