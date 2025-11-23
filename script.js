/**************************************************
 HASSAN CHEF — NEW CLEAN SCRIPT.JS
 Fully compatible with foods.json
**************************************************/

document.addEventListener("DOMContentLoaded", () => {

    /**********************
     GLOBAL VARIABLES
    **********************/
    let allFoods = [];
    let mode = "home"; // default (chef’s kitchen at home)

    const searchInput = document.getElementById("search");
    const suggestionsBox = document.getElementById("suggestions");
    const qtyInput = document.getElementById("qty");
    const unitSelect = document.getElementById("unit");
    const addBtn = document.getElementById("addBtn");
    const tableBody = document.querySelector("#list tbody");


    /**********************
     1. LOAD FOODS.JSON
    **********************/
    async function loadFoods() {
        try {
            const res = await fetch("foods.json");
            const json = await res.json();

            allFoods = json.map(item => ({
                name: item.name,
                unit: item.unit || "serving",
                home: item.versions.home,
                restaurant: item.versions.restaurant
            }));

            console.log("Chef’s Kitchen Ready:", allFoods.length, "items");
        } catch (err) {
            console.error("FAILED to load foods.json", err);
        }
    }


    /**********************
     2. SEARCH BOX LOGIC
    **********************/
    function searchFood(q) {
        suggestionsBox.innerHTML = "";

        if (!q || q.length < 2) {
            suggestionsBox.style.display = "none";
            return;
        }

        const query = q.toLowerCase();
        const matched = allFoods.filter(f => f.name.toLowerCase().includes(query));

        matched.slice(0, 50).forEach(food => showSuggestion(food));

        suggestionsBox.style.display = matched.length ? "block" : "none";
    }


    /**********************
     3. SHOW SUGGESTIONS
    **********************/
    function showSuggestion(food) {
        const btn = document.createElement("button");
        btn.innerText = `${food.name}`;
        btn.onclick = () => {
            searchInput.value = food.name;
            unitSelect.value = food.unit;
            qtyInput.value = food.unit === "g" ? 100 : 1;
            suggestionsBox.style.display = "none";
            addBtn.onclick = () => addToTable(food);
        };
        suggestionsBox.appendChild(btn);
    }


    /**********************
     4. ADD FOOD TO TABLE
    **********************/
    function addToTable(food) {
        const qty = parseFloat(qtyInput.value) || 1;
        let multiplier = qty;

        // If grams, apply multiplier properly
        if (unitSelect.value === "g" && food.unit === "g") {
            multiplier = qty / 100;
        }

        const values = food[mode]; // home OR restaurant

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${food.name}<br><small class="muted">${mode.toUpperCase()} • ${qty}${unitSelect.value}</small></td>
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

        // Reset search
        searchInput.value = "";
        qtyInput.value = 1;
    }


    /**********************
     5. UPDATE TOTALS
    **********************/
    function updateTotals() {
        let c = 0, p = 0, cr = 0, f = 0;

        document.querySelectorAll("#list tbody tr").forEach(row => {
            const cols = row.querySelectorAll("td");
            c += parseFloat(cols[1].innerText);
            p += parseFloat(cols[2].innerText);
            cr += parseFloat(cols[3].innerText);
            f += parseFloat(cols[4].innerText);
        });

        document.getElementById("sumCal").innerText = Math.round(c);
        document.getElementById("sumProt").innerText = p.toFixed(1);
        document.getElementById("sumCarb").innerText = cr.toFixed(1);
        document.getElementById("sumFat").innerText = f.toFixed(1);

        document.getElementById("summary").innerText = `${Math.round(c)} kcal`;
    }


    /**********************
     6. MODE SWITCHING
    **********************/
    window.setModeHome = function () {
        mode = "home";
        alert("✔ Switched to HOME values");
    }

    window.setModeRestaurant = function () {
        mode = "restaurant";
        alert("✔ Switched to RESTAURANT values");
    }


    /**********************
     EVENT LISTENERS
    **********************/
    loadFoods();

    searchInput.addEventListener("input", e => searchFood(e.target.value));

    document.addEventListener("click", e => {
        if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
            suggestionsBox.style.display = "none";
        }
    });

});

