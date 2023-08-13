/*=========================
  Tabs
===========================*/

const allTabsElements = document.querySelectorAll('.tabs');

const contentActiveClass = 'tabs-content--active';
const buttonActiveClass = 'tabs-nav__button--active';

allTabsElements.forEach((tabsElement) => {
  tabsElement.addEventListener('click', (evt) => {
    const buttonElement = evt.target.closest('.tabs-nav__button');

    if (!buttonElement) {
      return;
    }

    const contentId = buttonElement.dataset.content;

    tabsElement.querySelector(`.${contentActiveClass}`)
      .classList.remove(contentActiveClass);

    tabsElement.querySelector(`[data-id="${contentId}"]`)
      .classList.add(contentActiveClass);

    tabsElement.querySelector(`.${buttonActiveClass}`)
      .classList.remove(buttonActiveClass);

    buttonElement.classList.add(buttonActiveClass);
  });
});
