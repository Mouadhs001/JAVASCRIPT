const quoteDiv = document.getElementById("quote");

function getQuote() {
  quoteDiv.innerHTML = "Please wait...";
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((res) => res.json())
    .then((data) => {
      const quote = data.data[0].quote;
      const author = data.data[0].author;
      quoteDiv.innerHTML = `<p class="quote">"${quote}"</p><p class="author"><strong>- ${author}</strong></p>`;
    })
    .catch((err) => {
      quoteDiv.innerHTML = "Failed to load quote. Please try again.";
      console.error(err);
    });
}

getQuote();
