$(document).ready(function() {
  // POST
  $("#todo-form").on("submit", function(event) {
    event.preventDefault();

    const formData = $(this).serialize();
    $.post("/todos", formData, function(response) {
      // console.log(res);
      $("#todo-list").append(`
          <div class="row">
            <div class="column">
              <strong>${response.post}</strong> - <span>New Todo!</span>
              <form action="/todos/${response._id}" method="POST" id="${response._id}" class="delete">
                <input type="submit" value="Complete" class="ui black button mini">
              </form>
            </div>
          </div>
        `);
      $("#todo-value").val("");
    });
  });

  $("#todo-list").on("submit", ".delete", function(event) {
    event.preventDefault();

    const confirmAlert = confirm("Are you sure?");
    if (confirmAlert) {
      const $url = $(this).attr("action");
      const $item = $(this).closest(".row");

      $.ajax({
        url: $url,
        type: "DELETE",
        dataType: "json",
        success: function(response) {
          $($item).remove();
        }
      });
    }
  });


});

// <li class="list-group-item">\n\t\t\t\t
//   <div class="edit-item-form">\n\t\t\t\t\t
//     <div class="form-group">\n\t\t\t\t\t\t
//       <label for="' + todo._id + '">Item Text</label>\n\t\t\t\t\t\t
//         <input type="text" value="' + todo.text + '" name="todo[text]" class="form-control" id="' + todo._id + '">\n\t\t\t\t\t
//     </div>\n\t\t\t\t\t

//     <button class="btn btn-primary update-item-button">Update Item</button>\n\t\t\t\t
//   </div>\n\t\t\t\t

//   <span class="lead">\n\t\t\t\t\t' + todo.text + '\n\t\t\t\t</span>\n\t\t\t\t

//   <div class="pull-right">\n\t\t\t\t\t
//     <button class="btn btn-sm btn-warning edit-button">Edit</button>\n\t\t\t\t\t
//     <button class="btn btn-sm btn-danger delete-item-button">Delete</button>\n\t\t\t\t
//   </div>\n\t\t\t\t

//   <div class="clearfix"></div>\n\t\t\t
// </li>\n\t\t\t';




// <li class="list-group-item">\n\t\t\t\t\t
//   <form action="/todos/' + todo._id + '" method="POST" class="edit-item-form">\n\t\t\t\t\t\t
//     <div class="form-group">\n\t\t\t\t\t\t\t
//       <label for="' + todo._id + '">Item Text</label>\n\t\t\t\t\t\t\t
//         <input type="text" value="' + todo.text + '" name="todo[text]" class="form-control" id="' + todo._id + '">\n\t\t\t\t\t\t
//     </div>\n\t\t\t\t\t\t

//     <button class="btn btn-primary">Update Item</button>\n\t\t\t\t\t
//   </form>\n\t\t\t\t\t

//   <span class="lead">\n\t\t\t\t\t\t' + todo.text + '\n\t\t\t\t\t</span>\n\t\t\t\t\t

//   <div class="pull-right">\n\t\t\t\t\t\t
//     <button class="btn btn-sm btn-warning edit-button">Edit</button>\n\t\t\t\t\t\t

//     <form style="display: inline" method="POST" action="/todos/' + todo._id + '" class="delete-item-form">\n\t\t\t\t\t\t\t
//       <button type="submit" class="btn btn-sm btn-danger">Delete</button>\n\t\t\t\t\t\t
//     </form>\n\t\t\t\t\t
//   </div>\n\t\t\t\t\t
//   <div class="clearfix"></div>\n\t\t\t\t
// </li>\n\t\t\t\t');
