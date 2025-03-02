document.addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector(".display");
  let currentInput = "";
  let previousInput = "";
  let operator = "";

  document.querySelector(".buttons").addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName === "BUTTON") {
      const action = target.classList.contains("btn-number")
        ? "number"
        : target.classList.contains("btn-operation")
        ? "operation"
        : target.classList.contains("btn-equal")
        ? "equal"
        : "";

      if (action) {
        handleInput(target.id, action);
      }
    }
  });

  function handleInput(value, action) {
    switch (action) {
      case "number":
        currentInput += value;
        updateDisplay(currentInput);
        break;
      case "operation":
        if (value === "clear") {
          clearAll();
        } else if (value === "backspace") {
          currentInput = currentInput.slice(0, -1);
          updateDisplay(currentInput);
        } else {
          if (currentInput) {
            previousInput = currentInput;
            currentInput = "";
            operator = value;
          }
        }
        break;
      case "equal":
        if (currentInput && previousInput && operator) {
          const result = calculate(previousInput, currentInput, operator);
          updateDisplay(result);
          currentInput = result;
          previousInput = "";
          operator = "";
        }
        break;
    }
  }

  function updateDisplay(value) {
    display.textContent = value;
  }

  function clearAll() {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay("0");
  }

  function calculate(a, b, operator) {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        return 0;
    }
  }
});
