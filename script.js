// ==========================================================================================


// =============================================
// Run Code
// =============================================



// Initialize Variables
let numberOne = 0;
let numberTwo = 0;
let operatorSign = "";
const display = document.querySelector('.display');


//Console log testing
console.log(add(1,3))
console.log(subtract(1,3))
console.log(multiply(1,3))
console.log(divide(1,3))

let displayText = document.createTextNode(`${add(1,3)}`)
display.appendChild(displayText)









// =============================================
// End of Run Code
// =============================================


// ==========================================================================================


// =============================================
// Function List
// =============================================

function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

// =============================================
// End of Function List
// =============================================