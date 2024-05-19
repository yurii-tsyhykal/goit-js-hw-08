// ===================finding input element and get his attribute
const inputEmail = document.querySelector('[name=email]');
const emailAttr = inputEmail.getAttribute('name');
//======================finding input element and get his attribute
const inputPassword = document.querySelector('[name=password]');
const pswrdAttr = inputPassword.getAttribute('name');
//=======================finding element form and adding submit to form
const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  let dataObj = {};
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  } else {
    dataObj[emailAttr] = email;
    dataObj[pswrdAttr] = password;
    console.log(dataObj);
  }
  form.reset();
}
