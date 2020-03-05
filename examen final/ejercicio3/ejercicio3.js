$(function(){
    $('.button').click(function(){
        $('.box').animate({top:0});
        $('.box').animate({opacity:0});
        //se puede poner junto: $('.box').animate({top:0,opacity:0});
        //pero al hacerlo separado, primero se espera a que termine una animación antes de efectuar la otra
    });
});