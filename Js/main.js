// testemonials section

  $('.slick-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});



// scroll to top
 
$(function(){

    $(window).on("scroll", function(){

        if($(window).scrollTop() >= 700){
            $(".scroll").fadeIn(1000)

        }else{
            
            $(".scroll").fadeOut(1000)
        }
    });

    $(".scroll").on("click", function(){

        $("html,body").animate({
            scrollTop:0
        }, 700)
    });

        
});


// smooth scroll

$(function(){

    $(".navbar .navbar-nav .nav-item .nav-link").on("click" , function(){

        $('html,body').animate({

            scrollTop:$($(this).data('value')).offset().top
        },1000)
    });
});
