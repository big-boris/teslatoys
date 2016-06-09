$(document).ready(function(){

  $(".phonemask").mask("+7(999) 999-9999");

  $('#product-s006').bxSlider({
    mode: 'fade',
    adaptiveHeight: true,
    pagerCustom: '.bx-pager-s006',
    autoStart: false,
    controls: false
  });
  $('#product-s007').bxSlider({
    mode: 'fade',
    adaptiveHeight: true,
    pagerCustom: '.bx-pager-s007',
    autoStart: false,
    controls: false
  });
  $('#product-s008').bxSlider({
    mode: 'fade',
    adaptiveHeight: true,
    pagerCustom: '.bx-pager-s008',
    autoStart: false,
    controls: false
  });
  $('#product-s010').bxSlider({
    mode: 'fade',
    adaptiveHeight: true,
    pagerCustom: '.bx-pager-s010',
    autoStart: false,
    controls: false
  });

  $(function () {
    $(window).scroll(function(){
      if ( $(this).scrollTop() > 100 ) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });

    $('.scroll-to-top').click( function( e ) {
      e.preventDefault();
      $('html, body').animate( {scrollTop : 0}, 800 );
    });
  });

});

function myScrollTo(o) {
  var t = $("." + o).offset().top - 10;
  $("html, body").animate({
      scrollTop:t
  }, 1500);
};

// $(function () {
//   $(window).scroll(function(){
//     if ( $(this).scrollTop() > 100 ) {
//       $('.scroll-to-top').fadeIn();
//     } else {
//       $('.scroll-to-top').fadeOut();
//     }
//   });

//   $('.scroll-to-top').click( function( e ) {
//     e.preventDefault();
//     $('html, body').animate( {scrollTop : 0}, 800 );
//   });
// });