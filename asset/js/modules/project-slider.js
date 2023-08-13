import Swiper from '../vendor/swiper-bundle.esm.browser.min.js';
import { getTwoDigitsNumberWithZero } from './utils.js';

/*=========================
  Slider nav
===========================*/

const renderSliderNav = (sliderSelector, swiper) => {
    const nav = document.querySelector('.project-slider-nav');

    if (!nav) {
      return;
    }

    const currentIndex = nav.querySelector('[data-current]');
    const totalIndex = nav.querySelector('[data-total]');

    const updateIndexes = (swiper) => {
        currentIndex.textContent = getTwoDigitsNumberWithZero(swiper.activeIndex + 1);
        totalIndex.textContent = getTwoDigitsNumberWithZero(swiper.slides.length);
    };

    if (swiper) {
      updateIndexes(swiper);
      swiper.on('slideChange', updateIndexes);
    }
};

/*=========================
  Partners Slider
===========================*/

const initProjectSlider = () => {
  const sliderSelector = '.project-slider';

  const swiper = new Swiper('.project-slider', {
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 0,
    navigation: {
      nextEl: '.project-slider-nav__next',
      prevEl: '.project-slider-nav__prev',
      disabledClass: 'arrow-button--disabled',
    }
  });

  renderSliderNav(sliderSelector, swiper);
};

/*=========================
  Export
===========================*/

export { initProjectSlider };
