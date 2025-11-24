/**************************************************
 HASSAN CHEF — CLEANED & STABLE script.js
**************************************************/

let allFoods = [];
let mode = "home"; // default
let selectedFood = null;

document.addEventListener("DOMContentLoaded", () => {

  const searchInput = document.getElementById("search");
  const suggestionsBox = document.getElementById("suggestions");
  const qtyInput = document.getElementById("qty");
  const unitSelect = document.getElementById("unit");
  const addBtn = document.getElementById("addBtn");
  const tableBody = document.querySelector("#list tbody");

  /* -----------------------------------------
     MODE POPUP
  ------------------------------------------ */
  document.getElementById("modeBtn").onclick = () => {
    document.getElementById("modePopup").style.display = "flex";
  };

  /* -----------------------------------------
     SEARCH
  ------------------------------------------ */
  function searchFood(q) {
    suggestionsBox.innerHTML = "";
    selectedFood = null;

    if (!q || q.trim().length < 2) {
      suggestionsBox.style.display = "none";
      return;
    }

    const query = q.toLowerCase();
    const found = allFoods.filter(f =>
      f.name.toLowerCase().includes(query)
    );

    found.slice(0, 40).forEach(food => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.innerText = food.name;

      btn.onclick = () => {
        selectedFood = food;
        searchInput.value = food.name;
        unitSelect.value = food.unit;
        qtyInput.value = (food.unit === "g") ? 100 : 1;
        suggestionsBox.style.display = "none";
      };

      suggestionsBox.appendChild(btn);
    });

    suggestionsBox.style.display = found.length ? "block" : "none";
  }

  /* -----------------------------------------
     ADD BUTTON
  ------------------------------------------ */
  function addSelectedOrFind() {

    if (selectedFood) {
      addToList(selectedFood);
      resetSearch();
      return;
    }

    const text = searchInput.value.trim();
    if (!text) return alert("Type or choose an ingredient first.");

    let match = allFoods.find(f => f.name.toLowerCase() === text.toLowerCase());
    if (!match) match = allFoods.find(f => f.name.toLowerCase().includes(text.toLowerCase()));

    if (!match) return alert("No matching food found.");

    addToList(match);
    resetSearch();
  }

  /* -----------------------------------------
     ADD ROW TO TABLE
  ------------------------------------------ */
  function addToList(food) {
    const qty = Number(qtyInput.value) || 1;
    let mult = qty;

    if (unitSelect.value === "g" && food.unit === "g") {
      mult = qty / 100;
    }

    const val = food.versions[mode];

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${food.name}<br><small>${mode}</small></td>
      <td>${Math.round(val.cal * mult)}</td>
      <td>${(val.prot * mult).toFixed(1)}</td>
      <td>${(val.carb * mult).toFixed(1)}</td>
      <td>${(val.fat * mult).toFixed(1)}</td>
      <td><button class="remove-btn">❌</button></td>
    `;

    row.querySelector(".remove-btn").onclick = () => {
      row.remove();
      updateTotals();
    };

    tableBody.appendChild(row);
    updateTotals();
  }

  /* -----------------------------------------
     RESET SEARCH FIELD
  ------------------------------------------ */
  function resetSearch() {
    searchInput.value = "";
    selectedFood = null;
    suggestionsBox.innerHTML = "";
    suggestionsBox.style.display = "none";
  }

  /* -----------------------------------------
     TOTALS
  ------------------------------------------ */
  function updateTotals() {
    let c = 0, p = 0, cr = 0, f = 0;
    document.querySelectorAll("#list tbody tr").forEach(r => {
      const t = r.querySelectorAll("td");
      c += +t[1].innerText;
      p += +t[2].innerText;
      cr += +t[3].innerText;
      f += +t[4].innerText;
    });

    document.getElementById("sumCal").innerText = Math.round(c);
    document.getElementById("sumProt").innerText = p.toFixed(1);
    document.getElementById("sumCarb").innerText = cr.toFixed(1);
    document.getElementById("sumFat").innerText = f.toFixed(1);
    document.getElementById("summary").innerText = Math.round(c) + " kcal";
  }

  /* -----------------------------------------
     EVENT LISTENERS
  ------------------------------------------ */
  searchInput.addEventListener("input", e => searchFood(e.target.value));
  addBtn.addEventListener("click", addSelectedOrFind);

  document.addEventListener("click", e => {
    if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target))
      suggestionsBox.style.display = "none";
  });

  /* -----------------------------------------
     LOAD FOODS
  ------------------------------------------ */
  async function loadFoods() {
    try {
      const base = await (await fetch("foods.json")).json();
      allFoods = base;
      console.log("Loaded foods:", allFoods.length);
    } catch (err) {
      console.error("Failed loading foods.json", err);
    }
  }

  loadFoods();
});

/* -----------------------------------------
   GLOBAL MODE SWITCH
------------------------------------------ */
function setMode(m) {
  mode = m;
  alert("Mode set to " + m.toUpperCase());
  document.getElementById("modePopup").style.display = "none";
}
