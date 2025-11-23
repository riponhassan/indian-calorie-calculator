document.addEventListener('DOMContentLoaded', async () => {
    
    // --- 1. SETUP VARIABLES ---
    let allFoods = []; 
    const searchInput = document.getElementById('search');      
    const suggestionsBox = document.getElementById('suggestions'); 
    const qtyInput = document.getElementById('qty');
    const unitSelect = document.getElementById('unit');
    const addBtn = document.getElementById('addBtn');
    const tableBody = document.querySelector('#list tbody');
    
    // --- 2. LOAD ALL DATA SOURCES ---
    async function loadFoods() {
        try {
            let complexFoods = [];

            // Helper to merge objects into our list
            function mergeFromObject(sourceObj) {
                if (!sourceObj) return;
                for (const [key, value] of Object.entries(sourceObj)) {
                    complexFoods.push({
                        id: key,
                        name: value.display || key, // Fallback if display is missing
                        versions: value.versions || {}, 
                        type: 'complex'
                    });
                }
            }

            // A. CHECK ALL POSSIBLE VARIABLES (From your various files)
            // We use 'try-catch' blocks or checks to avoid errors if a var is missing
            if (typeof baseFoods !== 'undefined') mergeFromObject(baseFoods);
            if (typeof extendedFoods !== 'undefined') mergeFromObject(extendedFoods);
            if (typeof megaFoods !== 'undefined') mergeFromObject(megaFoods);
            if (typeof foodDB !== 'undefined') mergeFromObject(foodDB);

            // B. LOAD SIMPLE JSON (The new file)
            let simpleFoods = [];
            try {
                const response = await fetch('foods.json'); // Ensure this file exists in your repo!
                if (response.ok) {
                    const data = await response.json();
                    simpleFoods = data.map(item => ({...item, type: 'simple'}));
                } else {
                    console.warn("foods.json file not found (404).");
                }
            } catch (e) {
                console.warn("Error loading foods.json:", e);
            }

            // C. COMBINE EVERYTHING
            allFoods = [...complexFoods, ...simpleFoods];
            
            // Remove duplicates (if any share the exact same name)
            // This is optional but good for cleanliness
            const uniqueFoods = [];
            const namesSeen = new Set();
            for (const f of allFoods) {
                if (!namesSeen.has(f.name)) {
                    namesSeen.add(f.name);
                    uniqueFoods.push(f);
                }
            }
            allFoods = uniqueFoods;

            console.log(`Chef's Kitchen Ready: ${allFoods.length} ingredients loaded.`);

        } catch (error) {
            console.error("Critical Error loading foods:", error);
        }
    }

    // --- 3. SEARCH FUNCTION ---
    function searchFood(query) {
        suggestionsBox.innerHTML = ''; 
        
        if (!query || query.length < 2) {
            suggestionsBox.style.display = 'none';
            return;
        }

        const lowerQuery = query.toLowerCase();
        let count = 0;

        for (const food of allFoods) {
            if (count >= 50) break; 

            if (food.name && food.name.toLowerCase().includes(lowerQuery)) {
                showSuggestion(food);
                count++;
            }
        }

        suggestionsBox.style.display = count > 0 ? 'block' : 'none';
    }

    // --- 4. SHOW SUGGESTION ---
    function showSuggestion(food) {
        const btn = document.createElement('button');
        
        if (food.type === 'complex') {
            // Indian Food
            btn.innerText = food.name; 
        } else {
            // Simple Food
            const unitLabel = food.unit || 'serving';
            btn.innerText = `${food.name} (${food.calories} kcal / ${unitLabel})`;
        }
        
        btn.onclick = () => {
            searchInput.value = food.name; 
            suggestionsBox.style.display = 'none'; 

            if (food.type === 'complex') {
                setupComplexFood(food);
            } else {
                setupSimpleFood(food);
            }
        };
        
        suggestionsBox.appendChild(btn);
    }

    // --- 5a. SETUP SIMPLE FOOD ---
    function setupSimpleFood(food) {
        const preferredUnit = food.unit || 'serving'; 
        
        if (preferredUnit === 'g' || preferredUnit === 'ml') {
            unitSelect.value = 'g'; 
            qtyInput.value = '100'; 
        } else {
            unitSelect.value = 'serving';
            qtyInput.value = '1';   
        }
        
        // Bind the Add button
        addBtn.onclick = () => {
             addToTable({
                 name: food.name,
                 calories: food.calories,
                 protein: food.protein,
                 carbs: food.carbs,
                 fat: food.fat,
                 unitType: preferredUnit
             });
        };
    }

    // --- 5b. SETUP COMPLEX FOOD (Restores your Home/Restaurant logic) ---
    function setupComplexFood(food) {
        // Default to Home style
        // (If you want to add back the popup asking "Home or Restaurant?", 
        //  we can add that logic here. For now, we default to Home for speed.)
        
        const style = 'home'; 
        // Safety check: if 'home' doesn't exist, try 'restaurant', or just the first key
        const versions = food.versions;
        const data = versions.home || versions.restaurant || Object.values(versions)[0];
        
        if (!data) {
            alert("Error: No nutrition data found for this item.");
            return;
        }

        unitSelect.value = 'serving';
        qtyInput.value = '1';

        addBtn.onclick = () => {
             addToTable({
                 name: `${food.name} (Home)`, 
                 calories: data.cal,
                 protein: data.prot,
                 carbs: data.carb,
                 fat: data.fat,
                 unitType: 'serving'
             });
        };
    }

    // --- 6. ADD TO TABLE ---
    function addToTable(foodData) {
        const qty = parseFloat(qtyInput.value) || 1;
        const currentUnit = unitSelect.value; 
        let multiplier = qty;
        
        // Simple Math: If food is measured in grams but user entered 'g', divide by 100
        // (Since your database values for 'g' items are per 100g)
        if (foodData.unitType === 'g' && currentUnit === 'g') {
             multiplier = qty / 100;
        }

        const totalCal = Math.round(foodData.calories * multiplier);
        const totalProt = (foodData.protein * multiplier).toFixed(1);
        const totalCarb = (foodData.carbs * multiplier).toFixed(1);
        const totalFat = (foodData.fat * multiplier).toFixed(1);

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${foodData.name} <br><small class="muted">${qty} ${currentUnit}</small></td>
            <td>${totalCal}</td>
            <td>${totalProt}</td>
            <td>${totalCarb}</td>
            <td>${totalFat}</td>
            <td><button class="remove-btn" style="border:none;background:none;cursor:pointer;">❌</button></td>
        `;

        row.querySelector('.remove-btn').onclick = () => {
            row.remove();
            updateTotal();
        };

        tableBody.appendChild(row);
        updateTotal(); 
        
        searchInput.value = '';
        qtyInput.value = '1';
    }

    // --- 7. UPDATE TOTALS ---
    function updateTotal() {
        let c=0, p=0, carb=0, f=0;
        document.querySelectorAll('#list tbody tr').forEach(row => {
            const cols = row.querySelectorAll('td');
            c += parseFloat(cols[1].innerText) || 0;
            p += parseFloat(cols[2].innerText) || 0;
            carb += parseFloat(cols[3].innerText) || 0;
            f += parseFloat(cols[4].innerText) || 0;
        });
        
        const sumCal = document.getElementById('sumCal');
        if(sumCal) sumCal.innerText = Math.round(c);
        
        const sumProt = document.getElementById('sumProt');
        if(sumProt) sumProt.innerText = p.toFixed(1);
        
        const sumCarb = document.getElementById('sumCarb');
        if(sumCarb) sumCarb.innerText = carb.toFixed(1);
        
        const sumFat = document.getElementById('sumFat');
        if(sumFat) sumFat.innerText = f.toFixed(1);
        
        const summary = document.getElementById('summary');
        if(summary) summary.innerText = `${Math.round(c)} kcal`;
    }

    // --- START ---
    await loadFoods();
    
    searchInput.addEventListener('input', (e) => searchFood(e.target.value));
    
    // Hide suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
            suggestionsBox.style.display = 'none';
        }
    });
});
