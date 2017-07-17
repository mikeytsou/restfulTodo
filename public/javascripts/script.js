$(document).ready(function() {

  createPostListener();
  deletePostListener();
  hideFlashMessage();

});

const createPostListener = function() {
  $("#todo-form").on("submit", function(event) {
    event.preventDefault();

    const $formData = $(this).serialize();

    $.ajax({
      url: '/todos',
      type: 'POST',
      dataType: 'json',
      data: $formData
    })
    .done(function(response) {
      $("#todo-list").append(`
          <div class="row">
            <div class="column">
              <span id="response-text"><strong>${response.post}</strong> - <span id="created-at">New Todo!</span</span>
              <form action="/todos/${response._id}" method="POST" id="${response._id}" class="delete">
                <input type="submit" value="Complete" class="ui black button mini">
              </form>
            </div>
          </div>
        `);
      $("#todo-value").val("");
    })
    .fail(function() {
      console.log("error");
    });
  });
}

const deletePostListener = function() {
  $("#todo-list").on("submit", ".delete", function(event) {
    event.preventDefault();

    const $url = $(this).attr("action");
    const $item = $(this).closest(".row");

    $.ajax({
      url: $url,
      type: 'DELETE',
      dataType: 'json'
    })
    .done(function(response) {
      $($item).find("#response-text").fadeOut(300, function() {
        $($item).remove();
      });
    })
    .fail(function() {
      console.log("error");
    });
  });
}

const hideFlashMessage = function() {
  $("#flash-message").show().delay(5000).fadeOut();
}