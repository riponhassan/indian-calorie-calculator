/**************************************************
 HASSANCHEF – INDIAN CALORIE CALCULATOR (v2)
 With Home/Restaurant Toggle
**************************************************/

let allFoods = [];
let mode = "home"; // default mode

document.addEventListener("DOMContentLoaded", async () => {

    const searchInput = document.getElementById("search");
    const suggestionsBox = document.getElementById("suggestions");
    const qtyInput = document.getElementById("qty");
    const unitSelect = document.getElementById("unit");
    const addBtn = document.getElementById("addBtn");
    const tableBody = document.querySelector("#list tbody");

    // LOAD DATABASE
    async function loadFoods() {
        const response = await fetch("foods.json");
        const data = await response.json();

        // Convert to uniform format
        allFoods = data.map(item => ({
            name: item.name,
            unit: item.unit || "serving",
            versions: item.versions
        }));

        console.log("Loaded foods:", allFoods.length);
    }

    await loadFoods();

    /***********************
     SEARCH SUGGESTIONS
    ************************/
    function searchFood(q) {
        suggestionsBox.innerHTML = "";

        if (!q || q.length < 2) {
            suggestionsBox.style.display = "none";
            return;
        }

        const lower = q.toLowerCase();
        let count = 0;

        allFoods.forEach(food => {
            if (count >= 30) return;
            if (food.name.toLowerCase().includes(lower)) {
                addSuggestion(food);
                count++;
            }
        });

        suggestionsBox.style.display = count ? "block" : "none";
    }

    function addSuggestion(food) {
        const btn = document.createElement("button");
        btn.innerText = `${food.name} (${food.versions[mode].cal} kcal)`;

        btn.onclick = () => {
            searchInput.value = food.name;
            suggestionsBox.style.display = "none";

            addBtn.onclick = () => addToTable(food);
        };

        suggestionsBox.appendChild(btn);
    }

    searchInput.addEventListener("input", e => searchFood(e.target.value));

    /***********************
     ADD TO TABLE
    ************************/
    function addToTable(food) {
        const qty = parseFloat(qtyInput.value) || 1;
        const unit = unitSelect.value;

        const values = food.versions[mode];

        let multiplier = qty;
        if (unit === "g") multiplier = qty / 100;

        const cal = Math.round(values.cal * multiplier);
        const prot = (values.prot * multiplier).toFixed(1);
        const carb = (values.carb * multiplier).toFixed(1);
        const fat = (values.fat * multiplier).toFixed(1);

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${food.name}<br><small class="muted">${qty}${unit}</small></td>
            <td>${cal}</td>
            <td>${prot}</td>
            <td>${carb}</td>
            <td>${fat}</td>
            <td><button class="remove-btn">❌</button></td>
        `;

        row.querySelector(".remove-btn").onclick = () => {
            row.remove();
            updateSummary();
        };

        tableBody.appendChild(row);
        updateSummary();

        searchInput.value = "";
        qtyInput.value = 1;
    }

    /***********************
     UPDATE TOTALS
    ************************/
   function updateAllRows() {
    document.querySelectorAll('#list tbody tr').forEach(row => {

        const name = row.getAttribute("data-name");
        const qty  = parseFloat(row.getAttribute("data-qty"));
        const unit = row.getAttribute("data-unit");

        const food = allFoods.find(f => f.name === name);

        if (!food) return;

        const v = mode === "home" ? food.home : food.restaurant;

        let multiplier = unit === "g" ? qty / 100 : qty;

        row.querySelector(".col-cal").innerText  = Math.round(v.cal  * multiplier);
        row.querySelector(".col-prot").innerText = (v.prot * multiplier).toFixed(1);
        row.querySelector(".col-carb").innerText = (v.carb * multiplier).toFixed(1);
        row.querySelector(".col-fat").innerText  = (v.fat * multiplier).toFixed(1);
    });

    updateTotal();
}

/**************************************************
   MODE SWITCHING — WORKS NOW
**************************************************/

function setModeHome() {
    mode = "home";
    alert("✔ Switched to HOME cooking values");
}

function setModeRestaurant() {
    mode = "restaurant";
    alert("✔ Switched to RESTAURANT cooking values");
}
<div id="modePopup" style="
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: #b76b6b;
  color: #fff;
  padding: 10px 18px;
  border-radius: 12px;
  font-weight: 600;
  box-shadow: 0 4px 14px rgba(0,0,0,0.25);
  display: none;
  z-index: 9999;
"></div>

<script>
function showPopup(text) {
    const box = document.getElementById("modePopup");
    box.innerText = text;
    box.style.display = "block";

    setTimeout(() => {
        box.style.opacity = "0";
        setTimeout(() => {
            box.style.display = "none";
            box.style.opacity = "1";
        }, 300);
    }, 1200);
}

// Replace alert() with popup
function setModeHome() {
    mode = "home";
    updateAllRows();
    showPopup("Home mode active");
}

function setModeRestaurant() {
    mode = "restaurant";
    updateAllRows();
    showPopup("Restaurant mode active");
}
</script>

