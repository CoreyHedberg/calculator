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
    // check to see if the button clicked is a decimal poiint
    if (button.value === ".") {
      // if the decimal has already been previously selected, then ignore the decimal point input
      if (currentDisplay.indexOf(".") !== -1) {
        return;
      } else if (currentDisplay.indexOf(".") === -1) {
        // if the decimal point has not been previously selected, then add a decimal point on the screen
        showInputOnDisplay(button.value);
        return;
      }
    }
    // add the number selected on the screen
    showInputOnDisplay(button.value);
  });
}

// function to show the numbers and decimal point selected on the calculator
function showInputOnDisplay(number) {
  if (currentDisplay === "0") {
    currentDisplay = "";
  }
  // add the inputs together to display on the screen
  currentDisplay += number;
  // display the inputs
  document.getElementById("display").innerText = currentDisplay;
  return;
}

// function to reset the display to "0"
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
