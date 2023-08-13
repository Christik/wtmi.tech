/*=========================
  Mob menu
===========================*/

const burgerElement = document.querySelector('.mob-header__burger');
const menuElement = document.querySelector('.site-header');

const burgerOpenedClass = 'burger--opened';
const menuOpenedClass = 'site-header--opened';

burgerElement.addEventListener('click', () => {
  burgerElement.classList.toggle(burgerOpenedClass);
  menuElement.classList.toggle(menuOpenedClass);
});
