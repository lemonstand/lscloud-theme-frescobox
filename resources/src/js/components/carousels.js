!(function($) {
  $(document).ready(function() {
    $(".owl-carousel").each(function(index, element) {
      var options = $(element).data("options"),
        carousel = $(element);

      carousel.owlCarousel(
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

      carousel.trigger("refresh.owl.carousel"); // reflow carousel, fixes 1px preload bug
    });
  });
})(jQuery);
