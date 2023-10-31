import "slick-carousel"

$(document).ready(function(){
    $('.slider-footer').slick({
      lazyLoad: 'ondemand',
      slideToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      infinite:true,
      mobileFirst: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1279,
          settings: {  
            slideToShow: 8,   
          }
        },
        {
            breakpoint: 833,
            settings: {  
              slideToShow: 5,   
            }
          },
        {
          breakpoint: 413,
          settings: {      
            slideToShow: 3,
          }
        }
      ]
    })
  })
  