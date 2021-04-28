const numberRange = document.querySelector(".js-numberRange");
const rangeInput = numberRange.querySelector("input");
const rangeText = numberRange.querySelector(".js-numberRangeText");
const userNumber = document.querySelector(".js-userNumber");
const userText = userNumber.querySelector("input");
const userBtn = userNumber.querySelector("button");

rangeInput.oninput = handleInput;

function handleInput() {
  const rangeNum = rangeInput.value;
  rangeText.innerText = `Generate a number between 0 and ${rangeNum}`;
}

function userNum() {
  userBtn.addEventListener("submit");
}

function gameNum(event) {
  const text = body.createElement("span");
  const maxNum = rangeInput.value;
  const randomNum = Math.random() * (maxNum - 10) + 10;
  text.innerText = `You chose ${userNum} the machin shose ${randomNum}`;
}
function init() {
  handleInput();
  gameNum();
}

init();
