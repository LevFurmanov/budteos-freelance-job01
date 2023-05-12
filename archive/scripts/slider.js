$(document).ready(function () {
  $(".slick-slider").slick({
    dots: true,
    nextArrow: $(".under-btn-left"),
    prevArrow: $(".under-btn-right"),
    appendDots: $(".slick-navigation")
  });
});
