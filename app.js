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


function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}
