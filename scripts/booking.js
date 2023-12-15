/********* Variables*********/
let dailyRate = 35; // rate for the day
let selectedDays = [];
const calculatedCostElement = document.getElementById("calculated-cost");

/********* Changing Colors *********/
function handleDayClick(day) {
    const dayElement = document.getElementById(day);

    if (!dayElement.classList.contains("clicked")) {
        dayElement.classList.add("clicked");
        selectedDays.push(day);
    } else {
        // Removes the day 
        selectedDays = selectedDays.filter(selectedDay => selectedDay !== day);
        dayElement.classList.remove("clicked");
    }

    calculateTotalCost();
}

/********* This part of the JS is to clear days.*********/
function clearDays() {
    selectedDays.forEach(day => {
        const dayElement = document.getElementById(day);
        dayElement.classList.remove("clicked");
    });

    selectedDays = [];
    calculateTotalCost();
}

/********* This part of the JS is to change Rate *********/
function setHalfDayRate() {
    dailyRate = 20;
    document.getElementById("full-day").classList.remove("clicked");
    document.getElementById("half-day").classList.add("clicked");
    calculateTotalCost();
}

function setFullDayRate() {
    dailyRate = 35;
    document.getElementById("half-day").classList.remove("clicked");
    document.getElementById("full-day").classList.add("clicked");
    calculateTotalCost();
}

/********* This part of the Javascript is to calculate amount of money : dailyrate x selected day length*********/
function calculateTotalCost() {
    const totalCost = dailyRate * selectedDays.length;
    calculatedCostElement.textContent = totalCost;
}

/********* Button Functions *********/
document.getElementById("clear-button").addEventListener("click", clearDays);
document.getElementById("half-day").addEventListener("click", setHalfDayRate);
document.getElementById("full-day").addEventListener("click", setFullDayRate);

// To execute the function for each day
const daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday"];
daysOfWeek.forEach(day => {
    document.getElementById(day).addEventListener("click", () => handleDayClick(day));
});

// Initialize the calculated cost
calculateTotalCost();



