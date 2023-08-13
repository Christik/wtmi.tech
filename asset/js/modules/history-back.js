const backLinkElement = document.querySelector('.back-link');

if (backLinkElement) {
  backLinkElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    history.go(-1);
  })
}
