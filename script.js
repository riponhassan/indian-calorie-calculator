/**************************************************
 HASSAN CHEF — FINAL CLEAN SCRIPT
**************************************************/

let allFoods = [];
let mode = "home"; // default

document.addEventListener("DOMContentLoaded", () => {

  const searchInput = document.getElementById("search");
  const suggestionsBox = document.getElementById("suggestions");
  const qtyInput = document.getElementById("qty");
  const unitSelect = document.getElementById("unit");
  const addBtn = document.getElementById("addBtn");
  const tableBody = document.querySelector("#list tbody");

  // OPEN MODE POPUP
  document.getElementById("modeBtn").onclick = () => {
    document.getElementById("modePopup").style.display = "flex";
  };

  // LOAD foods.json
  async function loadFoods() {
    const res = await fetch("foods.json");
    const data = await res.json();
    allFoods = data;
    console.log("Loaded:", allFoods.length);
  }

  // SEARCH FUNCTION
  function searchFood(q) {
    suggestionsBox.innerHTML = "";

    if (!q || q.length < 2) {
      suggestionsBox.style.display = "none";
      return;
    }

    const found = allFoods.filter(item =>
      item.name.toLowerCase().includes(q.toLowerCase())
    );

    found.slice(0, 40).forEach(food => {
      const btn = document.createElement("button");
      btn.innerText = food.name;
      btn.onclick = () => {
        searchInput.value = food.name;
        addBtn.onclick = () => addToList(food);
        suggestionsBox.style.display = "none";
      };
      suggestionsBox.appendChild(btn);
    });

    suggestionsBox.style.display = found.length ? "block" : "none";
  }

  // ADD TO LIST
  function addToList(food) {
    const qty = Number(qtyInput.value) || 1;
    let multiplier = qty;

    if (unitSelect.value === "g" && food.unit === "g") {
      multiplier = qty / 100;
    }

    const values = food.versions[mode];

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${food.name}<br><small>${mode.toUpperCase()}</small></td>
      <td>${Math.round(values.cal * multiplier)}</td>
      <td>${(values.prot * multiplier).toFixed(1)}</td>
      <td>${(values.carb * multiplier).toFixed(1)}</td>
      <td>${(values.fat * multiplier).toFixed(1)}</td>
      <td><button class="remove-btn">❌</button></td>
    `;

    row.querySelector(".remove-btn").onclick = () => {
      row.remove();
      updateTotals();
    };

    tableBody.appendChild(row);
    updateTotals();
  }

  // TOTALS
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

  // SEARCH LISTENER
  searchInput.addEventListener("input", e => searchFood(e.target.value));
 // trigger rebuild

  // LOAD DATA
  loadFoods();
});

// SET MODE + CLOSE POPUP
function setMode(m) {
  mode = m;
  alert("Mode changed to " + m.toUpperCase());
  document.getElementById("modePopup").style.display = "none";
}


