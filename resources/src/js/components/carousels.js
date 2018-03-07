!(function($) {
  $(document).ready(function() {
    $(".owl-carousel").each(function(index, element) {
      var options = $(element).data("options");

      $(element).owlCarousel(
        $.extend(
          {},
          {
            autoHeight: true,
            dots: true,
            items: 1,
            nav: false,
            navText: [
              '<span class="fa fa-chevron-left"></span>',
              '<span class="fa fa-chevron-right"></span>'
            ]
          },
          options
        )
      );
    });

    $(".owl-stage").imagesLoaded(function() {
      $(".owl-stage #owl-item active").owlCarousel({
        items: 1,
        nav: false,
        pagination: false,
        autoHeight: true,
        loop: true,
        lazyLoad: true,
        animateOut: "slideOutRight",
        animateIn: "pulse"
      });
    });
  });
})(jQuery);
