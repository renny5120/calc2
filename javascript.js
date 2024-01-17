let num1 = null;
let num = null;
let op = null;
let displayValue;

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a/b;
}

function operate(operator, a, b){
    let value;
    a = parseFloat(a);
    b = parseFloat(b);
    switch(operator){
        case '+':
            value = add(a,b);
            break;
        case '-':
            value = subtract(a,b);
            break;
        case '*':
            value = multiply(a,b);
            break;
        case '/':
            value = divide(a,b);
            break;
    }
    return value;
}

let afterOp = false;
let displayText = document.querySelector('.display');
let buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (e) => {
    let element = e.target;
    const selectedClass = element.parentElement.classList[0];
    switch(selectedClass){
        case 'numbers':

            // Clears display only after input
            if (afterOp){
                displayText.textContent = '';
                afterOp = false;
            }
            
            // Make sure display cannot start with 0
            if (displayText.textContent == '0' && element.textContent === '0') {break;}
            if (displayText.textContent == '' && element.textContent === '0') {break;}

            // adds number to display
            displayText.textContent += element.textContent;
            break;
        case 'operators':
            // Clears display
            if (element.textContent === 'clear') {
                displayText.textContent = '';
                num1 = null;
                num2 = null;
                op = null;
            }else if(element.textContent === '=') {
                num2 = displayText.textContent;
                console.log(`OP: ${op}`);
                console.log(`num1: ${num1}`);
                console.log(`num2: ${num2}`);
                num1 = operate(op,num1,num2);
                console.log(num1);
                displayText.textContent = num1;
                afterOp = true;
            }else {
                if (num1 === null){
                    num1 = displayText.textContent;
                } else {
                    num2 = displayText.textContent;
                    console.log(num2);
                }
                
                op = element.textContent;
                afterOp = true;
                // num1 = num2;
                
            }
            break;
        default:
            // alert(selectedClass);
            break;
    }
});