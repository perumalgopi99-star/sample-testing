// Counter state
let counter = 0;
let clicks = 0;

// DOM elements
const counterDisplay = document.getElementById('counter');
const clicksDisplay = document.getElementById('clicks');
const incrementBtn = document.getElementById('incrementBtn');
const resetBtn = document.getElementById('resetBtn');
const userInput = document.getElementById('userInput');
const submitBtn = document.getElementById('submitBtn');
const output = document.getElementById('output');

// Update counter display
function updateCounter() {
    counterDisplay.textContent = counter;
    counterDisplay.style.animation = 'pulse 0.3s ease';
    setTimeout(() => {
        counterDisplay.style.animation = '';
    }, 300);
}

// Update clicks display
function updateClicks() {
    clicks++;
    clicksDisplay.textContent = clicks;
}

// Increment counter
incrementBtn.addEventListener('click', () => {
    counter++;
    updateCounter();
    updateClicks();
});

// Reset counter
resetBtn.addEventListener('click', () => {
    counter = 0;
    updateCounter();
    updateClicks();
});

// Handle user input
submitBtn.addEventListener('click', () => {
    const value = userInput.value.trim();
    if (value) {
        output.innerHTML = `<strong>You entered:</strong> ${value}`;
        userInput.value = '';
        updateClicks();
    } else {
        output.innerHTML = '<em>Please enter some text first!</em>';
    }
});

// Allow Enter key to submit
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        submitBtn.click();
    }
});

// Add pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
`;
document.head.appendChild(style);

// Welcome message
console.log('Web app loaded successfully! 🚀');
