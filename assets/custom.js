$(document).ready(function () {
  $('.nutrition-slider-row.owl-carousel').owlCarousel({
    autoplay:false,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    loop: false,
    margin: 15,
    nav: true,
    thumbs: false,
    dots: true,
    navText: [
      '<i class="fa fa-caret-left" aria-hidden="true"></i>',
      '<i class="fa fa-caret-right" aria-hidden="true"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  });
  $('.latest-stories-slider.owl-carousel').owlCarousel({
    autoplay:false,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    loop: true,
    margin: 20,
    nav: false,
    thumbs: false,
    dots: false,
    navText: [
      '<i class="fa fa-caret-left" aria-hidden="true"></i>',
      '<i class="fa fa-caret-right" aria-hidden="true"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2.5
      },
      1000: {
        items: 3.2
      }
    }
  });
   // Accordian Tabs
    $(".accordion_head").click(function () {
        if ($('.accordion_body').is(':visible')) {
            $(".accordion_body").slideUp(300);
            $(".plusminus").text('+');
        }
        if ($(this).next(".accordion_body").is(':visible')) {
            $(this).next(".accordion_body").slideUp(300);
            $(this).find(".plusminus").text('+');
        } else {
            $(this).next(".accordion_body").slideDown(300);
            $(this).find(".plusminus").text('-');
        }
    });
})
