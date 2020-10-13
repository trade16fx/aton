if (document.querySelectorAll('.js-main-slider').length) {
	var swiper = new Swiper('.js-main-slider', {  
	  // If we need pagination
	  pagination: {
	    el: '.main-slider__pagination',
	  },

	  // Navigation arrows
	  navigation: {
	    nextEl: '.main-slider__arrow_next',
	    prevEl: '.main-slider__arrow_prev',
	  }
	});
}


