const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const msg = document.querySelector("#msg");

const checkBtn = document.querySelector("#check");
checkBtn.addEventListener("click", handlePrediction);

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", reset);

function reset() {
    dayInput.value = ""; // Clear the day input
    monthInput.value = ""; // Clear the month input
    yearInput.value = ""; // Clear the year input
    msg.textContent = ""; // Clear the message
}

function isValidDate(day, month, year) {
    return (
        Number.isInteger(day) && Number.isInteger(month) && Number.isInteger(year) &&
        day >= 1 && day <= 31 &&
        month >= 1 && month <= 12 &&
        year >= 1950 && year <= 2024
    );
}


function handlePrediction() {
    let day = parseInt(dayInput.value);
    let month = parseInt(monthInput.value);
    let year = parseInt(yearInput.value);

    if (isValidDate(day, month, year)) {
        const queenNumber = calculateQueenNumber(day, month, year);
        const predictionMessage = checkMarriagePrediction(queenNumber);

        // Display the message in the HTML
        msg.textContent = `${predictionMessage}`;
    } else {
        // Display an error message if the input is not valid
        msg.textContent = "Please enter valid date values.";
    }
}

function calculateKingNumber(day, month) {
    return parseInt(day) + parseInt(month);
}


function calculatePathNumber(date) {
    let digits = Array.from(String(date), Number); // Convert the string to an array of digits
    let sum = digits.reduce((acc, digit) => acc + digit, 0);
    return sum % 9 || 9; // Repeat until it becomes a single-digit number
}



function calculateQueenNumber(day, month, year) {
    let kingNumber = calculateKingNumber(day, month);
    let pathNumber = calculatePathNumber(day + month + year);

    let queenNumber = kingNumber + pathNumber;
    while (queenNumber > 9) {
        queenNumber = calculatePathNumber(queenNumber.toString());
    }

    return queenNumber;
}

function checkMarriagePrediction(queenNumber) {
    if ([6, 4, 1, 2].includes(queenNumber)) {
        return "Your Marriage will be Love Marriage";
    } else {
        return "Your Marriage will a Arrange Marriage";
    }
}


const container = document.getElementById("gradientContainer");

container.addEventListener("mousemove", function (event) {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;
    
    const gradientDirection = (Math.atan2(y, x) + Math.PI) * (180 / Math.PI);

    container.style.background = `linear-gradient(${gradientDirection}deg, #240200 0, #00d4ff 48%, #f626e4 100%)`;
});