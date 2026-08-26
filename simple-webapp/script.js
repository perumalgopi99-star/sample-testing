let clickCount = 0;

document.addEventListener('DOMContentLoaded', function() {
    console.log("Web app loaded!");
    
    const clickBtn = document.getElementById('clickBtn');
    const clickCountDisplay = document.getElementById('clickCount');
    
    clickBtn.addEventListener('click', function() {
        clickCount++;
        clickCountDisplay.textContent = `Clicks: ${clickCount}`;
        
        // Add a subtle animation
        clickBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            clickBtn.style.transform = 'scale(1)';
        }, 100);
    });
});
