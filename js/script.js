$(document).ready(function(){
    $(".slider").owlCarousel({
        items:1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });

    $(".btn-nav").on("click", function() {
        var target = $(this).data("target");
        $(target).toggleClass("nav__list--open");
    })
  });