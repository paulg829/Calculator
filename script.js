function add(a,b){

    return a+b;

}


function subtract(a,b){

    return a-b;

}


function multiply(a,b){

    return a*b;

}


function divide(a,b){

    if(b === 0){

        return "Invalid";

    }

    return a/b;

}

function operate(operator,a,b){


    if(operator === "+"){

        return add(a,b);

    }


    else if(operator === "-"){

        return subtract(a,b);

    }


    else if(operator === "*"){

        return multiply(a,b);

    }


    else if(operator === "/"){

        return divide(a,b);

    }

}

let firstNumber = null;

let secondNumber = null;

let currentOperator = null;

let currentDisplay = "";

let shouldResetDisplay = false;

const display =
document.querySelector("#display");


const numbers =
document.querySelectorAll(".number");


const operators =
document.querySelectorAll(".operator");

const equals = document.querySelector("#equals");

const clear = document.querySelector("#clear");

const backspace = document.querySelector("#backspace");


backspace.addEventListener("click", () => {


    display.textContent =
    display.textContent.slice(0,-1);


});


numbers.forEach(button => {

    button.addEventListener("click", () => {
        
        if (button.textContent === ".") {


            if (display.textContent.includes(".")) {

                return;

            }

        }


        if (shouldResetDisplay) {

            display.textContent = "";

            shouldResetDisplay = false;

        }


        display.textContent += button.textContent;


    });

});


operators.forEach(button => {

    button.addEventListener("click", () => {


        if (display.textContent === "") {

            return;

        }


        if (firstNumber !== null && currentOperator !== null) {


            secondNumber = Number(display.textContent);


            let result = operate(
                currentOperator,
                firstNumber,
                secondNumber
            );


            display.textContent = result;


            firstNumber = result;


        }

        else {

            firstNumber = Number(display.textContent);

        }


        currentOperator = button.textContent;


        shouldResetDisplay = true;


    });

});


equals.addEventListener("click", () => {


    if (
        firstNumber === null ||
        currentOperator === null ||
        display.textContent === ""
    ) {

        return;

    }


    secondNumber = Number(display.textContent);


    let result = operate(
        currentOperator,
        firstNumber,
        secondNumber
    );


    display.textContent = Math.round(result * 100000) / 100000;


    firstNumber = null;

    secondNumber = null;

    currentOperator = null;


    shouldResetDisplay = true;


});


clear.addEventListener("click", () => {


    display.textContent = "";

    firstNumber = null;

    secondNumber = null;

    currentOperator = null;

    shouldResetDisplay = null;


});

document.addEventListener("keydown", (event)=>{


    const key = event.key;


    if (
        key >= "0" &&
        key <= "9"
    ) {

        display.textContent += key;

    }


    if (
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/"
    ) {

        document
        .querySelector(`[class="operator"]`)
    }


    if(key === "Enter") {

        equals.click();

    }


    if(key === "Backspace") {

        backspace.click();

    }


});