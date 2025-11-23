/**************************************************
 CLEAN SCRIPT.JS — FULLY WORKING
**************************************************/

let allFoods = [];
let mode = "home";

document.addEventListener("DOMContentLoaded", () => {

  const searchInput = document.getElementById("search");
  const suggestionsBox = document.getElementById("suggestions");
  const qtyInput = document.getElementById("qty");
  const unitSelect = document.getElementById("unit");
  const addBtn = document.getElementById("addBtn");
  const tableBody = document.querySelector("#list tbody");

  /************ LOAD DATABASE ************/
  async function loadFoods() {
    const res = await fetch("foods.json");
    const data = await res.json();

    allFoods = data.map(item => ({
      name: item.name,
      unit: item.unit || "serving",
      home: item.versions.home,
      restaurant: item.versions.restaurant,
    }));

    console.log("Loaded:", allFoods.length, "foods");
  }

  /************ SEARCH ************/
  function searchFood(q) {
    suggestionsBox.innerHTML = "";
    if (q.length < 2) { suggestionsBox.style.display = "none"; return; }

    const matched = allFoods.filter(f =>
      f.name.toLowerCase().includes(q.toLowerCase())
    );

    matched.slice(0, 40).forEach(food => {
      const b = document.createElement("button");
      b.innerText = food.name;
      b.onclick = () => {
        searchInput.value = food.name;
        unitSelect.value = food.unit;
        addBtn.onclick = () => addToTable(food);
        suggestionsBox.style.display = "none";
      };
      suggestionsBox.appendChild(b);
    });

    suggestionsBox.style.display = matched.length ? "block" : "none";
  }

  /************ ADD TO TABLE ************/
  function addToTable(food) {
    const qty = parseFloat(qtyInput.value);
    let multiplier = qty;

    if (food.unit === "g" && unitSelect.value === "g") {
      multiplier = qty / 100;
    }

    const v = food[mode];

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${food.name}<br><small>${mode} • ${qty}${unitSelect.value}</small></td>
      <td>${Math.round(v.cal * multiplier)}</td>
      <td>${(v.prot * multiplier).toFixed(1)}</td>
      <td>${(v.carb * multiplier).toFixed(1)}</td>
      <td>${(v.fat * multiplier).toFixed(1)}</td>
      <td><button class="remove">❌</button></td>
    `;

    row.querySelector(".remove").onclick = () => {
      row.remove();
      updateTotals();
    };

    tableBody.appendChild(row);
    updateTotals();
  }

  /************ TOTALS ************/
  function updateTotals() {
    let cal = 0, p = 0, c = 0, f = 0;

    document.querySelectorAll("#list tbody tr").forEach(r => {
      const t = r.querySelectorAll("td");
      cal += parseFloat(t[1].innerText);
      p += parseFloat(t[2].innerText);
      c += parseFloat(t[3].innerText);
      f += parseFloat(t[4].innerText);
    });

    document.getElementById("sumCal").innerText = Math.round(cal);
    document.getElementById("sumProt").innerText = p.toFixed(1);
    document.getElementById("sumCarb").innerText = c.toFixed(1);
    document.getElementById("sumFat").innerText = f.toFixed(1);
    document.getElementById("summary").innerText = Math.round(cal) + " kcal";
  }

  /************ MODE SWITCHING ************/
  window.setModeHome = function () {
    mode = "home";
    document.getElementById("modeLabel").innerText = "Mode: Home Cooking";
    document.getElementById("modePopup").style.display = "none";
  };

  window.setModeRestaurant = function () {
    mode = "restaurant";
    document.getElementById("modeLabel").innerText = "Mode: Restaurant Style";
    document.getElementById("modePopup").style.display = "none";
  };

  /************ EVENTS ************/
  searchInput.addEventListener("input", e => searchFood(e.target.value));
  document.addEventListener("click", e => {
    if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
      suggestionsBox.style.display = "none";
    }
  });

  loadFoods();
});

