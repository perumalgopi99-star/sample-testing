console.log("Web app loaded!");

let count = 0;
const btn = document.getElementById("click-btn");
const countDisplay = document.getElementById("click-count");

btn.addEventListener("click", () => {
    count += 1;
    countDisplay.textContent = `Button clicked ${count} time${count === 1 ? "" : "s"}`;
});
