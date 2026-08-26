document.addEventListener('DOMContentLoaded', () => {
    const clickBtn = document.getElementById('clickBtn');
    const message = document.getElementById('message');
    let clickCount = 0;

    if (clickBtn) {
        clickBtn.addEventListener('click', () => {
            clickCount++;
            message.textContent = `Button clicked ${clickCount} time${clickCount !== 1 ? 's' : ''}!`;
        });
    }
});
