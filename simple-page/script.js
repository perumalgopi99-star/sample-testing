let count = 0;
const counterEl = document.getElementById("counter");
const btn = document.getElementById("clickBtn");

btn.addEventListener("click", () => {
    count++;
    counterEl.textContent = `Clicks: ${count}`;
});
