/* ---- Version choice integration (Option C) ----
   Usage:
   - call openVersionChoiceAndAdd(foodKey, qty, unit) when user selects an item from autocomplete
   - this will show a small modal / prompt to pick 'restaurant' or 'home'
   - then it calls addFoodToList(foodKey, chosenVersion, qty, unit)
*/

/* Simple modal using basic DOM (mobile-friendly). Create once. */
function ensureVersionModalExists() {
  if (document.getElementById('hc-version-modal')) return;
  const modal = document.createElement('div');
  modal.id = 'hc-version-modal';
  modal.style.position = 'fixed';
  modal.style.left = '12px';
  modal.style.right = '12px';
  modal.style.bottom = '12px';
  modal.style.zIndex = '9999';
  modal.style.background = '#fff';
  modal.style.border = '1px solid #e0e0e0';
  modal.style.borderRadius = '12px';
  modal.style.boxShadow = '0 6px 24px rgba(0,0,0,0.12)';
  modal.style.padding = '12px';
  modal.style.display = 'none';
  modal.style.fontFamily = 'sans-serif';
  modal.innerHTML = `
    <div style="font-weight:700; margin-bottom:8px;" id="hc-version-title"></div>
    <div style="display:flex; gap:8px; margin-bottom:10px; flex-wrap:wrap;">
      <button id="hc-version-restaurant" style="flex:1; padding:10px; border-radius:8px; border:1px solid #b56565; background:#b56565; color:#fff;">Restaurant</button>
      <button id="hc-version-home" style="flex:1; padding:10px; border-radius:8px; border:1px solid #e0e0e0; background:#fff;">Home</button>
    </div>
    <div style="display:flex; gap:8px; justify-content:flex-end;">
      <button id="hc-version-cancel" style="padding:8px 10px; border-radius:8px; border:1px solid #ccc; background:#fff;">Cancel</button>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById('hc-version-restaurant').addEventListener('click', () => {
    const data = modal._hcData;
    modal.style.display = 'none';
    addFoodToList(data.key, 'restaurant', data.qty, data.unit);
  });
  document.getElementById('hc-version-home').addEventListener('click', () => {
    const data = modal._hcData;
    modal.style.display = 'none';
    addFoodToList(data.key, 'home', data.qty, data.unit);
  });
  document.getElementById('hc-version-cancel').addEventListener('click', () => {
    modal.style.display = 'none';
  });
}

/* Call this when user picks an item from autocomplete */
function openVersionChoiceAndAdd(foodKey, qty = 1, unit = 'serving') {
  ensureVersionModalExists();
  const modal = document.getElementById('hc-version-modal');
  const title = document.getElementById('hc-version-title');
  const key = foodKey.toLowerCase();
  if (!foodDB[key]) {
    // fallback: try exact casing
    const found = Object.keys(foodDB).find(k => k.toLowerCase() === key);
    if (found) foodKey = found;
  }
  const display = foodDB[foodKey] ? foodDB[foodKey].display : foodKey;
  title.textContent = `Add "${display}" — choose version`;
  modal._hcData = { key: foodKey, qty, unit };
  modal.style.display = 'block';
}

/* Example addFoodToList function — adapt to your table logic.
   This should: create table row, update totals, store to localStorage if you do that.
*/
function addFoodToList(foodKey, version, qty = 1, unit = 'serving') {
  if (!foodDB[foodKey]) {
    // try lowercase
    const found = Object.keys(foodDB).find(k => k.toLowerCase() === foodKey.toLowerCase());
    if (found) foodKey = found;
    else {
      alert('Item not found in database: ' + foodKey);
      return;
    }
  }

  const obj = foodDB[foodKey];
  const v = obj.versions && obj.versions[version] ? obj.versions[version] : null;
  if (!v) {
    alert('Version not found for ' + foodKey);
    return;
  }

  // Calculate totals for the quantity
  const qtyNum = Number(qty) || 1;
  const cal = (v.cal || 0) * qtyNum;
  const prot = (v.prot || 0) * qtyNum;
  const carb = (v.carb || 0) * qtyNum;
  const fat = (v.fat || 0) * qtyNum;
  const fiber = (v.fiber || 0) * qtyNum;

  // Insert row in table with id="list" tbody
  const tbody = document.querySelector('#list tbody');
  if (!tbody) {
    console.warn('Table tbody #list not found. Make sure table id="list" exists.');
    return;
  }

  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${obj.display} <small style="color:#666">(${version})</small></td>
    <td>${cal.toFixed(0)}</td>
    <td>${prot.toFixed(1)}</td>
    <td>${carb.toFixed(1)}</td>
    <td>${fat.toFixed(1)}</td>
    <td>${fiber ? fiber.toFixed(1) : '-'}</td>
    <td><button class="hc-remove-row" style="padding:6px;border-radius:6px;background:#f3dede;border:1px solid #e0b8b8">Remove</button></td>
  `;
  tbody.appendChild(tr);

  // Remove button logic
  tr.querySelector('.hc-remove-row').addEventListener('click', () => {
    tr.remove();
    recalcTotals();
  });

  // Recalculate totals
  recalcTotals();
}

/* Example recalcTotals function: sum table rows and show in #summary */
function recalcTotals() {
  const rows = document.querySelectorAll('#list tbody tr');
  let cal = 0, prot = 0, carb = 0, fat = 0, fiber = 0;
  rows.forEach(r => {
    const cells = r.querySelectorAll('td');
    // cells[1] = cal, [2]=prot, [3]=carb, [4]=fat, [5]=fiber
    cal += Number(cells[1].textContent) || 0;
    prot += Number(cells[2].textContent) || 0;
    carb += Number(cells[3].textContent) || 0;
    fat += Number(cells[4].textContent) || 0;
    const f = Number(cells[5].textContent);
    if (!isNaN(f)) fiber += f;
  });
  // Update summary DOM; keep device-friendly formatting
  const summary = document.getElementById('summary');
  if (summary) summary.innerHTML = `${cal.toFixed(0)} kcal • P ${prot.toFixed(1)}g • C ${carb.toFixed(1)}g • F ${fat.toFixed(1)}g • Fib ${fiber ? fiber.toFixed(1) + 'g' : '-'}`;
}

/* Hook: If your autocomplete currently calls addItem(key) directly,
   replace the call with openVersionChoiceAndAdd(key, qty, unit)
   so the user sees the popup and picks restaurant/home.
*/

/* Ensure modal present on load */
document.addEventListener('DOMContentLoaded', () => {
  ensureVersionModalExists();
});
