let mode = "home";   // default mode (home values)
let allFoods = [];

async function loadFoods() {
    try {
        const res = await fetch("foods.json");
        const data = await res.json();

        // convert JSON → unified usable format
        allFoods = data.map(item => ({
            name: item.name,
            unit: item.unit || "serving",

            home: item.versions.home,
            restaurant: item.versions.restaurant,

            // default visible values (home)
            calories: item.versions.home.cal,
            protein: item.versions.home.prot,
            carbs: item.versions.home.carb,
            fat: item.versions.home.fat
        }));

        console.log("Loaded:", allFoods.length, "foods");

    } catch (e) {
        console.error("Error loading foods.json", e);
    }
}

// -----------------------------------------

function updateModeValues() {
    allFoods = allFoods.map(f => {
        let v = mode === "home" ? f.home : f.restaurant;

        return {
            ...f,
            calories: v.cal,
            protein: v.prot,
            carbs: v.carb,
            fat: v.fat
        };
    });

    console.log("Mode changed to:", mode);
}

// -----------------------------------------

function setModeHome() {
    mode = "home";
    updateModeValues();
}

function setModeRestaurant() {
    mode = "restaurant";
    updateModeValues();
}

// -----------------------------------------

document.addEventListener("DOMContentLoaded", async () => {

    const searchInput = document.getElementById("search");
    const suggestionsBox = document.getElementById("suggestions");
    const qtyInput = document.getElementById("qty");
    const unitSelect = document.getElementById("unit");
    const addBtn = document.getElementById("addBtn");
    const tableBody = document.querySelector("#list tbody");

    await loadFoods();
    updateModeValues();

    // SEARCH
    function searchFood(q) {
        suggestionsBox.innerHTML = "";
        if (q.length < 2) {
            suggestionsBox.style.display = "none";
            return;
        }

        const qLower = q.toLowerCase();
        const matches = allFoods.filter(f => f.name.toLowerCase().includes(qLower)).slice(0, 30);

        matches.forEach(food => {
            let btn = document.createElement("button");
            btn.textContent = `${food.name} (${food.calories} kcal)`;

            btn.onclick = () => {
                searchInput.value = food.name;
                suggestionsBox.style.display = "none";

                addBtn.onclick = () => addToTable(food);
            };

            suggestionsBox.appendChild(btn);
        });

        suggestionsBox.style.display = matches.length ? "block" : "none";
    }

    searchInput.addEventListener("input", e => searchFood(e.target.value));

    // ---------------------------------------

    function addToTable(food) {
        const qty = parseFloat(qtyInput.value) || 1;
        const unit = unitSelect.value;

        let multiplier = (unit === "g" ? qty / 100 : qty);

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${food.name}<br><small>${qty} ${unit}</small></td>
            <td>${Math.round(food.calories * multiplier)}</td>
            <td>${(food.protein * multiplier).toFixed(1)}</td>
            <td>${(food.carbs * multiplier).toFixed(1)}</td>
            <td>${(food.fat * multiplier).toFixed(1)}</td>
            <td><button class="remove-btn">❌</button></td>
        `;

        row.querySelector(".remove-btn").onclick = () => {
            row.remove();
            updateTotals();
        };

        tableBody.appendChild(row);
        updateTotals();

        searchInput.value = "";
        qtyInput.value = 1;
    }

    // ---------------------------------------

    function updateTotals() {
        let totalCal = 0, totalP = 0, totalC = 0, totalF = 0;

        document.querySelectorAll("#list tbody tr").forEach(row => {
            const cols = row.querySelectorAll("td");
            totalCal += parseFloat(cols[1].textContent);
            totalP += parseFloat(cols[2].textContent);
            totalC += parseFloat(cols[3].textContent);
            totalF += parseFloat(cols[4].textContent);
        });

        document.getElementById("sumCal").innerText = totalCal;
        document.getElementById("sumProt").innerText = totalP.toFixed(1);
        document.getElementById("sumCarb").innerText = totalC.toFixed(1);
        document.getElementById("sumFat").innerText = totalF.toFixed(1);
        document.getElementById("summary").innerText = `${totalCal} kcal`;
    }

});

