document.addEventListener('DOMContentLoaded', async () => {

    let allFoods = [];
    const searchInput = document.getElementById('search');
    const suggestionsBox = document.getElementById('suggestions');
    const qtyInput = document.getElementById('qty');
    const unitSelect = document.getElementById('unit');
    const addBtn = document.getElementById('addBtn');
    const tableBody = document.querySelector('#list tbody');
    const servingsInput = document.getElementById('servings');

    // LOAD FOODS.JSON
    async function loadFoods() {
        try {
            const response = await fetch('foods.json?v=' + Date.now());
            allFoods = await response.json();

            console.log("Chef's Kitchen Ready:", allFoods.length, "ingredients loaded.");
        } catch (e) {
            console.error("❌ Error loading foods.json", e);
        }
    }

    // SEARCH
    function searchFood(q) {
        suggestionsBox.innerHTML = "";

        if (!q || q.length < 2) {
            suggestionsBox.style.display = "none";
            return;
        }

        const query = q.toLowerCase();
        let count = 0;

        allFoods.forEach(food => {
            if (count >= 50) return;

            if (food.name.toLowerCase().includes(query)) {
                const btn = document.createElement('button');
                btn.innerText = `${food.name}`;
                btn.onclick = () => selectFood(food);
                suggestionsBox.appendChild(btn);
                count++;
            }
        });

        suggestionsBox.style.display = count ? "block" : "none";
    }

    // SELECT FOOD
    function selectFood(food) {
        searchInput.value = food.name;
        suggestionsBox.style.display = "none";

        // Auto set unit
        if (food.unit === "g" || food.unit === "ml") {
            unitSelect.value = food.unit;
            qtyInput.value = 100;
        } else {
            unitSelect.value = "serving";
            qtyInput.value = 1;
        }

        addBtn.onclick = () => addToTable(food);
    }

    // ADD TO TABLE
    function addToTable(food) {
        const qty = parseFloat(qtyInput.value) || 1;
        const unit = unitSelect.value;

        // Get home or restaurant values — default restaurant
        const use = food.restaurant || food.home;

        let multiplier = qty;

        if (unit === 'g' && food.unit === 'g') {
            multiplier = qty / 100;
        }

        const totalCal = Math.round(use.cal * multiplier);
        const totalProt = (use.prot * multiplier).toFixed(1);
        const totalCarb = (use.carb * multiplier).toFixed(1);
        const totalFat = (use.fat * multiplier).toFixed(1);

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${food.name}<br><small>${qty}${unit}</small></td>
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
        searchInput.value = "";
    }

    // UPDATE TOTALS
    function updateTotal() {
        let totalCal = 0, p=0, c=0, f=0;

        document.querySelectorAll('#list tbody tr').forEach(row => {
            const cols = row.querySelectorAll('td');
            totalCal += parseFloat(cols[1].innerText);
            p += parseFloat(cols[2].innerText);
            c += parseFloat(cols[3].innerText);
            f += parseFloat(cols[4].innerText);
        });

        const servings = parseFloat(servingsInput.value) || 1;

        document.getElementById('sumCal').innerText = Math.round(totalCal / servings);
        document.getElementById('sumProt').innerText = (p / servings).toFixed(1);
        document.getElementById('sumCarb').innerText = (c / servings).toFixed(1);
        document.getElementById('sumFat').innerText = (f / servings).toFixed(1);

        document.getElementById('summary').innerText = `${Math.round(totalCal)} kcal`;
    }

    await loadFoods();
    searchInput.addEventListener('input', (e) => searchFood(e.target.value));
});
