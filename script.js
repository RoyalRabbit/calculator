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
// Add event listeners on each button to watch for a click
buttons.forEach(obj=>{
    obj.addEventListener('click', event=>{

        // Get value of the button that was clicked
        let value=event.target.value;
        
        // Clear display if A/C is pressed and reset values
        if (value === 'clear') {
            display.innerText = 0;
            operatorSign = '';
            num1 = 0;
            num2 = 0;
        }
 
        // Check if button clicked was an operator
        if (operators.includes(value)) {

            // Store the clicked operator value
            operatorSign=(value);
            console.log(operatorSign);

            // Update displayValue to the currently displayed number
            displayValue=Number(display.innerText);

            // Store displayValue either in num1 or num2
            if (!numberOne) {
                numberOne=displayValue;
                console.log('numberOne');
            } else if (!numberTwo) {
                numberTwo=displayValue;
                console.log('numberTwo');
            }

            // Clear the innerText in anticipation for next number 
            display.innerText = ' ';
        }

        // Add a string child element with the value of the button clicked if button was a number
        if (!isNaN(Number(value))) {

            // If display value is 0 and a number is pressd, reset the innerText to a blank string before adding new text nodes
            if (displayValue===0) {
                display.innerText = ''
            }
            let displayText = document.createTextNode(`${value}`);
            display.appendChild(displayText);
        }


        displayValue=Number(display.innerText);

        if (value==='=') {
            numberTwo = displayValue;
            let answer = operate(operatorSign, numberOne, numberTwo);
            console.log(answer);
            
        }
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