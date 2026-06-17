document.addEventListener('DOMContentLoaded', () => {
    const message = document.getElementById('message');
    const btn = document.getElementById('action-btn');

    message.textContent = 'Ready to interact!';

    btn.addEventListener('click', () => {
        message.textContent = 'Button clicked! You are doing great.';
        message.style.color = '#28a745';
        btn.textContent = 'Clicked!';
        btn.disabled = true;
    });
});
