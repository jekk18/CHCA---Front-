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
  $('.parallax-banner').css({'background-position-y' : (initScrollTop/50)+'%'}); 
  $(window).scroll(function() { 
    var scrollTop = $(window).scrollTop(); 
    $('.parallax-banner').css({'background-position-y' : (scrollTop/50)+'%'}); 
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

 
