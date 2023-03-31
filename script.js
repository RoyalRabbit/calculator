// ==========================================================================================


// =============================================
// Run Code
// =============================================



// Initialize Variables
let numberOne = 0;
let numberTwo = 0;
let operatorSign = "";
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button')

//Console log testing
console.log(add(1,3))
console.log(subtract(1,3))
console.log(multiply(1,3))
console.log(divide(1,3))



// Create display text to show on webpage each time button is pressed
// let displayText = document.createTextNode(`${add(1,3)}`);
// display.appendChild(displayText);

buttons.forEach(obj=>{
    obj.addEventListener('click', event=>{
        let value=event.target.value
        console.log(display.firstChild)
        let displayText = document.createTextNode(`${value}`)
        display.appendChild(displayText)
    })
})













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