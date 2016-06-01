
$(document).ready(function(){
  $("#racer").change(function(){
    var racer = $("#racer").val();
    $("#racer-display").removeClass();
    $("#racer-display").addClass(racer);
  });

  $("#course").change(function(){
    var racer = $("#course").val();
    $("#course-display").removeClass();
    $("#course-display").addClass(racer);
  });
});
