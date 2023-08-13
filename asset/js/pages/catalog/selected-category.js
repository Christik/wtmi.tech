/*=========================
  Selected catalog
===========================*/

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

if (category) {
  const catalogItemElement = document.querySelector(`[data-category="${category}"]`);

  catalogItemElement?.classList.add('catalog__item--selected');
}
