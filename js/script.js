$(document).ready(function() {
  $(".icons1").click(function() {
    $(".design_info").toggle();
      $(".icons1").toggle();  
  });
});

$(document).ready(function() {
  $(".design_info").click(function() {
    $(".icons1").toggle();
      $(".design_info").toggle();  
  });
});


$(document).ready(function() {
  $(".development_icon").click(function() {
    $(".development_info").toggle();
  });
});

$(document).ready(function() {
  $(".product_icon").click(function() {
    $(".product_info").toggle();
  });
});

$(document).ready(function(){
  $("#JIM").mouseover(function(){
    $(".overlay").show(); 
  });
});