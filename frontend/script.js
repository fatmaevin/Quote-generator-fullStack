const quoteElement = document.getElementById("quote-display");
const authorElement = document.getElementById("author-display");
const newQuoteBtn = document.getElementById("new-quote");
const quoteForm = document.getElementById("quote-form");

async function displayRandomQuote() {
  try {
    const response = await fetch(
      "https://fatmaevin-quote-generator-backend.hosting.codeyourfuture.io"
    );
    const randomQuote = await response.json();

    quoteElement.textContent = `"${randomQuote.text}"`;
    authorElement.textContent = `— ${randomQuote.author}`;
  } catch (error) {
    console.error("Error fetching quote:", error);
    quoteElement.textContent = "Something went wrong!";
    authorElement.textContent = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  displayRandomQuote();

  newQuoteBtn.addEventListener("click", displayRandomQuote);
});
quoteForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const quoteText = document.getElementById("quote-text").value.trim();
  const authorText = document.getElementById("author-text").value.trim();

  if (!quoteText || !authorText) {
    alert("Please fill in both fields!");
    return;
  }

  try {
    await fetch(
      "https://fatmaevin-quote-generator-backend.hosting.codeyourfuture.io",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: quoteText, author: authorText }),
      }
    );

    quoteForm.reset();
    displayRandomQuote();
  } catch (error) {
    console.error("Error adding quote:", error);
    alert("Failed to add quote.");
  }
});
