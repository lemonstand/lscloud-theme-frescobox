!(function($) {
  $(document).ready(function() {
    $(window).on("onAfterAjaxUpdate", function() {
      hookCarousels();
      $(".owl-carousel").trigger("refresh.owl.carousel");
    });

    hookCarousels();

    function hookCarousels() {
      $(".owl-carousel:not(.hooked)").each(function(index, element) {
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
        carousel.addClass("hooked");
      });

      setTimeout(function() {
        // reflow carousel, fixes height preload bug
        $(".owl-carousel.hooked").trigger("refresh.owl.carousel");
      }, 250);
    }
  });
})(jQuery);
