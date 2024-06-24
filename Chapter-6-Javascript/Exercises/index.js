// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get references to DOM elements
    const calculateBtn = document.getElementById('calculateBtn');
    const petrolCostInput = document.getElementById('petrolCost');
    const litersPurchasedInput = document.getElementById('litersPurchased');
    const totalCostDisplay = document.getElementById('totalCost');

    // Add click event listener to the calculate button
    calculateBtn.addEventListener('click', function () {
        // Retrieve the values entered by the user and convert them to numbers
        const petrolCost = parseFloat(petrolCostInput.value);
        const litersPurchased = parseFloat(litersPurchasedInput.value);

        // Calculate the total cost of petrol purchased
        const totalCost = petrolCost * litersPurchased;

        // Display the total cost on the page
        totalCostDisplay.textContent = `Total cost: $${totalCost.toFixed(2)}`;
    });
});

