/**************************************************
 HASSAN CHEF — CLEANED & STABLE script.js
 - single loadFoods()
 - suggestion selection flow
 - mode popup works via global setMode()
**************************************************/

let allFoods = [];
let mode = "home"; // default
let selectedFood = null; // last chosen suggestion

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const suggestionsBox = document.getElementById("suggestions");
  const qtyInput = document.getElementById("qty");
  const unitSelect = document.getElementById("unit");
  const addBtn = document.getElementById("addBtn");
  const tableBody = document.querySelector("#list tbody");
  const modeBtn = document.getElementById("modeBtn");

  // show mode popup
  if (modeBtn) {
    modeBtn.onclick = () => {
      const popup = document.getElementById("modePopup");
      if (popup) popup.style.display = "flex";
    };
  }

  // ----- SEARCH -----
  function searchFood(q) {
    suggestionsBox.innerHTML = "";
    selectedFood = null;

    if (!q || q.trim().length < 2) {
      suggestionsBox.style.display = "none";
      return;
    }

    const query = q.toLowerCase();
    const found = allFoods.filter(item => item.name.toLowerCase().includes(query));

    // show up to 40
    found.slice(0, 40).forEach(food => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.innerText = food.name;
      btn.onclick = () => {
        // when user clicks suggestion: select item
        selectedFood = food;
        searchInput.value = food.name;
        // set sensible defaults
        unitSelect.value = food.unit || "serving";
        qtyInput.value = (food.unit === "g") ? 100 : 1;
        suggestionsBox.style.display = "none";
      };
      suggestionsBox.appendChild(btn);
    });

    suggestionsBox.style.display = found.length ? "block" : "none";
  }

  // ----- ADD (when Add button clicked) -----
  function addSelectedOrFind() {
    // If user selected a suggestion, add that
    if (selectedFood) {
      addToList(selectedFood);
      selectedFood = null;
      return;
    }

    // Otherwise try to find exact match from input text
    const text = (searchInput.value || "").trim();
    if (!text) return alert("Type or choose an ingredient first.");

    const match = allFoods.find(f => f.name.toLowerCase() === text.toLowerCase());
    if (match) {
      addToList(match);
      return;
    }

    // Try fuzzy first-match
    const fuzzy = allFoods.find(f => f.name.toLowerCase().includes(text.toLowerCase()));
    if (fuzzy) {
      addToList(fuzzy);
      return;
    }

    alert("No matching food found. Try typing a broader name (e.g., 'paneer', 'roti').");
  }

  // ----- ADD ROW -----
  function addToList(food) {
    const qty = Number(qtyInput.value) || 1;
    let multiplier = qty;

    if (unitSelect.value === "g" && food.unit === "g") {
      multiplier = qty / 100;
    }

    // support both shapes: item.versions.home OR legacy item.home
    const versions = food.versions || {};
    const values = versions[mode] || food[mode] || { cal: 0, prot: 0, carb: 0, fat: 0 };

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${food.name}<br><small>${mode.toUpperCase()}</small></td>
      <td>${Math.round((values.cal || 0) * multiplier)}</td>
      <td>${((values.prot || 0) * multiplier).toFixed(1)}</td>
      <td>${((values.carb || 0) * multiplier).toFixed(1)}</td>
      <td>${((values.fat || 0) * multiplier).toFixed(1)}</td>
      <td><button class="remove-btn">❌</button></td>
    `;

    row.querySelector(".remove-btn").onclick = () => {
      row.remove();
      updateTotals();
    };

    tableBody.appendChild(row);
    updateTotals();

    // reset search box (user can add more)
    searchInput.value = "";
    selectedFood = null;
    suggestionsBox.innerHTML = "";
    suggestionsBox.style.display = "none";
  }

  // ----- TOTALS -----
  function updateTotals() {
    let c = 0, p = 0, cr = 0, f = 0;
    document.querySelectorAll("#list tbody tr").forEach(r => {
      const t = r.querySelectorAll("td");
      c += Number(t[1].innerText) || 0;
      p += Number(t[2].innerText) || 0;
      cr += Number(t[3].innerText) || 0;
      f += Number(t[4].innerText) || 0;
    });

    document.getElementById("sumCal").innerText = Math.round(c);
    document.getElementById("sumProt").innerText = p.toFixed(1);
    document.getElementById("sumCarb").innerText = cr.toFixed(1);
    document.getElementById("sumFat").innerText = f.toFixed(1);
    document.getElementById("summary").innerText = Math.round(c) + " kcal";
  }

  // ----- EVENT BINDINGS -----
  if (searchInput) {
    searchInput.addEventListener("input", e => searchFood(e.target.value));
  }

  document.addEventListener("click", e => {
    // close suggestions if click outside search or suggestions
    if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
      suggestionsBox.style.display = "none";
    }
  });

  if (addBtn) addBtn.addEventListener("click", addSelectedOrFind);

  // ----- LOAD FOODS (single, reliable) -----
  async function loadFoods() {
    try {
      const baseRes = await fetch("foods.json");
      const base = await baseRes.json();

      // optionally load an extra file (created by your CSV->JSON script)
      let extra = [];
      try {
        const x = await fetch("data/foods_extra.json");
        if (x.ok) extra = await x.json();
      } catch (err) {
        // no extra file is ok
        console.log("No foods_extra.json (optional) — continuing with base list.");
      }

      // normalize each item to have .unit and .versions.home / .versions.restaurant
      const normalize = (item) => {
        const versions = item.versions || {};
        // support legacy top-level home / restaurant keys too
        if (!versions.home && item.home) versions.home = item.home;
        if (!versions.restaurant && item.restaurant) versions.restaurant = item.restaurant;

        return {
          name: item.name,
          unit: item.unit || "serving",
          versions: {
            home: versions.home || { cal: 0, prot: 0, carb: 0, fat: 0 },
            restaurant: versions.restaurant || { cal: 0, prot: 0, carb: 0, fat: 0 }
          }
        };
      };

      allFoods = [...base.map(normalize), ...extra.map(normalize)];
      console.log("Chef’s Kitchen Ready:", allFoods.length, "items");
    } catch (err) {
      console.error("FAILED to load foods.json", err);
    }
  }

  // initial load
  loadFoods();
}); // DOMContentLoaded end

// ----- global function for inline popup buttons in index.html -----
function setMode(m) {
  mode = m;
  // user feedback and hide popup
  alert("✔ Mode set to " + (m === "home" ? "HOME" : "RESTAURANT"));
  const popup = document.getElementById("modePopup");
  if (popup) popup.style.display = "none";
}
