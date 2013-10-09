$.fn.nextOrFirst = function(selector) {
    var next = this.next(selector);
    return (next.length) ? next : this.prevAll(selector).last();
};

var _version = 1;
var $arionlogo = null;
var logo_animation_frame = 0;

$(document).ready(function(){

    $('h2 .line').delay(100).animate({marginLeft: 0}, 400);

    $arionlogo = $('#arionlogo'); // initialized
    var logo_animation = setInterval(function() {
        var pos = $arionlogo.css('background-position');
        if(pos === undefined) {
            pos = '0';
        }
        pos = parseInt(pos.split(' ')[0], 10) - 137;
        $arionlogo.css({backgroundPosition: pos});

        logo_animation_frame++;
        if(logo_animation_frame == 29) {
            window.clearInterval(logo_animation);           
        }
    }, 41);

    var slideInterval = setInterval(function(){
        $('#slides .slide.active').animate({opacity:0}, function() {
            $(this).removeClass('active');
        }).nextOrFirst().animate({opacity:1}, function(){
            $(this).addClass('active');
        });
    }, 8000);
});