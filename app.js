let count = 0;

const countDisplay = document.getElementById("count-display");
const decreaseBtn = document.getElementById("decrease-btn");
const resetBtn = document.getElementById("reset-btn");
const increaseBtn = document.getElementById("increase-btn");

const messageInput = document.getElementById("message-input");
const charCount = document.getElementById("char-count");
const charWarning = document.getElementById("char-warning");

function updateCountDisplay() {
  countDisplay.textContent = count;
}

increaseBtn.addEventListener("click", () => {
  count += 1;
  updateCountDisplay();
});

decreaseBtn.addEventListener("click", () => {
  if (count > 0) {
    count -= 1;
  }
  updateCountDisplay();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCountDisplay();
});

messageInput.addEventListener("input", () => {
  const messageLength = messageInput.value.length;
  charCount.textContent = messageLength;

  if (messageLength > 100) {
    charWarning.textContent = "You have gone over the 100 character limit.";
  } else {
    charWarning.textContent = "";
  }
});
