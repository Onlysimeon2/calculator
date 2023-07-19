let result = document.getElementById("result");
let currentNumber = "";
let operator = "";
let previousNumber = "";

function appendNumber(num) {
  currentNumber += num;
  result.value = currentNumber;
}

function clearResult() {
  result.value = "";
  currentNumber = "";
  operator = "";
  previousNumber = "";
}

function negate() {
  currentNumber = -parseFloat(currentNumber);
  result.value = currentNumber;
}

function percentage() {
  currentNumber = parseFloat(currentNumber) / 100;
  result.value = currentNumber;
}

function operate(op) {
  operator = op;
  previousNumber = currentNumber;
  currentNumber = "";
}

function calculate() {
  let num1 = parseFloat(previousNumber);
  let num2 = parseFloat(currentNumber);
  let answer = 0;

  switch (operator) {
    case "+":
      answer = num1 + num2;
      break;
    case "-":
      answer = num1 - num2;
      break;
    case "*":
      answer = num1 * num2;
      break;
    case "/":
      answer = num1 / num2;
      break;
  }

  result.value = answer;
  currentNumber = answer.toString();
  operator = "";
  previousNumber = "";
}