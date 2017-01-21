/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  $('#loader').hide();

//get button
  // $("#get").click(function() {
  //   $.get("/tweets", function(data, status) {
  //     console.log(data);
  //     let newText = data[0].content.text;
  //     console.log(newText)
  //     $("#p1").text(newText);
  //   });
  // });


  // $('#form1').on('submit', function(event) {
  //   event.preventDefault();
  //   let newData = $(this).serialize();
  //   $.post("/tweets",
  //     newData,
  //     //success callback
  //     function(data, status) {
  //     console.log(data);
  //     $("#p2").text(data[0].content.text);
  //     });
  // });

jQuery.ajaxSetup({
  beforeSend: function() {
     $('#loader').show();
  },
  complete: function(){
     $('#loader').hide();
  },
  success: function() {}
});

//this is what the demo looks like calling them all back after an addition
$('#form1').on('submit', function(event) {
    event.preventDefault();
    let newData = $(this).serialize();
    $.post("/tweets",
      newData,
      //success callback
      function(data, status) {
      $.get("/tweets", function(data, status) {

      let newText = "";
      console.log(data);
      data.forEach((item) =>{
      newText += item.content.text;
      });
      $("#p2").text(newText);
    });
  });
});

//doc ready end
});