// quotes

let quotes = [
    "In all things of nature, there is something of the marvelous.",
    "Colors are the smiles of nature.",
    "The butterfly counts not months but moments, and has time enough.",
    "My soul steers me into nature's silence.",
    "Nature does not hurry, yet everything is accomplished.",
    "Every flower is a soul blossoming in nature."
]

let quoteAuthors = [
    "Aristotle",
    "Leigh Hunt",
    "Rabindranath Tagore",
    "Angie Weiland-Crosby",
    "Lao Tzu",
    "Gerard De Nerval"
]

// Cycle

let currentIndex = 0;
const quoteSection = document.querySelector(".quote-section");

function quoteUpdate(){
    quoteSection.innerHTML = `
        <p class="quote-text">${quotes[currentIndex]}</p>
        <p class="quote-author">~${quoteAuthors[currentIndex]}~</p>
    `;

    if (currentIndex === quotes.length - 1){
        currentIndex = 0;
    } else{
        currentIndex++;
    }
}

quoteUpdate();
setInterval(quoteUpdate, 4000);