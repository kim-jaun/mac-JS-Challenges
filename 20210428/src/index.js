const rangeInput = document.querySelector(".js-rangeinput");
const rangeText = document.querySelector(".js-numberRangeText");
const userText = document.querySelector(".js-userInput");
const userBtn = document.querySelector("button");
const status = document.querySelector(".js-gameStatus");
const result = document.querySelector(".js-gameResult");

rangeInput.oninput = handleInput;

function handleInput() {
  const rangeNum = rangeInput.value;
  rangeText.innerText = `Generate a number between 0 and ${rangeNum}`;
}

userBtn.addEventListener("click", gameEnding);

function gameNum() {
  const maxNum = rangeInput.value;
  const randomNum = Math.floor(Math.random() * Number(maxNum));
  return randomNum;
}

function gameEnding() {
  const user = Number(userText.value);
  const machine = gameNum();
  if (user === machine) {
    status.innerText = `Youchose: ${user}, the machine chose: ${machine}`;
    result.innerText = `You won!`;
  } else {
    status.innerText = `Youchose: ${user}, the machine chose: ${machine}`;
    result.innerText = `You lost!`;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = userText.value;
  gameNum(currentValue);
  userText.value = "";
}

function init() {
  handleInput();
}

init();
