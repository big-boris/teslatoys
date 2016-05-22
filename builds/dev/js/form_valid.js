$(document).ready(function(){

    $(".phonemask").mask("+7(999) 999-9999");

    $('.form__zakaz').submit(function(event) {
        var name_form_zakaz = $("#name_form_zakaz");
        var phone_form_zakaz = $("#phone_form_zakaz");
        if(!$(name_form_zakaz).val() || !$(phone_form_zakaz).val()) {
            $(name_form_zakaz).addClass("alert");
            $(phone_form_zakaz).addClass("alert");
            setTimeout(function() {
                $(name_form_zakaz).removeClass("alert"),
                $(phone_form_zakaz).removeClass("alert");
            },3000);
            event.preventDefault();
        }
    });

});