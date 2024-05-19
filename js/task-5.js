function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('.color');
const eventListener = btnEl.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  event = bodyEl;
  spanEl.textContent = event.style.backgroundColor = getRandomHexColor();
}
