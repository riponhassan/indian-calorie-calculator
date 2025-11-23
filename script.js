document.addEventListener('DOMContentLoaded', async () => {
    
    // 1. DEFINE VARIABLES
    let allFoods = [];
    const searchInput = document.getElementById('searchInput'); // Ensure your HTML input has id="searchInput"
    const resultsBox = document.getElementById('resultsBox');   // Ensure your HTML results div has id="resultsBox"
    
    // 2. LOAD DATA
    async function loadFoods() {
        try {
            // A. Load Local/Indian Foods (if they exist in foods.js)
            // We try to grab them from the window object if defined
            const localFoods = typeof foods !== 'undefined' ? foods : [];

            // B. Fetch the External JSON file we just created
            // Note: We use 'relative path' which works automatically on your website
            const response = await fetch('foods.json');
            const externalFoods = await response.json();

            // C. Combine them
            allFoods = [...localFoods, ...externalFoods];
            console.log(`Loaded ${allFoods.length} total foods.`);

        } catch (error) {
            console.error("Error loading foods:", error);
            // Fallback: if fetch fails, just use local foods
            if (typeof foods !== 'undefined') allFoods = foods;
        }
    }

    // 3. SEARCH FUNCTION (Optimized for large lists)
    function searchFood(query) {
        resultsBox.innerHTML = ''; // Clear previous results
        
        if (!query) return;
        
        const lowerQuery = query.toLowerCase();
        let matchCount = 0;

        // Loop through all foods
        for (const food of allFoods) {
            // Stop after 50 results to prevent freezing
            if (matchCount >= 50) break;

            if (food.name.toLowerCase().includes(lowerQuery)) {
                displayFoodItem(food);
                matchCount++;
            }
        }
    }

    // 4. DISPLAY FUNCTION (You may need to adjust HTML to match your design)
    function displayFoodItem(food) {
        const div = document.createElement('div');
        div.className = 'food-item'; // Use your CSS class here
        div.style.cursor = 'pointer';
        div.style.padding = '10px';
        div.style.borderBottom = '1px solid #eee';
        div.innerText = `${food.name} - ${food.calories} kcal`;
        
        // When clicked, add to list (You likely have an 'addFood' function in another file)
        div.onclick = () => {
            if (typeof addFood === 'function') {
                addFood(food); // Call your existing logic
            } else {
                alert(`You selected: ${food.name}`);
            }
            resultsBox.innerHTML = ''; // Clear search
            searchInput.value = '';
        };

        resultsBox.appendChild(div);
    }

    // 5. START EVERYTHING
    await loadFoods();

    // Listen for typing
    if (searchInput) {
        searchInput.addEventListener('input', (e) => searchFood(e.target.value));
    }
});
