// chaiCalculator/
function calculateChaiIngredients() {
    // Prompt user for number of cups
    const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
    const numberOfCups = parseFloat(input);

    // Validate input
    if (isNaN(numberOfCups) || numberOfCups <= 0) {
        console.log("Please enter a valid positive number for cups of Chai.");
        return;
    }
    
    // Calculate ingredients
    const water = 200 * numberOfCups;
    const milk = 50 * numberOfCups;
    const teaLeaves = 1 * numberOfCups;
    const sugar = 2 * numberOfCups;
    
    // Display results
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${water} ml`);
    console.log(`Milk: ${milk} ml`);
    console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${sugar} teaspoons`);
    console.log("Enjoy your Chai Bora!");
}

// Call the function to execute
calculateChaiIngredients();