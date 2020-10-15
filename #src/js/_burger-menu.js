$('.js-menu-button').click(function(event) {
  $(this).toggleClass('active');
  $('.js-mobilemenu-panel').toggleClass('active'); 
  $('.body').toggleClass('no-scroll');

});