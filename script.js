let allFoods = [];
let currentMode = "home"; // default mode

// Mode switching
function setModeHome() {
    currentMode = "home";
    console.log("Mode switched to HOME");
}

function setModeRestaurant() {
    currentMode = "restaurant";
    console.log("Mode switched to RESTAURANT");
}

document.addEventListener("DOMContentLoaded", async () => {

    const searchInput = document.getElementById("search");
    const suggestionsBox = document.getElementById("suggestions");
    const qtyInput = document.getElementById("qty");
    const unitSelect = document.getElementById("unit");
    const tableBody = document.querySelector("#list tbody");

    // Load foods.json
    async function loadFoods() {
        try {
            const response = await fetch("foods.json");
            const externalData = await response.json();

            allFoods = externalData.map(item => {
                return {
                    name: item.name,
                    unit: item.unit || "serving",
                    home: item.versions.home,
                    restaurant: item.versions.restaurant
                };
            });

            console.log("Chef's Kitchen Ready:", allFoods.length, "ingredients loaded.");
        } catch (e) {
            console.error("Error loading foods.json:", e);
        }
    }

    await loadFoods();

    // SEARCH FUNCTION
    function searchFood(q) {
        suggestionsBox.innerHTML = "";

        if (!q || q.length < 2) {
            suggestionsBox.style.display = "none";
            return;
        }

        const results = allFoods.filter(f =>
            f.name.toLowerCase().includes(q.toLowerCase())
        );

        results.slice(0, 40).forEach(showSuggestion);
        suggestionsBox.style.display = results.length ? "block" : "none";
    }

    // SHOW SUGGESTIONS
    function showSuggestion(food) {
        const btn = document.createElement("button");
        btn.innerText = `${food.name}`;

        btn.onclick = () => {
            searchInput.value = food.name;
            suggestionsBox.style.display = "none";
            addFoodToList(food);
        };

        suggestionsBox.appendChild(btn);
    }

    // ADD TO TABLE
    function addFoodToList(food) {
        const qty = parseFloat(qtyInput.value) || 1;
        const unit = unitSelect.value;

        const data = food[currentMode]; // home or restaurant

        let multiplier = qty;
        if (unit === "g" && food.unit === "g") multiplier = qty / 100;

        // Calculate totals
        const totalCal = Math.round(data.cal * multiplier);
        const totalProt = (data.prot * multiplier).toFixed(1);
        const totalCarb = (data.carb * multiplier).toFixed(1);
        const totalFat = (data.fat * multiplier).toFixed(1);

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${food.name} <br><small>${qty}${unit}</small></td>
            <td>${totalCal}</td>
            <td>${totalProt}</td>
            <td>${totalCarb}</td>
            <td>${totalFat}</td>
            <td><button class="remove-btn">❌</button></td>
        `;

        row.querySelector(".remove-btn").onclick = () => {
            row.remove();
            updateTotal();
        };

        tableBody.appendChild(row);
        updateTotal();
    }

    // TOTAL NUTRITION UPDATE
    function updateTotal() {
        let cal=0, p=0, c=0, f=0;

        document.querySelectorAll("#list tbody tr").forEach(row => {
            const cols = row.querySelectorAll("td");
            cal += parseFloat(cols[1].innerText);
            p += parseFloat(cols[2].innerText);
            c += parseFloat(cols[3].innerText);
            f += parseFloat(cols[4].innerText);
        });

        document.getElementById("sumCal").innerText = Math.round(cal);
        document.getElementById("sumProt").innerText = p.toFixed(1);
        document.getElementById("sumCarb").innerText = c.toFixed(1);
        document.getElementById("sumFat").innerText = f.toFixed(1);
        document.getElementById("summary").innerText = `${Math.round(cal)} kcal`;
    }

    searchInput.addEventListener("input", e => searchFood(e.target.value));
});
