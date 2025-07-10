const arr = [
  "Hello",
  "Hi",
  "Good morning",
  "Good night",
  "Thank you",
  "Welcome",
  "See you",
  "Take care",
  "Nice to meet you",
  "How are you?",
  "I'm fine",
  "What's up?",
  "Good job",
  "Well done",
  "Good luck",
  "All the best",
  "Have a nice day",
  "Stay safe",
  "Cheers",
  "Bye"
];

const body = document.querySelector("body");
const maxQuotes = 8;
const circleSize = 120; // px, must match CSS width/height for desktop

// For responsive circle size
function getCircleSize() {
  return window.innerWidth <= 600 ? 90 : circleSize;
}

function generateQuote() {
  const h1 = document.createElement("h1");
  const idx = Math.floor(Math.random() * arr.length);
  h1.textContent = arr[idx];

  const size = getCircleSize();

  const x = Math.random() * (body.clientWidth - size);
  const y = Math.random() * (body.clientHeight - size);

  h1.style.left = `${x}px`;
  h1.style.top = `${y}px`;

  const color = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
  h1.style.backgroundColor = color;
  h1.style.boxShadow = `0 6px 20px ${color}99`;

  body.appendChild(h1);

  // Remove after 6 seconds 
  setTimeout(() => {
    h1.remove();
  }, 6000);
}


// Clear all floating quotes
function clearQuotes() {
  const quotes = body.querySelectorAll("h1:not(.centered)");
  quotes.forEach(q => q.remove());
}

body.addEventListener("click", generateQuote);

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", e => {
  e.stopPropagation(); // prevent triggering generateQuote
  clearQuotes();
});
