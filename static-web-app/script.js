let clicks = 0;
const button = document.getElementById('clickMe');
const counter = document.getElementById('counter');

button.addEventListener('click', () => {
    clicks++;
    counter.innerText = `Clicks: ${clicks}`;
});
