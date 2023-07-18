$(document).ready(function(){
    $(".head").show();
    $("#show-menu").click(function(){  
      if($(".head").hasClass('head--close-menu')) {
        $(".head").removeClass('head--close-menu');
        $("body").removeClass("rm-scroll");
        $(".head__menu").removeClass('head--close-menu animate__animated animate__fadeInLeft');
      }
      else {
        $("body").addClass("rm-scroll");
        $(".head").addClass('head--close-menu');
        $(".head__menu").addClass('head--close-menu animate__animated animate__fadeInLeft');
      }
    });

    //untuk carousel slide
    $('.hero-banner').slick({
      slidesToShow: 1,
      infinite:true,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      dots: true,
      autoplaySpeed: 2000
    });
    
    //caraousel testimoni
    $('.testimonials__list').slick({
      dots: true,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true
    });

  });

  AOS.init();