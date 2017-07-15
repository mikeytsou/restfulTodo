$(document).ready(function() {
  // POST
  $("#todo-form").on("submit", function(event) {
    event.preventDefault();

    const formData = $(this).serialize();
    $.post("/todos", formData, function(response) {
      // console.log(res);
      $("#todo-list").append(`<div>${response.post} - <span>New Todo!</span></div>`);
      $("#todo-value").val("");
    });
  });





});