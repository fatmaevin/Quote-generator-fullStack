async function displayRandomQuote() {
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");

  const response = await fetch(
    "https://fatmaevin-quote-generator-backend.hosting.codeyourfuture.io"
  );
  const randomQuote = await response.json();

  quoteElement.textContent = `"${randomQuote.text}"`;
  authorElement.textContent = `— ${randomQuote.author}`;
}

window.onload = () => {
  displayRandomQuote();

  document.getElementById("new-quote").addEventListener("click", () => {
    displayRandomQuote();
  });
};
