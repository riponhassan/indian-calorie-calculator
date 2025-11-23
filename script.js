document.addEventListener('DOMContentLoaded', async () => {
    
    // --- 1. SETUP VARIABLES ---
    let allFoods = [];
    const searchInput = document.getElementById('search');      // Matches your HTML id="search"
    const suggestionsBox = document.getElementById('suggestions'); // Matches your HTML id="suggestions"
    const qtyInput = document.getElementById('qty');
    const unitSelect = document.getElementById('unit');
    const addBtn = document.getElementById('addBtn');
    const tableBody = document.querySelector('#list tbody');
    
    // --- 2. LOAD DATA ---
    async function loadFoods() {
        try {
            // A. Get local foods (from foods.js/foods_base.js if they exist)
            // We check multiple variable names just in case
            let localData = [];
            if (typeof foods !== 'undefined') localData = foods;
            else if (typeof foodList !== 'undefined') localData = foodList;

            // B. Fetch external JSON
            const response = await fetch('foods.json');
            const externalData = await response.json();

            // C. Combine them
            allFoods = [...localData, ...externalData];
            console.log(`Chef's Kitchen Ready: ${allFoods.length} ingredients loaded.`);

        } catch (error) {
            console.error("Error loading pantry:", error);
            // Fallback to local only
            if (typeof foods !== 'undefined') allFoods = foods;
        }
    }

    // --- 3. SEARCH FUNCTION ---
    function searchFood(query) {
        suggestionsBox.innerHTML = ''; // Clear list
        
        if (!query || query.length < 2) {
            suggestionsBox.style.display = 'none';
            return;
        }

        const lowerQuery = query.toLowerCase();
        let count = 0;

        for (const food of allFoods) {
            if (count >= 50) break; // Stop after 50 matches to keep it fast

            // Check if name exists and matches
            if (food.name && food.name.toLowerCase().includes(lowerQuery)) {
                showSuggestion(food);
                count++;
            }
        }

        suggestionsBox.style.display = count > 0 ? 'block' : 'none';
    }

   // --- 4. SHOW SUGGESTION (SMARTER VERSION) ---
    function showSuggestion(food) {
        const btn = document.createElement('button');
        
        // Check if this food is usually measured in Servings or Grams
        // (If your JSON doesn't have a 'unit', we assume 'serving' for items like Apples)
        const preferredUnit = food.unit || 'serving'; 
        
        btn.innerText = `${food.name} (${food.calories} kcal / ${preferredUnit})`;
        
        btn.onclick = () => {
            searchInput.value = food.name; // Fill input
            suggestionsBox.style.display = 'none'; // Hide list
            
            // --- SMART SWITCH LOGIC ---
            // If the food is per serving (like Apple, Egg), switch dropdown to "Serving"
            // If the food is usually grams (like Rice), switch dropdown to "Grams"
            if (preferredUnit === 'g' || preferredUnit === 'ml') {
                unitSelect.value = preferredUnit;
                qtyInput.value = '100'; // Default to 100g for rice/curry
            } else {
                unitSelect.value = 'serving';
                qtyInput.value = '1';   // Default to 1 item for Apple/Egg
            }

            // Bind the add button
            addBtn.onclick = () => addToTable(food);
        };
        
        suggestionsBox.appendChild(btn);
    
    }

    // --- 5. ADD TO TABLE LOGIC ---
    function addToTable(food) {
        const qty = parseFloat(qtyInput.value) || 1;
        const unit = unitSelect.value; 

        // Calculate Multiplier
        // Note: You may need to adjust this logic based on your specific data units
        let multiplier = qty;
        
        // Simple logic: If data is per 100g and user selected 'g', divide by 100
        if (unit === 'g') {
             multiplier = qty / 100;
        }

        const totalCal = Math.round(food.calories * multiplier);
        const totalProt = (food.protein * multiplier).toFixed(1);
        const totalCarb = (food.carbs * multiplier).toFixed(1);
        const totalFat = (food.fat * multiplier).toFixed(1);

        // Create Row
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${food.name} <br><small class="muted">${qty}${unit}</small></td>
            <td>${totalCal}</td>
            <td>${totalProt}</td>
            <td>${totalCarb}</td>
            <td>${totalFat}</td>
            <td><button class="remove-btn">❌</button></td>
        `;

        // Remove Button Logic
        row.querySelector('.remove-btn').onclick = () => {
            row.remove();
            updateTotal();
        };

        tableBody.appendChild(row);
        updateTotal(); // Update bottom totals
        
        // Reset search
        searchInput.value = '';
        qtyInput.value = '1';
    }

    // --- 6. UPDATE TOTALS ---
    function updateTotal() {
        let c=0, p=0, carb=0, f=0;
        
        // Loop through all table rows
        document.querySelectorAll('#list tbody tr').forEach(row => {
            const cols = row.querySelectorAll('td');
            c += parseFloat(cols[1].innerText);
            p += parseFloat(cols[2].innerText);
            carb += parseFloat(cols[3].innerText);
            f += parseFloat(cols[4].innerText);
        });

        // Update HTML
        document.getElementById('sumCal').innerText = Math.round(c);
        document.getElementById('sumProt').innerText = p.toFixed(1);
        document.getElementById('sumCarb').innerText = carb.toFixed(1);
        document.getElementById('sumFat').innerText = f.toFixed(1);
        document.getElementById('summary').innerText = `${Math.round(c)} kcal`;
    }

    // --- START ---
    await loadFoods();
    
    // Listeners
    searchInput.addEventListener('input', (e) => searchFood(e.target.value));
    
    // Hide suggestions if clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
            suggestionsBox.style.display = 'none';
        }
    });
});
