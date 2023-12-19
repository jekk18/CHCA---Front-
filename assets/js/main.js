$(document).ready(function () {
  $(".scroll_data_id").on("click", function (event) {
    let itemId = $(this).children("a").attr("data-id");
    if ($(`#${itemId}`).length > 0) {
      let headerHeight = $(".header").outerHeight();
      $("html, body").animate(
        {
          scrollTop: $(`#${itemId}`).offset().top - headerHeight,
        },
        300
      );
    }
  });
});

$(".lang-vector").click(function () {
  $(".lang-box").toggleClass("active-lang-box");
});

$(document).ready(function () {
  if ($(".header").hasClass("home-header")) {
    $(window).scroll(function () {
      var headSticky = $(".header"),
        scroll = $(window).scrollTop();
      if (scroll >= 5) {
        headSticky.removeClass("home-header");
      } else {
        headSticky.addClass("home-header");
      }
    });
  }
});
 
$(document).ready(function() { 
  var initScrollTop = $(window).scrollTop(); 
  $('.parallax-banner').css({'background-position-y' : (initScrollTop/75)+'%'}); 
  $(window).scroll(function() { 
    var scrollTop = $(window).scrollTop(); 
    $('.parallax-banner').css({'background-position-y' : (scrollTop/75)+'%'}); 
  }); 
});
$(document).ready(function() { 
  var initScrollTop = $(window).scrollTop(); 
  $('.parallax-banner-4').css({'background-position-y' : (initScrollTop/90)+'%'}); 
  $(window).scroll(function() { 
    var scrollTop = $(window).scrollTop(); 
    $('.parallax-banner-4').css({'background-position-y' : (scrollTop/90)+'%'}); 
  }); 
});

$('.down-scroll-box').click(function() { 
  var parallaxBannerHeight = $('.parallax-banner').outerHeight();
  let headerHeight = $(".header").outerHeight(); 
  var targetScrollTop = parallaxBannerHeight - headerHeight  
  $('html, body').animate({
      scrollTop: targetScrollTop
  }, 500); 
});

$('.show-more-load').click(function(){
  $('.cir-text').toggleClass('active-text-height');
  $(this).toggleClass('rotate-arrow');
});

$(document).ready(function() {
  $('.counter').each(function() {
    var $this = $(this);
    var countTo = $this.attr('data-count');
    
    $({ countNum: $this.text() }).animate({
      countNum: countTo
    },
    {
      duration: 2000, // Adjust the duration as needed
      easing: 'linear', // Use 'linear' for a constant speed counter-up
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
      }
    });
  });
});

// Carousell
 $(document).ready(function(){
    $('#owl-carousel-1 ').owlCarousel({
      loop: true,
      items: 5,
      margin: 10,  
      nav: true, 
      autoplay:true,
      autoplayTimeout:3000, 
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1400:{
          items: 4
        },
        1920: {
          items: 5
        }
      }
    });
    $('#owl-carousel-2').owlCarousel({
      loop: true,
      items: 5,
      margin: 10,  
      nav: true,  
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1400:{
          items: 4
        },
        1920: {
          items: 5
        }
      }
    });
  });
// Carousell

 
