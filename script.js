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
      currentDisplay.indexOf(".") !== -1;
      console.log(`this if is winning!`);
      return;
    }
    showInputOnDisplay(button.value);
    // Used for debugging
    console.log(`button.addEventListener : fired!`);
    console.log(button.value);
    console.log(currentDisplay.indexOf("."));
  });
}

function showInputOnDisplay(number) {
  // If display = "0" then clear the zero and show the numbers input
  if (currentDisplay === "0") {
    document.getElementById("display").innerText = "";
  }
  document.getElementById("display").innerText += number;
  return;
}

function clearDisplay() {
  document.getElementById("display").innerText = "0";
  // Used for debugging
  console.log(`clearDisplay : Display cleared!`);
  return;
}

// if the button value is a decimal, then
// check the display
// see if it contains a decimal point
// then do nothing
// otherwise
// add a decimal point to screen
// else
