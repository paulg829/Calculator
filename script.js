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

let firstNumber = "";

let secondNumber = "";

let operator = null;

let currentDisplay = "";

const display =
document.querySelector("#display");


const numbers =
document.querySelectorAll(".number");


const operators =
document.querySelectorAll(".operator");

numbers.forEach(button => {


button.addEventListener("click",()=>{


display.textContent += button.textContent;


});


});

