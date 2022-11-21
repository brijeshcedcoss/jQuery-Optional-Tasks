$(document).ready(function () {
  // Animate an element, by changing its height and width.
  $("#start").click(function () {
    $("#animate_div").animate({
      height: "+=150px",
      width: "+=150px",
    });
  });
});
