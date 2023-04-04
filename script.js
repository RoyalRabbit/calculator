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
let clearNum = 1;
let lastClicked;

//Console log testing
// console.log(add(1,3))
// console.log(subtract(1,3))
// console.log(multiply(1,3))
// console.log(divide(1,3))



// Create display text to show on webpage each time button is pressed
// Add event listeners on each button to watch for a click
buttons.forEach(obj=>{
    obj.addEventListener('click', event=>{

        // Get value of the button that was clicked
        let value=event.target.value;
        
        // Clear values and display if AC button is pressed
        if (value==='clear') cleared();

        // Check if button clicked was an operator 
        if (operators.includes(value)) {


            // Update displayValue to the currently displayed number and store it in numberOne
            displayValue=Number(display.innerText);

            // Store displayValue either in num1 or num2
            if (!numberOne) {
                numberOne=displayValue;
                console.log(numberOne)
            } 
            else if (!operators.includes(lastClicked) && lastClicked != '=') { //Check for operator switching
                numberTwo=displayValue;
                numberOne = operate(operatorSign,numberOne,numberTwo);
                display.innerText=numberOne;
            }

            // Store the clicked operator value
            operatorSign=(value);

            // Clear the innerText in anticipation for next number 
            clearNum = 1;
        }

        // Add a string child element with the value of the button clicked if button was a number
        if (!isNaN(Number(value)) || (value === '.' && !display.innerText.includes('.'))) {

            // If clearNum is 0 or display contains only 0 reset the innerText to a blank string before adding new text nodes
            if (clearNum || display.innerText === '0') {
                display.innerText = ''
            }
            // Create text node to add onto display
            let displayText = document.createTextNode(`${value}`);
            display.appendChild(displayText); // Adds the created textnode to end of displayed number
            
            // Add a 0 in front if first character is a decimal
            if (display.firstChild.textContent==='.') display.prepend('0')
            clearNum = 0;
        }


        displayValue=Number(display.innerText);

        // Calculate when = button is pressed
        if (value==='=' && !operators.includes(lastClicked)) {
            if (!numberTwo || !isNaN(Number(lastClicked))) {
                numberTwo = displayValue;
            }

            // Run the desired operation with numberOne and numberTwo
            let answer = operate(operatorSign, numberOne, numberTwo);
            // Set numberOne as the answer for further calculations if desired
            numberOne = answer;
            // Change the display to show answer
            display.innerText = numberOne;
            console.log(numberOne);
            clearNum = 1;
        }

        if (value==='backspace' && display.textContent) {
            display.removeChild(display.lastChild);
        }

        // Store value in lastClicked for operation switching
        lastClicked = value;

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
            if (num2 === 0)
                return 'Error divide by zero'
            return divide(num1,num2);
        default:
            return 'Not valid operator'   
    }
}
// Function for clearing the calculator and resetting value
function cleared() {
    display.innerText = 0;
    operatorSign = '';
    numberOne = 0;
    numberTwo = 0;
    clearNum = 1;
}


// =============================================
// End of Function List
// =============================================