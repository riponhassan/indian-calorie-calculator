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
    function updateSummary() {
        let c = 0, p = 0, carb = 0, f = 0;

        document.querySelectorAll("#list tbody tr").forEach(row => {
            const t = row.querySelectorAll("td");
            c += parseFloat(t[1].innerText);
            p += parseFloat(t[2].innerText);
            carb += parseFloat(t[3].innerText);
            f += parseFloat(t[4].innerText);
        });

        document.getElementById("sumCal").innerText = Math.round(c);
        document.getElementById("sumProt").innerText = p.toFixed(1);
        document.getElementById("sumCarb").innerText = carb.toFixed(1);
        document.getElementById("sumFat").innerText = f.toFixed(1);
        document.getElementById("summary").innerText = `${Math.round(c)} kcal`;
    }
});

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

