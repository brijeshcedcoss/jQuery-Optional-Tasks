$(document).ready(function () {
  //  Write a jQuery Code to get a single element from a list.
  let element = $("ul").children().first().html();
  $("#element").text(element);
});
