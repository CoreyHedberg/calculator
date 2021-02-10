const DISPLAY = document.getElementById("display")
const CLEAR = document.getElementById("clear")
const EQUALS = document.getElementById("equals")
const MEM_RECALL = document.getElementById("mem-recall")
const MEM_SAVE = document.getElementById("mem-save")
const MEM_CLEAR = document.getElementById("mem-clear")
let currentDisplay = DISPLAY.innerText
let firstNumber
let secondNumber
let storedOperator = ""

window.onload = () => {
  DISPLAY.innerText = "0"
}

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "0":
      showInputOnDisplay(0)
      break
    case "1":
      showInputOnDisplay(1)
      break
    case "2":
      showInputOnDisplay(2)
      break
    case "3":
      showInputOnDisplay(3)
      break
    case "4":
      showInputOnDisplay(4)
      break
    case "5":
      showInputOnDisplay(5)
      break
    case "6":
      showInputOnDisplay(6)
      break
    case "7":
      showInputOnDisplay(7)
      break
    case "8":
      showInputOnDisplay(8)
      break
    case "9":
      showInputOnDisplay(9)
      break
    case ".":
      showInputOnDisplay(".")
      break
    case "Escape":
      clearDisplay()
      break
    case "/":
      operatorChosen("/")
      break
    case "*":
      operatorChosen("*")
      break
    case "-":
      operatorChosen("-")
      break
    case "+":
      operatorChosen("+")
      break
    case "Enter":
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
