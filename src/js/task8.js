$(document).ready(function () {
  // Write jQuery Code to add the index of the list item at the beginning of the list item. 
  $("li").each(function (index, element) {
    $(this).html(index + " " + $(this).text());
  });
});
