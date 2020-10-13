var swiper = new Swiper('.js-main-slider', {
  // If we need pagination
  slidesPerView: 1,
  spaceBetween: 0,

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  }

  pagination: {
    el: '.main-slider__pagination',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.main-slider__arrow_next',
    prevEl: '.main-slider__arrow_prev',
  },
});