
// script.js
const typingText = document.querySelector('.typing-text');
const words = ['a Developer.', 'a Designer.', 'a Problem Solver.'];
let wordIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < words[wordIndex].length) {
    typingText.textContent += words[wordIndex][charIndex];
    charIndex++;
    setTimeout(typeText, 150); // Adjust speed as needed
  } else {
    setTimeout(deleteText, 1000); // Pause before deleting
  }
}

function deleteText() {
  if (charIndex > 0) {
    typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteText, 100); // Adjust speed as needed
  } else {
    wordIndex = (wordIndex + 1) % words.length; // Cycle through words
    setTimeout(typeText, 500);
  }
}

typeText(); // Start the typing effect


window.addEventListener('scroll', function() {
const image = document.getElementById('myImage');
if (window.scrollY < 50 || window.scrollY > 1000) {  // the value of hidden
    image.style.opacity = 0;
} else {
    image.style.opacity = 1;
}
});



