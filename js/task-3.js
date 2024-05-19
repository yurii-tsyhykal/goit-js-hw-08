const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');
const inputEvent = inputName.addEventListener('input', event => {
  const trimInput = event.currentTarget.value.trim();
  if (trimInput !== '') {
    outputName.textContent = trimInput;
  } else {
    outputName.textContent = 'Anonymous';
  }
});
