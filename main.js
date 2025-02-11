$(document).ready(function () {
    $('.slick-slider').each(function () {
    let slider = $(this);
    let options = {
      prevArrow: slider.parent().find('.slider-prev'),
      nextArrow: slider.parent().find('.slider-next'),
      infinite: true,
    }
    let extraOptions = {}
    if (slider.hasClass('news')) {
      extraOptions = {
        slidesToShow: 2.5,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
          autoPlay: true,
        responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
            },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 0.7,
        slidesToScroll: 0.7,
      }
    }
  ]
      }
    } 
    slider.slick($.extend({}, extraOptions, options ));
  })
})