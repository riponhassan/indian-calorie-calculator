// =====================
// GLOBAL STATE
// =====================
let selectedFoodKey = null;
let selectedQty = 1;
let selectedUnit = 'serving';

let totals = {
  cal: 0,
  prot: 0,
  carb: 0,
  fat: 0,
  fiber: 0
};

// =====================
// DOM ELEMENTS
// =====================
const searchEl = document.getElementById('search');
const qtyEl = document.getElementById('qty');
const unitEl = document.getElementById('unit');
const suggestionsEl = document.getElementById('suggestions');
const addBtn = document.getElementById('addBtn');
const versionModal = document.getElementById('versionModal');
const versionBtns = document.querySelectorAll('.version-choice-btn');


// =====================
// HELPER: FIND BEST MATCH IN foodDB
// =====================
function findFoodKey(raw) {
  if (!raw) return null;

  const val = raw.trim().toLowerCase();
  const keys = Object.keys(foodDB);

  // exact
  let k = keys.find(x => x.toLowerCase() === val);
  if (k) return k;

  // starts-with
  k = keys.find(x => x.toLowerCase().startsWith(val));
  if (k) return k;

  // includes
  k = keys.find(x => x.toLowerCase().includes(val));
  return k || null;
}


// =====================
// AUTOCOMPLETE / LIVE SEARCH
// =====================
searchEl.addEventListener('input', function () {
  const query = this.value.toLowerCase();
  suggestionsEl.innerHTML = "";

  if (!query) return;

  const results = Object.keys(foodDB)
    .filter(k => k.toLowerCase().includes(query))
    .slice(0, 40); // limit 40 for performance

  results.forEach(key => {
    const btn = document.createElement("button");
    btn.className = "suggestion-item";
    btn.setAttribute("data-food", key);
    btn.textContent = foodDB[key].name;
    suggestionsEl.appendChild(btn);
  });
});


// =====================
// CLICK ON SUGGESTION → OPEN VERSION MODAL
// =====================
document.addEventListener("click", function (e) {
  const btn = e.target.closest(".suggestion-item");
  if (!btn) return;

  const key = btn.getAttribute("data-food");
  const qty = parseFloat(qtyEl.value) || 1;
  const unit = unitEl.value || "serving";

  openVersionChoiceAndAdd(key, qty, unit);
});


// =====================
// CLICK "ADD" BUTTON → OPEN VERSION MODAL
// =====================
addBtn.addEventListener("click", function () {
  const raw = searchEl.value.trim();
  if (!raw) {
    alert("Please type a food name first.");
    searchEl.focus();
    return;
  }

  const key = findFoodKey(raw);
  if (!key) {
    alert("Item not found. Please try again.");
    return;
  }

  const qty = parseFloat(qtyEl.value) || 1;
  const unit = unitEl.value || "serving";

  openVersionChoiceAndAdd(key, qty, unit);
});


// =====================
// OPEN VERSION MODAL
// =====================
function openVersionChoiceAndAdd(key, qty, unit) {
  selectedFoodKey = key;
  selectedQty = qty;
  selectedUnit = unit;

  versionModal.classList.add("active");
}


// =====================
// CHOOSE HOME / RESTAURANT VERSION
// =====================
versionBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    const version = this.getAttribute("data-version");
    addFoodToList(selectedFoodKey, version, selectedQty, selectedUnit);
    versionModal.classList.remove("active");
  });
});


// =====================
// ADD SELECTED FOOD TO TABLE
// =====================
function addFoodToList(key, version, qty, unit) {
  const item = foodDB[key][version];
  if (!item) {
    alert("Version data missing for: " + key);
    return;
  }

  const calories = Math.round(item.cal * qty);
  const protein = (item.prot * qty).toFixed(1);
  const carbs = (item.carb * qty).toFixed(1);
  const fats = (item.fat * qty).toFixed(1);
  const fiber = (item.fiber * qty).toFixed(1);

  // update totals
  totals.cal += calories;
  totals.prot += parseFloat(protein);
  totals.carb += parseFloat(carbs);
  totals.fat += parseFloat(fats);
  totals.fiber += parseFloat(fiber);

  updateTotalsUI();

  // append to list
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><strong>${foodDB[key].name}</strong><br>
      <small>${version} • ${qty} × ${unit}</small>
    </td>
    <td>${calories}</td>
    <td>${protein}</td>
    <td>${carbs}</td>
    <td>${fats}</td>
    <td>${fiber}</td>
    <td><button class="remove-btn">×</button></td>
  `;

  document.querySelector("#foodList tbody").appendChild(row);

  // remove row listener
  row.querySelector(".remove-btn").addEventListener("click", function () {
    row.remove();
    totals.cal -= calories;
    totals.prot -= parseFloat(protein);
    totals.carb -= parseFloat(carbs);
    totals.fat -= parseFloat(fats);
    totals.fiber -= parseFloat(fiber);
    updateTotalsUI();
  });

  // clear search
  searchEl.value = "";
  suggestionsEl.innerHTML = "";
}


// =====================
// UPDATE TOTALS IN UI
// =====================
function updateTotalsUI() {
  document.getElementById("tCal").textContent = totals.cal;
  document.getElementById("tProt").textContent = totals.prot.toFixed(1);
  document.getElementById("tCarb").textContent = totals.carb.toFixed(1);
  document.getElementById("tFat").textContent = totals.fat.toFixed(1);
  document.getElementById("tFiber").textContent = totals.fiber.toFixed(1);
}


// =====================
// CLOSE MODAL (if clicking background)
// =====================
versionModal.addEventListener("click", function (e) {
  if (e.target === versionModal) {
    versionModal.classList.remove("active");
  }
});
