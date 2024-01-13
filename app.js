const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const msg = document.querySelector("#msg");


const checkBtn = document.querySelector("#check");
checkBtn.addEventListener("click", handlePrediction);

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", reset);

function reset() {
    dayInput.value = "";
    monthInput.value = "";
    yearInput.value = "";
    msg.textContent = "";
}

function isValidDate(day, month, year) {
    return (
        Number.isInteger(day) && !isNaN(day) &&
        Number.isInteger(month) && !isNaN(month) &&
        Number.isInteger(year) && !isNaN(year) &&
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
        openPopup(predictionMessage);

    } else {
        msg.textContent = "Please enter valid date values.";
    }
}

function calculateKingNumber(day, month) {
    return parseInt(day) + parseInt(month);
}

function calculatePathNumber(date) {
    const digits = Array.from(String(date), Number);
    const sum = digits.reduce((acc, digit) => acc + digit, 0);
    return sum % 9 || 9;
}

function calculateQueenNumber(day, month, year) {
    const kingNumber = calculateKingNumber(day, month);
    const pathNumber = calculatePathNumber(day + month + year);

    let queenNumber = kingNumber + pathNumber;
    while (queenNumber > 9) {
        queenNumber = calculatePathNumber(queenNumber.toString());
    }

    return queenNumber;
}

function checkMarriagePrediction(queenNumber) {
    return [6, 4, 1, 2].includes(queenNumber) ? "Congratulations, Your Marriage will be a Love Marriage" : "Your Marriage will be a Arrange Marriage";
}



const container = document.getElementById("gradientContainer");

container.addEventListener("mousemove", function (event) {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    const gradientDirection = (Math.atan2(y, x) + Math.PI) * (180 / Math.PI);

    container.style.background = `linear-gradient(${gradientDirection}deg, #240200 0, #00d4ff 48%, #f626e4 100%)`;
});

//POPUP MESSAGE
function openPopup(message) {
    const popup = document.getElementById('customPopup');

    // Set the message
    popup.querySelector('#popupMessage').textContent = message;

    // Show the popup
    popup.style.display = 'block';

    
}


function closePopup() {
    const popup = document.getElementById('customPopup');
    

    // Hide the popup
    popup.style.display = 'none';
}
