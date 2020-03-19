window.onload = () => {
  document.getElementById("display").innerText = "0";
};

document.getElementById("clear").addEventListener("click", clearDisplay);

// Global variables
let currentDisplay = document.getElementById("display").innerText;
let firstNumber;
let secondNumber;

// Event listener for numbers and decimal point
const buttons = document.querySelectorAll(".inputs");
for (const button of buttons) {
  button.addEventListener("click", () => {
    if (button.value === ".") {
      if (currentDisplay.indexOf(".") !== -1) {
        return;
      }
    }
    showInputOnDisplay(button.value);
  });
}

// Event listener for the operator
const operators = document.querySelectorAll(".operator");
for (const operator of operators) {
  operator.addEventListener("click", () => {
    console.log(`operator.value : ${operator.value}`);
    operatorChosen(operator.value);
  });
}

function showInputOnDisplay(number) {
  if (currentDisplay === "0") {
    currentDisplay = "";
  }
  currentDisplay += number;
  return (document.getElementById("display").innerText = currentDisplay);
}

function operatorChosen(operator) {
  firstNumber = document.getElementById("display").innerText;
  console.log(`firstNumber : ${firstNumber}`);
  console.log(`operator : ${operator}`);
  console.log(`operator type : ${typeof operator}`);
}

function clearDisplay() {
  currentDisplay = "0";
  document.getElementById("display").innerText = currentDisplay;
  return;
}

// operator function to capture the first number before applying the operator and clearing the screen
