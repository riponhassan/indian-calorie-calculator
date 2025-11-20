// =====================
// HassanChef – script.js
// Fully matched to index.html
// =====================

// Global totals
let totals = { cal: 0, prot: 0, carb: 0, fat: 0 };

// DOM references (ALL MATCH your HTML)
const searchEl = document.getElementById("search");
const qtyEl = document.getElementById("qty");
const unitEl = document.getElementById("unit");
const suggestionsEl = document.getElementById("suggestions");
const addBtn = document.getElementById("addBtn");
const listTable = document.querySelector("#list tbody");

const sumCalEl = document.getElementById("sumCal");
const sumProtEl = document.getElementById("sumProt");
const sumCarbEl = document.getElementById("sumCarb");
const sumFatEl  = document.getElementById("sumFat");
const servingsEl = document.getElementById("servings");

// Make lowercase keys for searching
const keys = Object.keys(foodDB).map(k => k.toLowerCase());

// ------------------------------------
// FIND BEST MATCHING FOOD (fuzzy)
// ------------------------------------
function findFood(key) {
  key = key.toLowerCase().trim();

  if (foodDB[key]) return key;

  // fuzzy search
  let found = keys.find(k => k.includes(key));
  return found || null;
}

// ------------------------------------
// SHOW SUGGESTIONS
// ------------------------------------
searchEl.addEventListener("input", () => {
  const val = searchEl.value.trim().toLowerCase();
  if (!val) {
    suggestionsEl.style.display = "none";
    return;
  }

  const results = keys.filter(k => k.includes(val)).slice(0, 12);

  if (!results.length) {
    suggestionsEl.style.display = "none";
    return;
  }

  suggestionsEl.innerHTML = results
    .map(k => `<button data-key="${k}">${foodDB[k].display}</button>`)
    .join("");

  suggestionsEl.style.display = "block";
});

// Click suggestion
suggestionsEl.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    let key = e.target.dataset.key;
    searchEl.value = foodDB[key].display;
    searchEl.dataset.key = key;
    suggestionsEl.style.display = "none";
  }
});

// Hide suggestions on outside click
document.addEventListener("click", e => {
  if (!suggestionsEl.contains(e.target) && e.target !== searchEl) {
    suggestionsEl.style.display = "none";
  }
});

// ------------------------------------
// ADD BUTTON → add selected item
// ------------------------------------
addBtn.addEventListener("click", () => {
  let typed = searchEl.value.trim();
  if (!typed) return alert("Please type or select a food.");

  let key = searchEl.dataset.key;
  if (!key) key = findFood(typed);

  if (!key) return alert("Food not found. Try selecting a suggestion.");

  let item = foodDB[key];

  // If it has versions → show popup
  if (item.versions) {
    showVersionPopup(key);
    return;
  }

  // If no versions → add directly
  addToList(key, item, qtyEl.value);
});

// ------------------------------------
// VERSION POPUP (dynamic)
// ------------------------------------
function showVersionPopup(key) {
  const item = foodDB[key];

  let popup = document.createElement("div");
  popup.id = "version-popup";
  popup.style.position = "fixed";
  popup.style.left = "0";
  popup.style.top = "0";
  popup.style.width = "100%";
  popup.style.height = "100%";
  popup.style.background = "rgba(0,0,0,0.5)";
  popup.style.display = "flex";
  popup.style.justifyContent = "center";
  popup.style.alignItems = "center";
  popup.style.zIndex = "5000";

  popup.innerHTML = `
    <div style="background:#fff;padding:20px;border-radius:12px;max-width:320px;width:90%;">
      <h3 style="margin-top:0;font-size:18px">${item.display}</h3>
      <p>Select version:</p>

      <button id="choose-rest"
        style="width:100%;padding:10px;margin-top:6px;border-radius:10px;background:#b76b6b;color:#fff;border:0;font-weight:700">
        🍽️ Restaurant Version
      </button>

      <button id="choose-home"
        style="width:100%;padding:10px;margin-top:6px;border-radius:10px;background:#fff;border:1px solid #ccc;font-weight:700">
        🏠 Home Version
      </button>

      <button id="close-popup"
        style="width:100%;padding:10px;margin-top:14px;border-radius:10px;background:#eee;border:0;font-weight:600">
        Cancel
      </button>
    </div>
  `;

  document.body.appendChild(popup);

  document.getElementById("close-popup").onclick = () => popup.remove();
  document.getElementById("choose-rest").onclick = () => {
    addToList(key, item.versions.restaurant, qtyEl.value);
    popup.remove();
  };
  document.getElementById("choose-home").onclick = () => {
    addToList(key, item.versions.home, qtyEl.value);
    popup.remove();
  };
}

// ------------------------------------
// ADD ROW TO LIST
// ------------------------------------
function addToList(key, data, qty = 1) {
  qty = parseFloat(qty);
  if (qty <= 0) qty = 1;

  let c = data.cal * qty;
  let p = data.prot * qty;
  let cb = data.carb * qty;
  let f = data.fat * qty;

  totals.cal += c;
  totals.prot += p;
  totals.carb += cb;
  totals.fat += f;

  updateSummary();

  let row = document.createElement("tr");
  row.innerHTML = `
    <td>${foodDB[key].display} <br><span class="small">${qty} × serving</span></td>
    <td>${c.toFixed(0)}</td>
    <td>${p.toFixed(1)}</td>
    <td>${cb.toFixed(1)}</td>
    <td>${f.toFixed(1)}</td>
    <td><button class="remove-btn">✕</button></td>
  `;

  row.querySelector(".remove-btn").onclick = () => {
    totals.cal -= c;
    totals.prot -= p;
    totals.carb -= cb;
    totals.fat -= f;
    updateSummary();
    row.remove();
  };

  listTable.appendChild(row);

  // Reset input
  searchEl.value = "";
  searchEl.dataset.key = "";
  qtyEl.value = 1;
}

// ------------------------------------
// UPDATE TOTAL SUMMARY
// ------------------------------------
function updateSummary() {
  let s = parseFloat(servingsEl.value) || 1;

  sumCalEl.textContent = (totals.cal / s).toFixed(0);
  sumProtEl.textContent = (totals.prot / s).toFixed(1);
  sumCarbEl.textContent = (totals.carb / s).toFixed(1);
  sumFatEl.textContent  = (totals.fat / s).toFixed(1);
}

servingsEl.addEventListener("input", updateSummary);

// ------------------------------------
// COPY SUMMARY
// ------------------------------------
document.getElementById("copySummary").addEventListener("click", () => {
  let txt = `
Per serving:
Calories: ${sumCalEl.textContent}
Protein: ${sumProtEl.textContent} g
Carbs: ${sumCarbEl.textContent} g
Fat: ${sumFatEl.textContent} g
  `;
  navigator.clipboard.writeText(txt.trim());
  alert("Summary copied!");
});
