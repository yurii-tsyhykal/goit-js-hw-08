function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('.color');
const eventListener = btnEl.addEventListener('click', onBtnClick);

function onBtnClick() {
  // changed line -----deleted (event)
  const randomColor = getRandomHexColor(); //changed line ---- deleted line "event = bodyEl"created variable "randomColor"
  bodyEl.style.backgroundColor = randomColor; //new line ---- changed bodyEl color to randomColor
  spanEl.textContent = randomColor; //text content spanEl is updated to randomColor
}
