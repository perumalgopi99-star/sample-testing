let clickCount = 0;

function handleClick() {
  clickCount++;
  const message = document.getElementById('message');
  message.textContent = `You clicked the button ${clickCount} time${clickCount !== 1 ? 's' : ''}! 🎉`;
}

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  const isDarkTheme = document.body.classList.contains('dark-theme');
  localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

// Load theme preference on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
});
