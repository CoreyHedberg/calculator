window.onload = function() {
  document.getElementById("display").innerText = "0";
};

document.getElementById("clear").addEventListener("click", clearDisplay);

// Adding event listener for all number inputs
const buttons = document.querySelectorAll(".inputs");
for (const button of buttons) {
  button.addEventListener("click", e => {
    e.target.value = document.getElementById("display").innerText;
    // Used for debugging
    // console.log(button);
    console.log(e.target.id);
    console.log(e.target.button);
    console.log(button);
  });
}

function clearDisplay() {
  document.getElementById("display").innerText = "0";
  // Used for debugging
  console.log("clearDisplay fired");
  return;
}
