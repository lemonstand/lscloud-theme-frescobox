!(function($) {
  $(document).ready(function() {
    // Enable global tooltips:
    $('[data-toggle="tooltip"]').tooltip();

    $("[data-match-group]").each(function(index, element) {
      console.log(
        '[data-match-group="' + $(element).data("match-group") + '"]'
      );
      $(
        '[data-match-group="' + $(element).data("match-group") + '"]'
      ).matchHeight();
    });

    /* product dropdown: sort */
    $(document).on("change", "select[data-sort-redirect]", function() {
      (path = window.location.pathname + "?" + $(this).val()),
        (baseUrl = window.location.protocol + "//" + window.location.host);
      window.location = baseUrl + path;
    });

    /* fix pagination when there are a lot of products */
    var $item = $(".pagination .page-item");
    if ($item.length > 10) {
      $item.slice(+3, -4).hide();
      $(".pagination .page-item:nth-child(3)").after("<p>...</p>");
    }
  });
})(jQuery);
