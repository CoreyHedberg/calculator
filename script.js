window.onload = function() {
  document.getElementById("display").innerText = "0";
};

document.getElementById("clear").addEventListener("click", clearDisplay);

// Global variables
let currentDisplay = document.getElementById("display").innerText;

// Adding event listener for all number inputs
const buttons = document.querySelectorAll(".inputs");
for (const button of buttons) {
  button.addEventListener("click", function() {
    if (button.value === ".") {
      if (currentDisplay.indexOf(".") !== -1) {
        return;
      } else if (currentDisplay.indexOf(".") === -1) {
        showInputOnDisplay(button.value);
        return;
      }
    }
    showInputOnDisplay(button.value);
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

// if the button value is a decimal, then
// check the display
// see if it contains a decimal point
// if it does contain a decimal point
// then do nothing
// otherwise
// add a decimal point to screen
// else
