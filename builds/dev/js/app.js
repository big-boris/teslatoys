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
        // $('.menu_fixed').show();
        // $('.menu_fixed').fadeIn();
        $('.menu_fixed').css('display','block');
      } else {
        $('.scroll-to-top').fadeOut();
        // $('.menu_fixed').hide();
        // $('.menu_fixed').fadeOut();
        $('.menu_fixed').css('display','none');
      }
    });

    $('.scroll-to-top').click( function( e ) {
      e.preventDefault();
      $('html, body').animate( {scrollTop : 0}, 800 );
    });
  });

  // *** nuzhen dlya dinamicheskoj smeny zagolovka modali
  // $('.reg_testdrive').on('click', function() {
  //   $('.modalform-title').text('Записаться на тест-драйв');
  // });

  // $('.menu__phone_callme').on('click', function() {
  //   $('.modalform-title').text('Оформить заказ');
  // });
  // *** nuzhen dlya dinamicheskoj smeny zagolovka modali

  $('.js-modalform_valid').submit(function(event) {
    var modalform_phone = $("#modalform_phone");
    if(!$(modalform_phone).val() ) {
      $(modalform_phone).addClass("alert");
      setTimeout(function() {
        $(modalform_phone).removeClass("alert");
      },2000);
      event.preventDefault();
    }
  });

  $('.js-testdriveform_valid').submit(function(event) {
      var testdriveform_phone = $("#testdriveform_phone");
      if(!$(testdriveform_phone).val() ) {
        console.log('Testrim');
        $(testdriveform_phone).addClass("alert2");
        setTimeout(function() {
          $(testdriveform_phone).removeClass("alert2");
        },2000);
        event.preventDefault();
      }
  });

});

function myScrollTo(o) {
  var t = $("." + o).offset().top - 10;
  $("html, body").animate({
      scrollTop:t
  }, 1500);
};

// Tozhe rabochij variant
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