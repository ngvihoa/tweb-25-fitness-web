import "slick-carousel"

$(document).ready(function(){
  $('.your-class').slick({
    // setting slider by properties
  })
})



$(document).ready(function(){
    $('.slider-pt').slick({
        lazyLoad: 'ondemand',
        slidesToScroll: 1,
        prevArrow: $('.slider-pt-prev'),
        nextArrow: $('.slider-pt-next'),
        infinite: true,
        mobileFirst: true,
        responsive: [
            {
            breakpoint: 1279,
            settings: {
                slidesToShow: 4,
                variableWidth: true,
              }
            },
            {
              breakpoint: 833,
              settings: {
                slidesToShow: 2,
                variableWidth: true,
            }
            },
            {
              breakpoint: 413,
              settings: {
                slidesToShow: 1,
            }
            },
        ]
    });
  
    $('.slider-quot').slick({
      slideToShow: 1,
      lazyLoad: 'ondemand',
      slidesToScroll: 1,
      initialSlide: 0,
      infinite:true,
      mobileFirst: true,
      prevArrow: $('.slider-quot-prev'),
      nextArrow: $('.slider-quot-next'),
      responsive: [
        {
          breakpoint: 1279,
          settings: {     
            arrows: true, 
          }
        },
        {
          breakpoint: 413,
          settings: {      
            arrows: false,
          }
        }
      ]
    })

    $('.banner-slider').slick({
      slideToShow: 1,
      lazyLoad: 'ondemand',
      slidesToScroll: 1,
      initialSlide: 0,
      infinite:true,
      mobileFirst: true,
      nextArrow: $('.slider-banner-next'),
      prevArrow: $('.slider-banner-prev'),
      autoplay: true,
      autoplaySpeed: 3000,
    })
  })
  