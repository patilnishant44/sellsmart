document.getElementById("calculateBtn").addEventListener("click", function() {
    const travelExpense = parseFloat(document.getElementById("travelExpense").value);
    const marketRate = parseFloat(document.getElementById("marketRate").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if (isNaN(travelExpense) || isNaN(marketRate) || isNaN(weight)) {
        alert("Please fill in all the fields with valid numbers.");
        return;
    }

    // Calculate total revenue
    const revenue = marketRate * weight;

    // Calculate profit or loss
    const profitOrLoss = revenue - travelExpense;

    // Display result
    let resultText = `Total Revenue: ₹${revenue.toFixed(2)}<br>`;
    if (profitOrLoss > 0) {
        resultText += `Profit: ₹${profitOrLoss.toFixed(2)}`;
    } else if (profitOrLoss < 0) {
        resultText += `Loss: ₹${Math.abs(profitOrLoss).toFixed(2)}`;
    } else {
        resultText += `No Profit, No Loss.`;
    }

    document.getElementById("result").innerHTML = resultText;
});
