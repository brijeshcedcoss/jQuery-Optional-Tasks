$(document).ready(function () {
  //  Animates all shown paragraphs to hide slowly (complete the animation within specified time).
  $("#start").click(function () {
    $(".animate_div").animate(
      {
        opacity: 0,
      },
      500
    );
  });
});
