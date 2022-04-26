const buttons = document.querySelectorAll(".key");
const display = document.querySelector(".display");

let firstNumber = (secondNumber = operator = "");

buttons.forEach((button) => {
  button.addEventListener("mousedown", () => {
    button.style.cssText = "background-color: white; transform: scale(1.05);";
  });

  button.addEventListener("mouseup", () => {
    button.style.cssText = "background-color: ; transform: scale(1);";
  });

  button.addEventListener("click", () => {
    mainProcess(button);
  });
});

function mainProcess(button) {
  const input = checkButton(button);
  const value = button.textContent;

  if (input === "number" && !operator) {
    firstNumber += value;
    display.textContent = firstNumber;
  } else if (input === "number" && operator) {
    secondNumber += value;
    display.textContent = secondNumber;
    console.log(secondNumber);
  } else if (input === "AC") {
    firstNumber = secondNumber = operator = "";
    display.textContent = "";
  } else if (input === "operator") {
    operator = value;
  } else {
    makeOperation();
  }
}

function makeOperation() {
  if (!secondNumber) {
    secondNumber = firstNumber;
  }

  if (operator === "+") {
    firstNumber = parseInt(firstNumber) + parseInt(secondNumber);
  } else if (operator === "-") {
    firstNumber = firstNumber - secondNumber;
  } else if (operator === "*") {
    firstNumber = firstNumber * secondNumber;
  } else {
    firstNumber = firstNumber / secondNumber;
  }
  secondNumber = operator = "";
  display.textContent = firstNumber;
}

function checkButton(button) {
  const operators = /\+|-|\*|\/|\^/;
  const numbers = /\d/;
  const value = button.textContent;
  let result;
  if (operators.test(value)) {
    result = "operator";
  } else if (numbers.test(value)) {
    result = "number";
  } else if (value === "=") {
    result = "equal";
  } else {
    result = "AC";
  }

  return result;
}
