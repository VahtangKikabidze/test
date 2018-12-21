$(document).ready(function ($) {

    $('.reviews_slider').slick({
        arrows: false,
        dots: true,
        appendDots: $('.reviews_slider_nav')
    })


    $('.section_screen_slider__slider').gallery();

})