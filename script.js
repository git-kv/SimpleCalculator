let var1 = "";
let var2 = "";
let operator = "";
let result = "";

const numberButtons = document.querySelectorAll('.number-btn');
const specialButtons = document.querySelectorAll('.special-btn');
const operatorButtons = document.querySelectorAll('.op-btn');
let resultDisplay = document.querySelector('.disp-1');

numberButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        if (var1 == "" && var2 == "" && operator == "") {
            var1 = button.innerHTML;
        }
        else if (operator == "") {
            if (var1.includes(".") && button.innerHTML == "."){
                console.log("Only one decimal per variable allowed.");
            }
            else {
                var1 += button.innerHTML;
            }
        }
        else {
            if (var2.includes(".") && button.innerHTML == ".") {
                console.log("Only one decimal per variable allowed.");
            }
            else {
                var2 += button.innerHTML
            }
        }
        setCalculationDisplay();
    });
});

specialButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        if (button.innerHTML == "AC"){
            clearEverything();
        }
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        tmpOperator = button.innerHTML;
        if (var1 == "") {

        }
        else if (tmpOperator == "=" && var1 != "" && var2 != ""){
            doMath();
        }
        else if (operator == "") {
            operator = button.innerHTML;
            setCalculationDisplay();
        }
        else if (var1 != "" && operator != "" && var2 != ""){
            doMath();
            var1 = result;
            operator = button.innerHTML;
            var2 = "";
            setCalculationDisplay();
        }
        else if (result != "") {
            operator = button.innerHTML
            var1 = result;
            var2 = "";
            setCalculationDisplay();
        }
    });
});

function setCalculationDisplay() {
    let calculationDisplay = document.querySelector('.disp-2');
    calculationDisplay.innerHTML = `${var1} ${operator} ${var2}`;
}

function setResultDisplay() {
    if (result.toString().length > 12 ) {
        resultDisplay.innerHTML = "OVERFLOW"
    }
    else {
        resultDisplay.innerHTML = `${result}`;
    }
}

function doMath() {
    var1 = var1*1;
    var2 = var2*1;
    if (operator == "+") {
        result = var1 + var2;
        result = +result.toFixed(7);
        setResultDisplay();
    }
    else if (operator == "-") {
        result = var1 - var2;
        result = +result.toFixed(7);
        setResultDisplay();
    }
    else if (operator == "*") {
        result = var1 * var2;
        result = +result.toFixed(7);
        setResultDisplay();
    }
    else if (operator == "/") {
        if (var2 == 0) {
            clearEverything();
            resultDisplay.innerHTML = "Don't do that!";
        }
        else {
            result = var1 / var2;
            result = +result.toFixed(7);
            setResultDisplay();
        }
    }
}

function clearEverything() {
    var1 = "";
    var2 = "";
    operator = "";
    result = "";
    setCalculationDisplay();
    setResultDisplay();
}