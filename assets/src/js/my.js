$(document).ready(function () {
    $('.owl-carousel').owlCarousel();
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    // autoplayTimeout: 3000,
    animateOut: 'fadeOut',
    // animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    autoplayHoverPause: true,
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})

$('.next').click(function () {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.prev').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})