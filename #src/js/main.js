

@@include('../modules/main-slider/_slider.js')
@@include('../modules/brend-slider/_slider.js')

jQuery(document).ready(function($) {

	@@include('./_burger-menu.js');
	@@include('./_ancor.js')

	 if ($('.hit-slider').length){
    var hitSwiper = undefined;
    allInitSwiper('.hit-slider', hitSwiper ,991); 
  }
	if ($('.hit-slider').length){
    var slsSwiper = undefined;
    allInitSwiper('.sale-slider', slsSwiper ,991); 
  }  

  function allInitSwiper(objSlider,  varSwiper,  intWidth) {

    var screenWidth = $(window).outerWidth();
    var objNext = objSlider + '__arrow_next';
    var objPrev = objSlider + '__arrow_prev';
    var objPagination = objSlider + '__pagination';

    console.info(objNext);

    if ( (screenWidth <= (intWidth)) && (varSwiper == undefined)) {
      varSwiper = new Swiper(objSlider, {
        slidesPerView: 'auto',
        loop: true,    
        // centeredSlides: true,
        autoHeight: true,
        // spaceBetween: 15,
        pagination: {
          el: objPagination,
          clickable: true,
          // dynamicBullets: true,
          renderBullet: function (index, className) {
          	return '<span class="' + className + '"><span>' + (index + 1) + '</span></span>';
        	},
        },
        navigation: {
	       nextEl: objNext,
	       prevEl: objPrev,
	     },
      });
    } else if ((screenWidth > intWidth) && (varSwiper != undefined)) {
      varSwiper.destroy();
      varSwiper = undefined;
      $(objSlider + ' .swiper-wrapper').removeAttr('style');
      $(objSlider + ' .swiper-slide').removeAttr('style');
    }
  }
  

  $(window).resize(function() {
    if ($('.hit-slider').length) allInitSwiper('.hit-slider', hitSwiper,991);
    if ($('.sale-slider').length) allInitSwiper('.sale-slider', slsSwiper,991);
   
  });



});

let btnCatalog = document.querySelector('.js-catalog-link');
let pnlCatalog = document.querySelector('.category-menu');
let btnClose = document.querySelector('.js-close');
let btnDropdown = document.querySelector('.js-dropdown');
let body = document.querySelector('.body');

let showCatalog = () => pnlCatalog.classList.add('fixed');
btnCatalog.addEventListener( "click" , showCatalog);

let closeCatalog = () => pnlCatalog.classList.remove('fixed');
btnClose.addEventListener( "click" , closeCatalog);

let activeCatalog = () => pnlCatalog.classList.toggle('active');

const screenWidth  = window.screen.width;

if (screenWidth < 992) {
	btnDropdown.addEventListener( "click" , activeCatalog);
}

/* block quantity */

const btnsPlus = document.querySelectorAll(".js-plus");
const btnsMinus = document.querySelectorAll(".js-minus");

for (let btnPlus of btnsPlus) {
  btnPlus.addEventListener('click', clickPlus );
}
for (let btnMinus of btnsMinus) {
  btnMinus.addEventListener('click', clickMinus );
}

function clickPlus(event) {
  let quantVal = this.parentElement.querySelector('.quantity__inp').value;
  quantVal ++;
  this.parentElement.querySelector('.quantity__inp').value = quantVal;
}
function clickMinus(event) {
  let quantVal = this.parentElement.querySelector('.quantity__inp').value;
  if (quantVal > 1) {
    quantVal --;
    this.parentElement.querySelector('.quantity__inp').value = quantVal;
  }  
}

/* eof block quantity */

