import Swiper from '../../vendor/swiper-bundle.esm.browser.min.js';

/*=========================
  Promo Slider
===========================*/

const initPromoSlider = () => {
  new Swiper('.promo-slider__in', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".promo-slider__pagination",
      bulletClass: "rating__item",
      bulletActiveClass: "rating__item--active",
      bulletElement: "div",
      horizontalClass: "rating--horizontal",
    },
  });
};

/*=========================
  Export
===========================*/

export { initPromoSlider };
