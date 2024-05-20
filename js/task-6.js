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
  let markup = ''; //changed line create variable "markup" for string with html elements
  for (let i = 0; i < amount; i++) {
    markup += `<div style="width: ${sizeBox}px; height: ${sizeBox}px; background-color: ${getRandomHexColor()};"></div>`; //changed line old v" const markup ="; new v"markup +="
    //changed line this line now on 31 str
    sizeBox += 10;
  }
  boxEl.insertAdjacentHTML('beforeend', markup); //this line from 28 str
}

function destroyBoxes() {
  boxEl.innerHTML = '';
}
