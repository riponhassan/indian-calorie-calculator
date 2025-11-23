// script.js — HassanChef Calculator (robust single-file loader + UI)
// Drop this into your repo and reload index.html

document.addEventListener('DOMContentLoaded', async () => {

  // --- UI references ---
  const searchInput = document.getElementById('search');
  const suggestionsBox = document.getElementById('suggestions');
  const qtyInput = document.getElementById('qty');
  const unitSelect = document.getElementById('unit');
  const addBtn = document.getElementById('addBtn');
  const tableBody = document.querySelector('#list tbody');
  const servingsInput = document.getElementById('servings');
  const sumCalEl = document.getElementById('sumCal');
  const sumProtEl = document.getElementById('sumProt');
  const sumCarbEl = document.getElementById('sumCarb');
  const sumFatEl = document.getElementById('sumFat');
  const summaryEl = document.getElementById('summary');

  // --- state ---
  let allFoods = [];        // standardized array: { name, unit, home:{cal,prot,carb,fat}, restaurant:{...} }
  let mode = 'home';        // 'home' or 'restaurant'
  let selectedFood = null;  // last suggestion clicked

  // --- helpers: normalize different JSON shapes into canonical object ---
  function normalizeItem(item) {
    // item can be:
    // { name, unit?, home: {cal,prot,carb,fat}, restaurant: {...} }
    // OR { name, unit, versions: { home: {...}, restaurant: {...} } }
    const name = item.name || item.display || item.title || '';
    const unit = item.unit || item.servingUnit || 'serving';

    // pick home & restaurant from either place
    const home = (item.home) ? item.home :
                 (item.versions && item.versions.home) ? item.versions.home :
                 (item.versions && item.versions['home']) ? item.versions['home'] : null;

    const restaurant = (item.restaurant) ? item.restaurant :
                 (item.versions && item.versions.restaurant) ? item.versions.restaurant :
                 (item.versions && item.versions['restaurant']) ? item.versions['restaurant'] : null;

    // fallback simple fields if present (calories/protein etc directly on item)
    const fallbackHome = {
      cal: item.calories ?? item.cal ?? (item.home && item.home.cal) ?? null,
      prot: item.protein ?? item.prot ?? (item.home && item.home.prot) ?? null,
      carb: item.carbs ?? item.carb ?? (item.home && item.home.carb) ?? null,
      fat: item.fat ?? (item.home && item.home.fat) ?? null
    };

    const finalHome = home || (fallbackHome.cal !== null ? fallbackHome : null);

    const fallbackRes = {
      cal: item.restaurantCalories ?? item.restaurantCal ?? (item.restaurant && item.restaurant.cal) ?? null
    };

    const finalRestaurant = restaurant || null;

    return {
      name: String(name).trim(),
      unit: unit,
      home: finalHome,
      restaurant: finalRestaurant
    };
  }

  // --- load foods: try in-page var, then foods.json ---
  async function loadFoods() {
    try {
      // 1) if the page already has a global foods array / variable
      if (typeof foods !== 'undefined' && Array.isArray(foods)) {
        allFoods = foods.map(normalizeItem).filter(i => i.name);
        console.log("Loaded foods from global `foods` variable:", allFoods.length);
        return;
      }

      // 2) try fetch foods.json
      const res = await fetch('foods.json', { cache: "no-store" });
      if (!res.ok) throw new Error('foods.json not found or fetch failed');
      const data = await res.json();

      // data may be an array or an object map
      if (Array.isArray(data)) {
        allFoods = data.map(normalizeItem).filter(i => i.name);
      } else if (typeof data === 'object' && data !== null) {
        // object of keyed entries (map) => convert to array
        allFoods = Object.keys(data).map(k => {
          const v = data[k];
          // accept formats where "name" absent - use key
          if (!v.name) v.name = k;
          return normalizeItem(v);
        }).filter(i => i.name);
      } else {
        throw new Error('Unknown foods.json format');
      }

      console.log(`Chef's Kitchen Ready: ${allFoods.length} ingredients loaded.`);
    } catch (err) {
      console.error("Error loading foods.json (falling back to small default):", err);
      // minimal fallback if nothing loaded
      allFoods = [
        { name: "Apple (1 medium)", unit: "serving", home: { cal:95, prot:0.5, carb:25, fat:0.3 }, restaurant: null },
        { name: "Banana (1 medium)", unit: "serving", home: { cal:105, prot:1.3, carb:27, fat:0.4 }, restaurant: null }
      ];
    }
  }

  // --- set display mode (home / restaurant) and refresh any UI text if needed ---
  window.setModeHome = function() { mode = 'home'; document.querySelectorAll('.btn-ghost').forEach(b => b.classList.remove('active-mode')); /* optional UI */ console.log('Mode set to HOME'); }
  window.setModeRestaurant = function() { mode = 'restaurant'; document.querySelectorAll('.btn-ghost').forEach(b => b.classList.remove('active-mode')); console.log('Mode set to RESTAURANT'); }

  // --- suggestion UI ---
  function clearSuggestions() {
    suggestionsBox.innerHTML = '';
    suggestionsBox.style.display = 'none';
  }

  function showSuggestionBtn(food) {
    const btn = document.createElement('button');
    btn.type = "button";

    // Determine displayed numbers based on current mode (fallback to home if restaurant missing)
    const vals = (mode === 'restaurant' && food.restaurant) ? food.restaurant : food.home || food.restaurant || {};
    const displayCal = vals.cal ?? (vals.calories ?? '—');

    // friendly label
    const unitTag = (food.unit === 'g' || food.unit === 'ml') ? food.unit : 'serving';
    btn.innerText = `${food.name} — ${displayCal} kcal / ${unitTag}`;

    btn.onclick = () => {
      // Save selected food snapshot (we'll use raw object for add)
      selectedFood = food;
      suggestionsBox.style.display = 'none';
      searchInput.value = food.name;

      // heuristics for default qty/unit
      if (food.unit === 'g') {
        unitSelect.value = 'g';
        qtyInput.value = 100;
      } else {
        unitSelect.value = 'serving';
        qtyInput.value = 1;
      }

      // focus qty
      qtyInput.focus();
    };

    suggestionsBox.appendChild(btn);
  }

  // --- search logic ---
  function searchFood(q) {
    suggestionsBox.innerHTML = '';
    if (!q || q.trim().length < 2) {
      clearSuggestions();
      return;
    }
    const lowerQ = q.toLowerCase();
    let count = 0;
    for (const f of allFoods) {
      if (count >= 50) break;
      if (!f.name) continue;
      const ln = f.name.toLowerCase();
      if (ln.includes(lowerQ) || lowerQ.split(' ').every(t => ln.includes(t))) {
        showSuggestionBtn(f);
        count++;
      }
    }
    suggestionsBox.style.display = count ? 'block' : 'none';
  }

  // --- convert a standardized item to numeric fields based on chosen mode ---
  function valuesForMode(food) {
    const src = (mode === 'restaurant' && food.restaurant) ? food.restaurant : (food.home || food.restaurant || {});
    // expected keys: cal, prot, carb, fat OR calories, protein, carbs, fat
    const cal = src.cal ?? src.calories ?? 0;
    const prot = src.prot ?? src.protein ?? 0;
    const carb = src.carb ?? src.carbs ?? 0;
    const fat = src.fat ?? 0;
    return { cal: Number(cal), prot: Number(prot), carb: Number(carb), fat: Number(fat) };
  }

  // --- add to table ---
  function addToTableByObject(foodObj) {
    if (!foodObj) {
      alert('Please choose a food from suggestions first');
      return;
    }
    const qty = parseFloat(qtyInput.value) || 1;
    const unit = unitSelect.value || 'serving';

    const vals = valuesForMode(foodObj);

    // multiplier logic:
    // if unit === 'g' and stored values are per 100 g -> multiplier = qty / 100
    // We'll assume 'g' foods in foods.json are per 100g
    let multiplier = qty;
    if (unit === 'g') multiplier = qty / 100;

    const totalCal = Math.round(vals.cal * multiplier);
    const totalProt = (vals.prot * multiplier).toFixed(1);
    const totalCarb = (vals.carb * multiplier).toFixed(1);
    const totalFat = (vals.fat * multiplier).toFixed(1);

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${foodObj.name} <br><small class="muted">${qty}${unit === 'serving' ? '' : ' ' + unit}</small></td>
      <td>${totalCal}</td>
      <td>${totalProt}</td>
      <td>${totalCarb}</td>
      <td>${totalFat}</td>
      <td><button class="remove-btn" type="button">❌</button></td>
    `;
    // remove handler
    row.querySelector('.remove-btn').addEventListener('click', () => {
      row.remove();
      updateTotal();
    });

    tableBody.appendChild(row);
    updateTotal();

    // reset selection
    selectedFood = null;
    searchInput.value = '';
    clearSuggestions();
    qtyInput.value = '1';
    unitSelect.value = 'serving';
  }

  // --- totals ---
  function updateTotal() {
    let c = 0, p = 0, carb = 0, f = 0;
    document.querySelectorAll('#list tbody tr').forEach(row => {
      const cols = row.querySelectorAll('td');
      if (!cols || cols.length < 5) return;
      c += parseFloat(cols[1].innerText) || 0;
      p += parseFloat(cols[2].innerText) || 0;
      carb += parseFloat(cols[3].innerText) || 0;
      f += parseFloat(cols[4].innerText) || 0;
    });
    sumCalEl.innerText = Math.round(c);
    sumProtEl.innerText = p.toFixed(1);
    sumCarbEl.innerText = carb.toFixed(1);
    sumFatEl.innerText = f.toFixed(1);
    summaryEl.innerText = `${Math.round(c)} kcal`;
  }

  // --- event listeners ---
  searchInput.addEventListener('input', (e) => searchFood(e.target.value));
  searchInput.addEventListener('focus', (e) => {
    if (e.target.value && e.target.value.length >= 2) searchFood(e.target.value);
  });

  // clicking outside hides suggestions
  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
      clearSuggestions();
    }
  });

  // Add button uses selectedFood or tries to match typed text
  addBtn.addEventListener('click', () => {
    if (selectedFood) {
      addToTableByObject(selectedFood);
      return;
    }
    // fallback: try to find food by exact name typed
    const typed = (searchInput.value || '').trim().toLowerCase();
    if (!typed) return alert('Please type or choose an ingredient');
    const found = allFoods.find(f => f.name.toLowerCase() === typed);
    if (found) {
      addToTableByObject(found);
    } else {
      // If not found, ask user to add custom calorie quickly
      const customCal = prompt(`"${searchInput.value}" not found. Enter kcal value for one serving (or Cancel):`);
      if (customCal !== null && !isNaN(Number(customCal))) {
        const custom = {
          name: searchInput.value,
          unit: 'serving',
          home: { cal: Number(customCal), prot: 0, carb: 0, fat: 0 },
          restaurant: null
        };
        addToTableByObject(custom);
      }
    }
  });

  // keyboard: Enter on search tries add
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addBtn.click();
    }
  });

  // quick mode functions exposed globally (index.html uses these)
  window.setModeHome = function() { mode = 'home'; console.log('Mode switched: HOME'); /* optionally change UI */ }
  window.setModeRestaurant = function() { mode = 'restaurant'; console.log('Mode switched: RESTAURANT'); }

  // Paste ingredients (bulk) — optional simple flow
  const pasteBtn = document.getElementById('pasteBtn');
  if (pasteBtn) {
    pasteBtn.addEventListener('click', async () => {
      const text = prompt('Paste items (one per line). Format: name | qty | unit (optional). Example: "Rice, White (100g cooked) | 200 | g"');
      if (!text) return;
      const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
      for (const line of lines) {
        const parts = line.split('|').map(p => p.trim());
        const name = parts[0];
        let qty = parts[1] ? parseFloat(parts[1]) : 1;
        let unit = parts[2] || 'serving';
        // find matching food
        const found = allFoods.find(f => f.name.toLowerCase() === name.toLowerCase());
        if (found) {
          // set UI fields temporarily and add
          selectedFood = found;
          qtyInput.value = qty || 1;
          unitSelect.value = unit;
          addToTableByObject(found);
        } else {
          // ask for kcal
          const kc = prompt(`${name} not found. Enter kcal for the qty specified:`);
          if (kc !== null && !isNaN(Number(kc))) {
            const custom = { name, unit, home: { cal: Number(kc), prot:0, carb:0, fat:0 } };
            addToTableByObject(custom);
          }
        }
      }
    });
  }

  // --- initialize ---
  await loadFoods();

  // Pre-fill search suggestions count to help debugging
  console.log("Ready — type in the search box. Foods loaded:", allFoods.length);

  // Expose for debugging from console
  window.__hc_allFoods = allFoods;
  window.__hc_mode = () => mode;

}); // DOMContentLoaded end

