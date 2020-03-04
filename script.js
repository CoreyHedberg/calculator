window.onload = function() {
  document.getElementById("display").innerText = "0";
};

document.getElementById("clear").addEventListener("click", clearDisplay);

function next() {
  let num = 12335.45;
  document.getElementById("display").innerText = num.toLocaleString();
}

setTimeout(next, 1000);

function clearDisplay() {
  document.getElementById("display").innerText = "0";
  // Used for debugging
  console.log("clearDisplay fired");
}
