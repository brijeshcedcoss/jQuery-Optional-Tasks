$(document).ready(function () {
  //  Toggle animation on and off.
  $("#start").click(function () {
    $(".animate_div").animate(
      {
        height: 'toggle',
        width:'toggle',
      },
      500
    );
  });
});
