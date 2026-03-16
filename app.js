let count = 0;

const countDisplay = document.getElementById("count-display");
const decreaseBtn = document.getElementById("decrease-btn");
const resetBtn = document.getElementById("reset-btn");
const increaseBtn = document.getElementById("increase-btn");

const messageInput = document.getElementById("message-input");
const charCount = document.getElementById("char-count");
const charWarning = document.getElementById("char-warning");

const encourageBtn = document.getElementById("encourage-btn");
const encouragementMessage = document.getElementById("encouragement-message");
const encouragements = [
  "You are stronger than you realize—keep going!",
  "You've conquered mountains before. This is just a new climb.",
  "No matter what happens, you are strong enough to handle it.",
  "It's okay to take a break when you need one.",
  "You're doing the best you can, and that's more than enough.",
  "You bring joy to the people around you.",
  "I believe in your strength and determination.",
  "This too shall pass.",
  "You are never too old to set another goal or to dream a new dream.",
  "New beginnings are rich with possibility and hope.",
  "Trust in this new chapter of your life.",
];

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

updateCountDisplay();

messageInput.addEventListener("input", () => {
  const messageLength = messageInput.value.length;
  charCount.textContent = messageLength;

  if (messageLength > 100) {
    charWarning.textContent = "You have gone over the 100 character limit.";
  } else {
    charWarning.textContent = "";
  }
});

encourageBtn.addEventListener("click", () => {
  const index = Math.floor(Math.random() * encouragements.length);
  encouragementMessage.textContent = encouragements[index];
});
