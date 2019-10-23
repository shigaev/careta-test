$(document).ready(function() {
    $('.owl-carousel').owlCarousel();
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    autoplayHoverPause: true,
    nav: true,
});
$('.play').on('click', function() {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function() {
    owl.trigger('stop.owl.autoplay')
})