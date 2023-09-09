const buttons = document.querySelectorAll(".key");
const display = document.querySelector(".display");

let firstNumber, secondNumber, operator;

function clear() {
  firstNumber = secondNumber = operator = "";
  display.textContent = "0";
};
clear();

buttons.forEach((button) => {
  button.addEventListener("mousedown", (event) => {
    const button = event.target;
    button.style.cssText = "opacity: 50%; transform: scale(1.05);";
  });

  button.addEventListener("mouseup", (event) => {
    const button = event.target;
    button.style.cssText = "opacity: 100%; transform: scale(1);";
  });

  button.addEventListener("click", (event) => {
    const button = event.target;

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
  } else if (input === "AC") {
    clear();
  } else if (input === "operator") {
    operator = value;
  } else {
    if (operator) operate();
  }
}

function operate() {
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
  const operators = new RegExp("[+*/-]");
  const numbers = new RegExp("\\d");
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
