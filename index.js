window.onload = () => {
  document.getElementById("display").innerText = "0"
}

let currentDisplay = DISPLAY.innerText
let firstNumber
let secondNumber
let storedOperator = ""
const DISPLAY = document.getElementById("display")
const CLEAR = document.getElementById("clear")
const EQUALS = document.getElementById("equals")
const MEM_RECALL = document.getElementById("mem-recall")
const MEM_SAVE = document.getElementById("mem-save")
const MEM_CLEAR = document.getElementById("mem-clear")

document.addEventListener("keydown", (event) => {
  switch (event.which) {
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

CLEAR.addEventListener("click", clearDisplay)
EQUALS.addEventListener("click", performCalculation)

MEM_RECALL.addEventListener("click", () => {
  numberRetreived = localStorage.getItem("stored number")
  DISPLAY.innerText = numberRetreived
})

MEM_SAVE.addEventListener("click", () => {
  let numberStored = DISPLAY.innerText
  localStorage.setItem("stored number", numberStored)
  clearDisplay()
})

MEM_CLEAR.addEventListener("click", () => {
  localStorage.clear()
})

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
  return (DISPLAY.innerText = currentDisplay)
}

function operatorChosen(operator) {
  firstNumber = DISPLAY.innerText
  storedOperator = operator
  clearDisplay()
}

function performCalculation() {
  let calculation = 0
  secondNumber = DISPLAY.innerText

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
  DISPLAY.innerText = calculation.toLocaleString()
  return
}

function clearDisplay() {
  currentDisplay = "0"
  DISPLAY.innerText = currentDisplay
  return
}
