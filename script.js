window.onload = function() {
  document.getElementById("display").innerText = "0";
};

document.getElementById("clear").addEventListener("click", clearDisplay);

// Global variables
let currentDisplay = document.getElementById("display").textContent;

// Adding event listener for all number inputs
const buttons = document.querySelectorAll(".inputs");
for (const button of buttons) {
  button.addEventListener("click", function() {
    console.log("currentDisplay: ", currentDisplay);
    console.log(`currentDisplay.indexOf("."): `, currentDisplay.indexOf("."));
    if (button.value === ".") {
      if (currentDisplay.indexOf(".") !== -1) {
        console.log(
          "!== -1 : " +
            currentDisplay.indexOf(".") +
            " " +
            typeof currentDisplay.indexOf(".")
        );
        console.log("currentDisplay: ", currentDisplay);
        return;
      } else if (currentDisplay.indexOf(".") === -1) {
        console.log(
          "=== -1 : " +
            currentDisplay.indexOf(".") +
            " " +
            typeof currentDisplay.indexOf(".")
        );
        console.log("currentDisplay: ", currentDisplay);
        showInputOnDisplay(button.value);
        return;
      }
    }
    showInputOnDisplay(button.value);
    // Used for debugging
    // console.log(`button.addEventListener : fired!`);
    // console.log(button.value);
    // console.log(currentDisplay.indexOf("."));
  });
}

function showInputOnDisplay(number) {
  // If display = "0" then clear the zero and show the numbers input
  if (currentDisplay === "0") {
    currentDisplay = "";
  }
  currentDisplay += number;
  console.log("showInputOnDisplay currentDisplay: ", currentDisplay);
  // return currentDisplay;
}

function clearDisplay() {
  currentDisplay = "0";
  // Used for debugging
  console.log(`clearDisplay : Display cleared!`);
  console.log("currentDisplay: ", currentDisplay);
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
