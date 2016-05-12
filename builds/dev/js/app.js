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


  function mySend(text) {
  console.log(text);
  $.ajax({
      url: 'send.php',
      type: 'POST',
      data: text
    });
  };

  $('.js-submitForm').click(function(event) {
    var name_orderform = $("#name_orderform");
    var phone_orderform = $("#phone_orderform");
    if($(name_orderform).val() && $(phone_orderform).val()) {
      $('.js-submitForm').addClass('uk-modal-close');
      var text = $('#modal_order_form').serialize();
      mySend(text);
      name_orderform.val('');
      phone_orderform.val('');
      window.location = "/thanks.html";
      // location.href = "/thanks.html"; Тоже рабочий вариант
    } else {  $(name_orderform).addClass("uk-form-danger");
              $(phone_orderform).addClass("uk-form-danger");
          }
          setTimeout(function() {
            $(name_orderform).removeClass("uk-form-danger"),
            $(phone_orderform).removeClass("uk-form-danger")
          },3000);
  });

});

function myScrollTo(o) {
  var t = $("." + o).offset().top - 10;
  $("html, body").animate({
      scrollTop:t
  }, 1500);
};