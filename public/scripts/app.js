/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  $("#get").click(function() {
    $.get("/tweets", function(data, status) {
      console.log(data);
      let newText = data[0].content.text;
      console.log(newText)
      $("#p1").text(newText);
    });
  });


  $('#form1').on('submit', function(event) {
    event.preventDefault();
    let newData = $(this).serialize();
    $.post("/tweets",
      newData,
      function(data, status) {
      console.log(data);
      $("#p2").text(data[0].content.text);
      });
  });
});