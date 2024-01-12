// Array of inspirational quotes
let inspirationalQuotes = [
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Do not wait for the perfect moment, take the moment and make it perfect.",
    "Every morning brings new potential, but if you dwell on the misfortunes of the day before, you tend to overlook tremendous opportunities."
];

// Function to display a new quote
function newQuote() {
    // Generate a random index based on the number of quotes
    let randomIndex = Math.floor(Math.random() * inspirationalQuotes.length);
    // Access the 'quoteDisplay' element and set its text content to a random quote
    document.getElementById('quoteDisplay').textContent = inspirationalQuotes[randomIndex];
}
