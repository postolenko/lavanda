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
});

$(document).scroll(function() {



});

$(document).ready(function() {

    if( $(".testimonial_slider").length > 0 ) {
        $(".testimonial_slider").not(".slick-initialized").slick({
            dots: true,
            arrows: true,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 2,
            slidesToScroll: 1,
            // responsive: [
            //     {
            //       breakpoint: 900,
            //       settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 2
            //       }
            //     },
            //     {
            //       breakpoint: 540,
            //       settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //       }
            //     }
            //   ]
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

});