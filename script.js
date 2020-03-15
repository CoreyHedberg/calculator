window.onload = function() {
  document.getElementById("display").innerText = "0";
};

document.getElementById("clear").addEventListener("click", clearDisplay);

let currentDisplay = document.getElementById("display").innerText;

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
    console.log(operator.value);
  });
}

function showInputOnDisplay(number) {
  if (currentDisplay === "0") {
    currentDisplay = "";
  }
  currentDisplay += number;
  document.getElementById("display").innerText = currentDisplay;
  return;
}

function clearDisplay() {
  currentDisplay = "0";
  document.getElementById("display").innerText = currentDisplay;
  return;
}

// operator function to capture the first number before applying the operator and clearing the screen
