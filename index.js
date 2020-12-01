window.onload = () => {
  document.getElementById("display").innerText = "0"
}

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case 96:
      showInputOnDisplay(0)
      break
    case 97:
      showInputOnDisplay(1)
      break
    case 98:
      showInputOnDisplay(2)
      break
    case 99:
      showInputOnDisplay(3)
      break
    case 100:
      showInputOnDisplay(4)
      break
    case 101:
      showInputOnDisplay(5)
      break
    case 102:
      showInputOnDisplay(6)
      break
    case 103:
      showInputOnDisplay(7)
      break
    case 104:
      showInputOnDisplay(8)
      break
    case 105:
      showInputOnDisplay(9)
      break
    case 110:
      showInputOnDisplay(".")
      break
    case 27:
      clearDisplay()
      break
    case 111:
      operatorChosen("/")
      break
    case 106:
      operatorChosen("*")
      break
    case 109:
      operatorChosen("-")
      break
    case 107:
      operatorChosen("+")
      break
    case 13:
      performCalculation()
      break
  }
})

document.getElementById("clear").addEventListener("click", clearDisplay)
document.getElementById("equals").addEventListener("click", performCalculation)

document.getElementById("mem-recall").addEventListener("click", () => {
  numberRetreived = localStorage.getItem("stored number")
  document.getElementById("display").innerText = numberRetreived
})

document.getElementById("mem-save").addEventListener("click", () => {
  let numberStored = document.getElementById("display").innerText
  localStorage.setItem("stored number", numberStored)
  clearDisplay()
})

document.getElementById("mem-clear").addEventListener("click", () => {
  localStorage.clear()
})

let currentDisplay = document.getElementById("display").innerText
let firstNumber
let secondNumber
let storedOperator = ""

const buttons = document.querySelectorAll(".inputs")
for (const button of buttons) {
  button.addEventListener("click", () => {
    if (button.value === ".") {
      if (currentDisplay.indexOf(".") !== -1) {
        return
      }
    }
    showInputOnDisplay(button.value)
  })
}

const operators = document.querySelectorAll(".operator")
for (const operator of operators) {
  operator.addEventListener("click", () => {
    operatorChosen(operator.value)
  })
}

function showInputOnDisplay(number) {
  if (currentDisplay === "0") {
    currentDisplay = ""
  }
  currentDisplay += number
  return (document.getElementById("display").innerText = currentDisplay)
}

function operatorChosen(operator) {
  firstNumber = document.getElementById("display").innerText
  storedOperator = operator
  clearDisplay()
}

function performCalculation() {
  let calculation = 0
  secondNumber = document.getElementById("display").innerText

  switch (storedOperator) {
    case "/":
      calculation = parseFloat(firstNumber) / parseFloat(secondNumber)
      break
    case "*":
      calculation = parseFloat(firstNumber) * parseFloat(secondNumber)
      break
    case "-":
      calculation = parseFloat(firstNumber) - parseFloat(secondNumber)
      break
    case "+":
      calculation = parseFloat(firstNumber) + parseFloat(secondNumber)
      break
  }
  document.getElementById("display").innerText = calculation.toLocaleString()
  return
}

function clearDisplay() {
  currentDisplay = "0"
  document.getElementById("display").innerText = currentDisplay
  return
}
