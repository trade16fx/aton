
$(window).scroll(function() {
  scr_w = screen.width;
  if (scr_w > 767) {
    if ($(window).scrollTop() > 150) {
      $('.ancor-panel__cont').addClass('fixed');
    } else {
      $('.ancor-panel__cont').removeClass('fixed');
    }
  }
});

