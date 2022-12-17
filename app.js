jQuery(document).ready(function ($) {
  $("#testimonials").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
    smartSpeed: 500,
  });

  $("#service-slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    nav: true,
    dots: false,
    center: true,
  });


  $("#works-slider").owlCarousel({
    loop: true,
    items: 1,
    margin: 30,
    dots: false,
    nav: true,
    center: true,
    smartSpeed: 450,
  });





  $(".counter").counterUp();
});

  function toggleMobileMenu(menu) {
    menu.classList.toggle("open");
  }

AOS.init({
  delay: 0,
  duration: 1200,
  easing: "ease-in-out",
});