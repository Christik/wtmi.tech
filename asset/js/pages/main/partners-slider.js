import Swiper from '../../vendor/swiper-bundle.esm.browser.min.js';

/*=========================
  Partners Slider
===========================*/

const initPartnersSlider = () => {
  new Swiper('.partners-slider__in', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.partners-slider__next',
      prevEl: '.partners-slider__prev',
      disabledClass: 'arrow-button--disabled',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    }
  });
};

/*=========================
  Export
===========================*/

export { initPartnersSlider };
