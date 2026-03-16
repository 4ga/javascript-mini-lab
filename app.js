let count = 0;

const countDisplay = document.getElementById("count-display");
const decreaseBtn = document.getElementById("decrease-btn");
const resetBtn = document.getElementById("reset-btn");
const increaseBtn = document.getElementById("increase-btn");

function updateCountDisplay() {
  countDisplay.textContent = count;
}

increaseBtn.addEventListener("click", () => {
  count += 1;
  updateCountDisplay();
});

decreaseBtn.addEventListener("click", () => {
  count -= 1;
  updateCountDisplay();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCountDisplay();
});
