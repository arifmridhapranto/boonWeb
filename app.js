jQuery(document).ready(function ($) {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
  });

  $("#service-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    nav: true,
    dots: false,
    center: true,
  });
  const work_slide = document.getElementById("works-slider");
  work_slide.owlCarousel({
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





  $(".counter").counterUp();
});

  function toggleMobileMenu(menu) {
    menu.classList.toggle("open");
  }