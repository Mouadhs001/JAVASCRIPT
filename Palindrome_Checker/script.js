const btn = document.getElementById("btn");
const result = document.getElementById("result");

console.log("App loaded");
result.innerHTML = "Result will be shown here";

btn.addEventListener("click", () => {
  const word = document.getElementById("inp").value.trim();
  const reversed = word.split("").reverse().join("");

  console.log(`Input: ${word}, Reversed: ${reversed}`);

  result.classList.remove("alert-success", "alert-danger", "alert-secondary");

  if (!word) {
    result.innerHTML = "Please enter a word.";
    result.classList.add("alert-warning");
  } else if (word === reversed) {
    result.innerHTML = `✅ "${word}" is a palindrome`;
    result.classList.add("alert-success");
  } else {
    result.innerHTML = `❌ "${word}" is not a palindrome`;
    result.classList.add("alert-danger");
  }
});
