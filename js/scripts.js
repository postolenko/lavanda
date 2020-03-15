function getHeaderParams() {
    var topCoord =  $(".main_nav_sect").offset().top;
    if(topCoord <= $(window).scrollTop()) {
        $("#nav_sect").addClass("fixed");
    } else {
        $("#nav_sect").removeClass("fixed");
    }
}

function getAnimation() {
  $(".animate").each(function() {
    if( $(this).offset().top <= $(document).scrollTop() + $(window).height() ) {
      $(this).addClass("active");
    }
  });
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var parentBlock;

$(window).load(function() {



});

$(window).resize(function() {
  bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
  getHeaderParams();
  getAnimation();
});

$(document).scroll(function() {
    getHeaderParams();
    getAnimation();
});

$(document).ready(function() {
    getHeaderParams();
    getAnimation();

    if( $(".testimonial_slider").length > 0 ) {
        $(".testimonial_slider").not(".slick-initialized").slick({
            dots: true,
            arrows: true,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 970,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });
    }

    $(".dropdown_item_title").on("click", function(e) {
      e.preventDefault();
      parentBlock = $(this).closest(".dropdown_item");
      dropdownBox = parentBlock.find(".dropdown_item_content");
      if(parentBlock.hasClass("active")) {
        dropdownBox.slideUp(300);
        parentBlock.removeClass("active");
      } else {
        dropdownBox.slideDown(300);
        parentBlock.addClass("active");
      }
    });

    // ----------

    $("input[type='tel']").mask("+38 (999) 999-99-99");

    // ----------

    $(".main_nav a, .logo").click(function(e) {
        e.preventDefault();
        var hrefAttr = $(this).attr("href");
        var visibleBlock = $(hrefAttr);
        parentBlock = $(this).closest(".main_nav");
        parentBlock.find("a").removeClass("active");
        $(this).addClass("active");
        $('html, body').stop().animate({
            'scrollTop': visibleBlock.offset().top - 50
        }, 500);
        $("#resp_nav").fadeOut(300, function() {
          $(".respmenubtn").removeClass("active");
        });
    });

    // ---------

    $(".respmenubtn").click(function(e) {
        e.preventDefault();
        if( $("#resp_nav").is(":hidden") ) {
            $("#resp_nav").fadeIn(300);
            $(this).addClass("active");
        } else {
            $("#resp_nav").fadeOut(300);
            $(this).removeClass("active");
        }
    });
    $("#resp_nav .close_btn").on("click", function(e) {
        e.preventDefault();
        $("#resp_nav").fadeOut(300);
        $(".respmenubtn").removeClass("active");
    });
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#resp_nav").is(":visible") ) {
                $("#resp_nav").fadeOut(300);
                $(".respmenubtn").removeClass("active");
        }
    });
    
    // ----------

});