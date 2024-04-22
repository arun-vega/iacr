$(document).ready(function () {
    $(".learning-program-slick").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1200,
      arrows: true,
      dots: true,
      pauseOnHover: true,
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
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            arrows:false
          },
        },
        {
          breakpoint: 440,
          settings: {
            slidesToShow: 1,
            arrows:false,
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            arrows:false
          },
        },
      ],
      prevArrow:
        '<div class="slick-prev"><i class="fa-solid fa-chevron-left"></i></div>',
      nextArrow:
        '<div class="slick-next"><i class="fa-solid fa-chevron-right"></i></div>',
    });
  });
  