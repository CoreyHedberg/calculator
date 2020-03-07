window.onload = function() {
  document.getElementById("display").innerText = "0";
};

document.getElementById("clear").addEventListener("click", clearDisplay);

// Adding event listener for all number inputs
const buttons = document.querySelectorAll(".inputs");
for (const button of buttons) {
  button.addEventListener("click", function() {
    showInputOnDisplay(button.value);
    // Used for debugging
    console.log(button.value);
  });
}

function showInputOnDisplay(number) {
  // If display = "0" then clear the zero and show the numbers input
  let currentDisplay = document.getElementById("display").innerText;
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
