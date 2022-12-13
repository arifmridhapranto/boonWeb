jQuery(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
        items: 1,
        nav: true,
        dots: false,

    });
});
jQuery(document).ready(function () {
  $(".service-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    nav: true,
    dots: false,
    center: true,
  });
});


function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}
