$(document).ready(function(){

  $(".phonemask").mask("+7(999) 999-9999");

  $('#product1').bxSlider({
    mode: 'fade',
    pagerCustom: '.bx-pager',
    autoStart: false,
    controls: false
  });
  $('#product2').bxSlider({
    mode: 'fade',
    pagerCustom: '.bx-pager',
    autoStart: false,
    controls: false
  });
  $('#product4').bxSlider({
    mode: 'fade',
    pagerCustom: '.bx-pager',
    autoStart: false,
    controls: false
  });
  $('#product5').bxSlider({
    mode: 'fade',
    pagerCustom: '.bx-pager',
    autoStart: false,
    controls: false
  });

});

function myScrollTo(o) {
  var t = $("." + o).offset().top - 10;
  $("html, body").animate({
      scrollTop:t
  }, 1500);
};