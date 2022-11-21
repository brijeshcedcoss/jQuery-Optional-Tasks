$(document).ready(function () {
  // Find the specific option tag text value of a selected option
  $("#selecttask").change(function () {
    let val = $(this).val();
    $("#seleted_value").text(val);
  });
});
