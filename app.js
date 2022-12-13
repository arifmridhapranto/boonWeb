
jQuery(".owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  items: 1,
  dots: false,
});
jQuery(".service-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    nav: true,
    dots: false,
    center: true,
  });
jQuery(".works-slider").owlCarousel({
  loop: true,
  items: 1,
  margin: 0,
  dots: false,
  nav: true,
  smartSpeed: 450,
  navText: [
    '<i class="fa fa-angle-left"></i>',
    '<i class="fa fa-angle-right"></i>',
  ],
});


function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}
