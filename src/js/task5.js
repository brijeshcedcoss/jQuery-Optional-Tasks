$(document).ready(function () {
  // Check/uncheck a checkbox input or radio button?

  // for uncheck
  $("#check").click(function () {
    $("#checkInput").prop("checked", true);
  });

  // for check
  $("#uncheck").click(function () {
    $("#checkInput").prop("checked", false);
  });
});
