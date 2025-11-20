/* script.js - calculator logic */
(function(){
  // References
  const search = document.getElementById('search');
  const suggestionsEl = document.getElementById('suggestions');
  const addBtn = document.getElementById('addBtn');
  const qtyEl = document.getElementById('qty');
  const unitEl = document.getElementById('unit');
  const tbody = document.querySelector('#list tbody');
  const sumCalEl = document.getElementById('sumCal');
  const sumProtEl = document.getElementById('sumProt');
  const sumCarbEl = document.getElementById('sumCarb');
  const sumFatEl = document.getElementById('sumFat');
  const summaryText = document.getElementById('summary');
  const servingsEl = document.getElementById('servings');
  const copySummary = document.getElementById('copySummary');

  let items = []; // items on recipe list

  // Build an index for fast search (lowercase)
  const names = Object.keys(foodDB);
  const index = names.map(n => ({ key: n, low: n.toLowerCase() }));

  function showSuggestions(q) {
    const val = (q||'').trim().toLowerCase();
    if(!val){ suggestionsEl.style.display='none'; suggestionsEl.innerHTML=''; return; }
    // find best matches: startsWith > includes
    const starts = index.filter(i => i.low.startsWith(val)).slice(0,12);
    const includes = index.filter(i => !i.low.startsWith(val) && i.low.includes(val)).slice(0,10);
    const results = starts.concat(includes).slice(0,18);
    if(results.length===0){ suggestionsEl.style.display='none'; suggestionsEl.innerHTML=''; return; }
    suggestionsEl.innerHTML = results.map(r => `<button type="button" data-name="${encodeURIComponent(r.key)}">${r.key}</button>`).join('');
    suggestionsEl.style.display = 'block';
    // attach listeners
    Array.from(suggestionsEl.querySelectorAll('button')).forEach(b=>{
      b.addEventListener('click', ()=>{
        const name = decodeURIComponent(b.getAttribute('data-name'));
        search.value = name;
        suggestionsEl.style.display='none';
        qtyEl.focus();
      });
    });
  }

  // event: search input
  search.addEventListener('input', e => {
    showSuggestions(e.target.value);
  });

  // hide suggestions when clicking outside
  document.addEventListener('click', e=>{
    if(!e.target.closest('.suggestions')) suggestionsEl.style.display='none';
  });

  // helper: standardize unit; the DB values are per serving by default
  function computeNutritionForEntry(name, qty, unit){
    // name exists in DB? fallback exact match lower-case
    let key = Object.keys(foodDB).find(k => k.toLowerCase() === name.toLowerCase());
    if(!key){
      // try fuzzy: find first that includes search
      key = Object.keys(foodDB).find(k => k.toLowerCase().includes(name.toLowerCase()));
    }
    if(!key) return null;
    const base = foodDB[key];
    // If unit is grams (g) and DB has per "100g" style keys, we do a simple conversion:
    // Many items are per serving in DB; for small items if user provides "g", we assume cal/100g when naming has number, but we avoid guesses.
    // For simplicity: if user chooses 'g', treat DB value as per 100g if key contains '100g' or number; otherwise treat as per serving and scale by qty.
    let multiplier = 1;
    if(unit === 'g' || unit === 'ml'){
      // if key text contains '100g' or '100ml' assume DB is per 100g/ml
      if(key.toLowerCase().includes('100g') || key.toLowerCase().includes('100ml')){
        multiplier = qty/100;
      } else {
        // assume qty means servings if they typed name like "paneer 100g" allow user to type "paneer 100g" in search
        // fallback: if unit 'g' treat as (qty/100) of base
        multiplier = qty/100;
      }
    } else {
      // serving: multiply by qty
      multiplier = qty;
    }

    return {
      name: key,
      qty: qty,
      unit: unit,
      cal: +(base.cal * multiplier).toFixed(2),
      prot: +(base.prot * multiplier).toFixed(2),
      carb: +(base.carb * multiplier).toFixed(2),
      fat: +(base.fat * multiplier).toFixed(2)
    };
  }

  // render table
  function renderList(){
    tbody.innerHTML = items.map((it, idx) => `
      <tr>
        <td><strong>${escapeHtml(it.name)}</strong> <div class="small muted">(${it.qty} ${it.unit})</div></td>
        <td>${it.cal}</td>
        <td>${it.prot}</td>
        <td>${it.carb}</td>
        <td>${it.fat}</td>
        <td><button class="remove-btn" data-i="${idx}">Remove</button></td>
      </tr>
    `).join('');
    // attach remove handlers
    Array.from(tbody.querySelectorAll('.remove-btn')).forEach(b=>{
      b.addEventListener('click', ()=>{
        const i = +b.getAttribute('data-i');
        items.splice(i,1);
        renderList();
        updateSummary();
      });
    });
    updateSummary();
  }

  // update totals
  function updateSummary(){
    const total = items.reduce((acc,it)=>{
      acc.cal += Number(it.cal||0);
      acc.prot += Number(it.prot||0);
      acc.carb += Number(it.carb||0);
      acc.fat += Number(it.fat||0);
      return acc;
    },{cal:0,prot:0,carb:0,fat:0});
    const servings = Math.max(1, Number(servingsEl.value) || 1);
    const perServing = {
      cal: +(total.cal / servings).toFixed(2),
      prot: +(total.prot / servings).toFixed(2),
      carb: +(total.carb / servings).toFixed(2),
      fat: +(total.fat / servings).toFixed(2)
    };
    sumCalEl.textContent = perServing.cal;
    sumProtEl.textContent = perServing.prot;
    sumCarbEl.textContent = perServing.carb;
    sumFatEl.textContent = perServing.fat;
    summaryText.textContent = `${total.cal.toFixed(2)} kcal • per recipe — ${perServing.cal} kcal per serving (${servings} serving(s))`;
  }

  // Add item
  addBtn.addEventListener('click', ()=>{
    const name = search.value.trim();
    const qty = parseFloat(qtyEl.value) || 1;
    const unit = unitEl.value || 'serving';
    if(!name){ alert('Type an ingredient or dish name (e.g., butter naan)'); search.focus(); return; }
    const entry = computeNutritionForEntry(name, qty, unit);
    if(!entry){ alert('Item not found in database. Try alternate name or add as custom.'); return; }
    items.push(entry);
    renderList();
    search.value='';
    qtyEl.value='1';
    unitEl.value='serving';
    search.focus();
  });

  // Add custom (name + calories)
  document.getElementById('addCustom').addEventListener('click', ()=>{
    const name = prompt('Custom item name (e.g. "Homemade butter naan")');
    if(!name) return;
    const cal = parseFloat(prompt('Calories for this item (per serving)')) || 0;
    const prot = parseFloat(prompt('Protein (g) for this item (per serving)')) || 0;
    const carb = parseFloat(prompt('Carb (g)')) || 0;
    const fat = parseFloat(prompt('Fat (g)')) || 0;
    items.push({ name, qty:1, unit:'serving', cal, prot, carb, fat });
    renderList();
  });

  // paste multi-line ingredients (one per line "paneer 100g" or "1 roti")
  document.getElementById('pasteBtn').addEventListener('click', async ()=>{
    let txt = '';
    try {
      txt = await navigator.clipboard.readText();
    } catch(e){
      txt = prompt('Paste ingredients (one per line):');
    }
    if(!txt) return;
    const lines = txt.split(/\r?\n/).map(l=>l.trim()).filter(Boolean);
    for(const line of lines){
      // attempt to parse patterns: "100g paneer", "paneer 100g", "1 roti"
      const mNum = line.match(/([\d.]+)\s*(g|gram|grams|ml|cup|serving|pcs|piece|roti|slice)?/i);
      let qty=1, unit='serving', name=line;
      // look for last token that is unit
      const parts = line.split(/\s+/);
      // if last token ends with g or ml or numbers present
      const last = parts[parts.length-1].toLowerCase();
      if(last.match(/^\d+g$|^\d+ml$/)) {
        // e.g., '100g'
        const num = last.replace(/[^\d.]/g,'');
        qty = parseFloat(num) || 1;
        unit = 'g';
        name = parts.slice(0,parts.length-1).join(' ');
      } else if(parts.length>1 && parts[0].match(/^\d+$/)){
        qty = parseFloat(parts[0]);
        name = parts.slice(1).join(' ');
      } else {
        // attempt to split numeric token anywhere
        const numTok = parts.find(p => p.match(/^\d+$/));
        if(numTok){
          qty = parseFloat(numTok);
          name = parts.filter(p=>p!==numTok).join(' ');
        }
      }
      const entry = computeNutritionForEntry(name, qty, unit);
      if(entry) items.push(entry);
    }
    renderList();
  });

  // copy summary
  copySummary.addEventListener('click', ()=>{
    const text = summaryText.textContent + '\n' +
      `Calories: ${sumCalEl.textContent} kcal per serving\n` +
      `Protein: ${sumProtEl.textContent} g per serving\n` +
      `Carbs: ${sumCarbEl.textContent} g per serving\n` +
      `Fat: ${sumFatEl.textContent} g per serving\n`;
    navigator.clipboard?.writeText(text).then(()=> alert('Summary copied to clipboard'));
  });

  // servings change -> update
  servingsEl.addEventListener('input', updateSummary);

  // clear all on mobile sticky button
  document.getElementById('clearAll').addEventListener('click', ()=>{
    if(!confirm('Clear all items?')) return;
    items=[];
    renderList();
  });

  // small escape helper
  function escapeHtml(str){
    return String(str)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;').replace(/'/g,"&#039;");
  }

  // On page load, mobile sticky display
  window.addEventListener('load', ()=>{
    if(window.innerWidth < 700){
      document.getElementById('mobileBar').style.display='flex';
      document.getElementById('openCalc').addEventListener('click', ()=>{
        window.scrollTo({top:0,behavior:'smooth'});
      });
    }
  });

  // Helpful: quick demo when user loads (keeps page friendly)
  // (disabled by default; uncomment if you want a demo item)
  // items.push(computeNutritionForEntry('butter naan',1,'serving'));
  // renderList();

})();