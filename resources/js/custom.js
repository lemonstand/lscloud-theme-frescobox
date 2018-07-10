$(document).ready(function() {

// Shop Category Accordion
      
  if($(window).width() < 991){
      
  $('.slide').hide();
  $("#accordion").find("div[role|='button']").click(function() { 
    $("#accordion").find("div[role|='button']").removeClass('active');
    $('.slide').slideUp('fast');
    $('.plus').toggle();
    $('.minus').toggle();
    var selected = $(this).next('.slide');
    if (selected.is(":hidden")) {
      $(this).next('.slide').slideDown('fast');
      $(this).toggleClass('active');
    }
  });
  
  }
});