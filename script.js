window.onload = () => {
  document.getElementById("display").innerText = "0";
};

document.getElementById("clear").addEventListener("click", clearDisplay);
document.getElementById("equals").addEventListener("click", performCalculation);

document.getElementById("mem-save").addEventListener("click", () => {
  let numberStored = document.getElementById("display").innerText;
  localStorage.setItem(numberStored);
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
  storedOperator = operator;
  clearDisplay();
  // Used for debugging
  console.log(`firstNumber : ${firstNumber}`);
  console.log(`operator : ${operator}`);
  console.log(`operator type : ${typeof operator}`);
  console.log(`storedOperator : ${storedOperator}`);
  console.log(`storedOperator : ${typeof storedOperator}`);
}

function performCalculation() {
  console.log(`** performCalculation : fired **`);
  let calc = 0;
  secondNumber = document.getElementById("display").innerText;
  // Used for debugging
  console.log(`performCalculation firstNumber : ${firstNumber}`);
  console.log(`performCalculation secondNumber : ${secondNumber}`);
  console.log(`performCalculation : ${storedOperator}`);

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
  // Used for debugging
  console.log(`calc : ${calc}`);
  console.log(`calc typeof : ${typeof calc}`);
  return;
}

function clearDisplay() {
  currentDisplay = "0";
  document.getElementById("display").innerText = currentDisplay;
  return;
}
