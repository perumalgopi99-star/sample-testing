// Button click event
document.getElementById('clickBtn').addEventListener('click', function() {
    alert('✨ You clicked the button! Nice!');
});

// Counter functionality
let count = 0;
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

incrementBtn.addEventListener('click', function() {
    count++;
    updateCount();
});

decrementBtn.addEventListener('click', function() {
    count--;
    updateCount();
});

resetBtn.addEventListener('click', function() {
    count = 0;
    updateCount();
});

function updateCount() {
    countDisplay.textContent = count;
    // Add a pulse animation effect
    countDisplay.style.animation = 'none';
    setTimeout(() => {
        countDisplay.style.animation = 'pulse 0.3s';
    }, 10);
}

// Add CSS animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

console.log('✅ Simple Frontend loaded successfully!');
