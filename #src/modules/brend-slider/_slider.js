if (document.querySelectorAll('.js-brend-slider').length) {

var swiper = new Swiper('.js-brend-slider', {  
  // If we need pagination
  slidesPerView: 2,
  spaceBetween: 0,

  breakpoints: {
    480: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 7,
      spaceBetween: 0,
    }


  },

  // Navigation arrows
  navigation: {
    nextEl: '.brend-slider__arrow_next',
    prevEl: '.brend-slider__arrow_prev',
  }
});

}

