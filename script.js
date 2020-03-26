window.onload = () => {
  document.getElementById("display").innerText = "0";
};

document.getElementById("clear").addEventListener("click", clearDisplay);
document.getElementById("equals").addEventListener("click", performCalculation);

document.getElementById("mem-recall").addEventListener("click", () => {
  numberRetreived = localStorage.getItem("stored number");
  document.getElementById("display").innerText = numberRetreived;
});

document.getElementById("mem-save").addEventListener("click", () => {
  let numberStored = document.getElementById("display").innerText;
  localStorage.setItem("stored number", numberStored);
});

document.getElementById("mem-clear").addEventListener("click", () => {
  localStorage.clear();
});

// Global variables
let currentDisplay = document.getElementById("display").innerText;
let firstNumber;
let secondNumber;
let storedOperator = "";

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

const operators = document.querySelectorAll(".operator");
for (const operator of operators) {
  operator.addEventListener("click", () => {
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
  storedOperator = operator;
  clearDisplay();
}

function performCalculation() {
  let calc = 0;
  secondNumber = document.getElementById("display").innerText;

  switch (storedOperator) {
    case "/":
      calc = parseFloat(firstNumber) / parseFloat(secondNumber);
      break;
    case "*":
      calc = parseFloat(firstNumber) * parseFloat(secondNumber);
      break;
    case "-":
      calc = parseFloat(firstNumber) - parseFloat(secondNumber);
      break;
    case "+":
      calc = parseFloat(firstNumber) + parseFloat(secondNumber);
      break;
  }
  document.getElementById("display").innerText = calc.toLocaleString();
  return;
}

function clearDisplay() {
  currentDisplay = "0";
  document.getElementById("display").innerText = currentDisplay;
  return;
}
