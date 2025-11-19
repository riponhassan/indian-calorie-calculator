function addItem() {
    const foodName = document.getElementById("search").value.toLowerCase().trim();
    const qty = Number(document.getElementById("qty").value);
    const unit = document.getElementById("unit").value;

    if (!foodDB[foodName]) {
        alert("Food not found in database: " + foodName);
        return;
    }

    let item = foodDB[foodName];

    // multiply nutrition
    let cal = item.cal * qty;
    let prot = item.prot * qty;
    let carb = item.carb * qty;
    let fat = item.fat * qty;

    let row = `
        <tr>
            <td>${foodName}</td>
            <td>${cal}</td>
            <td>${prot}</td>
            <td>${carb}</td>
            <td>${fat}</td>
        </tr>
    `;

    document.querySelector("#list tbody").innerHTML += row;

    updateSummary();
}

function updateSummary() {
    let rows = document.querySelectorAll("#list tbody tr");

    let totalCal = 0, totalProt = 0, totalCarb = 0, totalFat = 0;

    rows.forEach(r => {
        let td = r.querySelectorAll("td");
        totalCal += Number(td[1].innerText);
        totalProt += Number(td[2].innerText);
        totalCarb += Number(td[3].innerText);
        totalFat += Number(td[4].innerText);
    });

    document.getElementById("summary").innerHTML =
        `${totalCal} kcal • Prot ${totalProt}g • Carb ${totalCarb}g • Fat ${totalFat}g`;
}