document.addEventListener("DOMContentLoaded", async () => {
<div style="margin-top:10px; display:flex; gap:10px;">
  <button onclick="setModeHome()" class="btn btn-ghost">Home</button>
  <button onclick="setModeRestaurant()" class="btn btn-ghost">Restaurant</button>
</div>

    let allFoods = [];
    let currentMode = "home"; // default view

    const searchInput = document.getElementById("search");
    const suggestionsBox = document.getElementById("suggestions");
    const qtyInput = document.getElementById("qty");
    const unitSelect = document.getElementById("unit");
    const addBtn = document.getElementById("addBtn");
    const tableBody = document.querySelector("#list tbody");
    const servingsInput = document.getElementById("servings");

    // -----------------------------
    // 1) LOAD FOODS.JSON
    // -----------------------------
    async function loadFoods() {
        try {
            const res = await fetch("foods.json");
            const externalData = await res.json();

            allFoods = externalData.map(item => {
                return {
                    name: item.name,
                    unit: item.unit || "serving",

                    home: item.home,
                    restaurant: item.restaurant,

                    calories: item.home.cal,
                    protein: item.home.prot,
                    carbs: item.home.carb,
                    fat: item.home.fat
                };
            });

            console.log("Chef's Kitchen Ready:", allFoods.length, "items");
        } catch (err) {
            console.error("Error loading foods.json:", err);
        }
    }

    // -----------------------------
    // 2) SEARCH FUNCTION
    // -----------------------------
    function searchFood(query) {
        suggestionsBox.innerHTML = "";

        if (!query || query.length < 2) {
            suggestionsBox.style.display = "none";
            return;
        }

        const lower = query.toLowerCase();
        let count = 0;

        for (const food of allFoods) {
            if (count > 50) break;
            if (food.name.toLowerCase().includes(lower)) {
                showSuggestion(food);
                count++;
            }
        }

        suggestionsBox.style.display = count > 0 ? "block" : "none";
    }

    // -----------------------------
    // 3) SHOW SUGGESTION
    // -----------------------------
    function showSuggestion(food) {
        const btn = document.createElement("button");

        btn.innerText = `${food.name} (${food.home.cal} kcal home / ${food.restaurant.cal} kcal restaurant)`;

        btn.onclick = () => {
            searchInput.value = food.name;
            suggestionsBox.style.display = "none";

            unitSelect.value = food.unit;
            qtyInput.value = food.unit === "g" ? 100 : 1;

            addBtn.onclick = () => addToTable(food);
        };

        suggestionsBox.appendChild(btn);
    }

    // -----------------------------
    // 4) ADD ITEM TO TABLE
    // -----------------------------
    function addToTable(food) {

        const qty = parseFloat(qtyInput.value) || 1;
        const unit = unitSelect.value;

        let data = currentMode === "home" ? food.home : food.restaurant;

        let multiplier = qty;
        if (unit === "g") multiplier = qty / 100;

        const totalCal = Math.round(data.cal * multiplier);
        const totalProt = (data.prot * multiplier).toFixed(1);
        const totalCarb = (data.carb * multiplier).toFixed(1);
        const totalFat = (data.fat * multiplier).toFixed(1);

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${food.name}<br><small class="muted">${currentMode}</small></td>
            <td>${totalCal}</td>
            <td>${totalProt}</td>
            <td>${totalCarb}</td>
            <td>${totalFat}</td>
            <td><button class="remove-btn">❌</button></td>
        `;

        row.querySelector(".remove-btn").onclick = () => {
            row.remove();
            updateTotals();
        };

        tableBody.appendChild(row);
        updateTotals();
    }

    // -----------------------------
    // 5) UPDATE TOTAL NUTRITION
    // -----------------------------
    function updateTotals() {
        let c = 0, p = 0, carb = 0, f = 0;

        document.querySelectorAll("#list tbody tr").forEach(row => {
            const cols = row.querySelectorAll("td");
            c += parseFloat(cols[1].innerText);
            p += parseFloat(cols[2].innerText);
            carb += parseFloat(cols[3].innerText);
            f += parseFloat(cols[4].innerText);
        });

        document.getElementById("sumCal").innerText = Math.round(c);
        document.getElementById("sumProt").innerText = p.toFixed(1);
        document.getElementById("sumCarb").innerText = carb.toFixed(1);
        document.getElementById("sumFat").innerText = f.toFixed(1);
        document.getElementById("summary").innerText = `${Math.round(c)} kcal`;
    }

    // -----------------------------
    // 6) HOME/RESTAURANT SWITCH BUTTONS
    // -----------------------------
    // (You can add real buttons later)
    window.setModeHome = function () {
        currentMode = "home";
        console.log("Switched to HOME values");
    };

    window.setModeRestaurant = function () {
        currentMode = "restaurant";
        console.log("Switched to RESTAURANT values");
    };

    // -----------------------------
    // INIT
    // -----------------------------
    await loadFoods();
    searchInput.addEventListener("input", (e) => searchFood(e.target.value));

});
