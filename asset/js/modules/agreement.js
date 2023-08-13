/*=========================
  Agreement
===========================*/

const allFormElements = document.querySelectorAll('form');

allFormElements.forEach((formElement) => {
  const checkboxElement = formElement.querySelector('#agreement');
  const buttonElement = formElement.querySelector('button[type="submit"]');

  checkboxElement.addEventListener('change', (evt) => {
    buttonElement.disabled = !evt.target.checked;
  });
});
