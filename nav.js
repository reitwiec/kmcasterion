$(document).ready(function() {
  $("#open").on("click", function() {
    $("#overlay").removeClass("close");
    $("#fp").hide();
  });

  $("#close").on("click", function() {
    $("#overlay").addClass("close");
    $("#fp").show();
  });
});
