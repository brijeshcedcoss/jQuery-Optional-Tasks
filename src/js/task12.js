$(document).ready(function () {
  // Animates a paragraph to fade to an specified opacity (complete the animation within 500 milliseconds).
  $("#start").click(function () {
    $("#animate_div").animate(
      {
        opacity: 0.5,
      },
      500
    );
  });
});
