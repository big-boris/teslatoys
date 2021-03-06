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
            },2000);
            event.preventDefault();
        }
    });

    //*** Oldovyj variant
    // $('.form_yakassa').submit(function(event) {
    //     var ya_form_summa = $("#ya_form_summa");
    //     var ya_form_phone = $("#ya_form_phone");
    //     var ya_form_name = $("#ya_form_name");
    //     var ya_form_mail = $("#ya_form_mail");
    //     if(!$(ya_form_summa).val() || !$(ya_form_phone).val() || !$(ya_form_name).val() || !$(ya_form_mail).val()) {
    //         $(ya_form_summa).addClass("alert");
    //         $(ya_form_phone).addClass("alert");
    //         $(ya_form_name).addClass("alert");
    //         $(ya_form_mail).addClass("alert");
    //         setTimeout(function() {
    //             $(ya_form_summa).removeClass("alert"),
    //             $(ya_form_phone).removeClass("alert"),
    //             $(ya_form_name).removeClass("alert"),
    //             $(ya_form_mail).removeClass("alert");
    //         },2000);
    //         event.preventDefault();
    //     }
    // });

    $('.js-form_yakassa').submit(function(event) {
        var field = new Array("sum", "cps_phone", "custName", "custEmail");
        $(".js-form_yakassa").find(":input").each(function() {// проверяем каждое поле в форме
            for(var i=0;i<field.length;i++){ // если поле присутствует в списке обязательных
                if($(this).attr("name")==field[i]){ //проверяем поле формы на пустоту
                    if(!$(this).val()){// если поле пустое
                        $(this).addClass("alert");// устанавливаем рамку красного цвета
                        event.preventDefault();
                    }
                    else{
                        $(this).removeClass("alert");// устанавливаем рамку обычного цвета
                    }
                }
            }
        })
    });

});