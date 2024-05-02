$(document).ready(function () {
    $(".blogs-slick").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      dots: false,
      pauseOnHover: true,
      scroll: true,
      responsive: [
        {
          breakpoint: 1704,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 440,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
      prevArrow:
        '<div class=""><i class="fa-solid fa-chevron-left slick-prev"></i></div>',
      nextArrow:
        '<div class=""><i class="fa-solid fa-chevron-right slick-next"></i></div>',
    });
  });