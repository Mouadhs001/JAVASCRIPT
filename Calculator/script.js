const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button"); // Select all buttons inside the .buttons div

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id === "clear") {
      display.innerText = "";
    } else if (item.id === "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substring(0, string.length - 1);
    } else if (item.id === "=") {
      try {
        display.innerText = eval(display.innerText);
      } catch (error) {
        display.innerText = "Error";
        setTimeout(() => {
          display.innerText = "";
        }, 2000);
      }
    } else {
      display.innerText += item.innerText;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggle");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".theme-toggle");

let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
