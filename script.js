// ==========================================================================================


// =============================================
// Run Code
// =============================================



// Initialize Variables
let numberOne = 0;
let numberTwo = 0;
const operators = ['+', '-', '*', '/']
let operatorSign = "";
const display = document.querySelector('.display');
let displayValue = 0;
// Set display to show 0 upon first loading
display.innerText = displayValue;
const buttons = document.querySelectorAll('button');

//Console log testing
console.log(add(1,3))
console.log(subtract(1,3))
console.log(multiply(1,3))
console.log(divide(1,3))



// Create display text to show on webpage each time button is pressed

buttons.forEach(obj=>{
    // Add event listener on click
    obj.addEventListener('click', event=>{
        // Get value of the button that was clicked
        let value=event.target.value;
        
        // Check if button clicked was an operator
        if (operators.includes(value)) {
            operatorSign=(value);
            console.log(operatorSign);
            display.innerText = '';
        }
        // Add a string child element with the value of the button clicked
        let displayText = document.createTextNode(`${value}`)
        display.appendChild(displayText)
        displayValue=Number(display.innerText);
    })
})













// =============================================
// End of Run Code
// =============================================


// ==========================================================================================


// =============================================
// Function List
// =============================================

//Function to add two numbers
function add(num1, num2) {
    return num1 + num2;
};


//Function to Subtract two numbers
function subtract(num1, num2) {
    return num1 - num2;
};


// Function to multiply two numbers
function multiply(num1, num2) {
    return num1 * num2;
};


// Function to divide two numbers
function divide(num1, num2) {
    return num1 / num2;
};

// Function for operation
function operate(operator, num1, num2) {
    switch (operator) {
        case '*':
            return multiply(num1,num2);
        case '-':
            return subtract(num1,num2);
        case '+':
            return add(num1,num2);
        case '/':
            return divide(num1,num2);
        default:
            return 'Not valid operator'
        

        
    }
}

// =============================================
// End of Function List
// =============================================