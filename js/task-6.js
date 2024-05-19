function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestr = btnCreate.nextElementSibling;
const boxEl = document.querySelector('#boxes');

btnCreate.addEventListener('click', onBtnCreateClick);
btnDestr.addEventListener('click', destroyBoxes);

function onBtnCreateClick(event) {
  if (inputEl.value >= 1 && inputEl.value <= 100) {
    createBoxes(inputEl.value);
  }
  inputEl.value = '';
}

function createBoxes(amount) {
  boxEl.innerHTML = '';
  let sizeBox = 30;

  for (let i = 0; i < amount; i++) {
    const markup = `<div style="width: ${sizeBox}px; height: ${sizeBox}px; background-color: ${getRandomHexColor()};"></div>`;
    boxEl.insertAdjacentHTML('beforeend', markup);
    sizeBox += 10;
  }
}

function destroyBoxes() {
  boxEl.innerHTML = '';
}
