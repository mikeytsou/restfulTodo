const express = require("express");
      router = express.Router();
      passport = require("passport");
// MODELS
      Todo = require("../models/todo")

// INDEX
router.get("/todos", function(req, res) {
  res.render("todos/index");
});

// NEW
router.get("/todos/new", function (req, res) {
  res.render("index");
});

// CREATE
// router.post("/todo", function(req, res) {
//   const post = req.body.todo.post;
//   const author = {
//     id: req.user._id,
//     username: req.user.username
//   },
//   const newTodo = {
//     post: post,
//     author: author
//   }
//   Todo.create(newTodo, function(err, newTodo) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(newTodo);
//       res.redirect("index");
//     }
//   })
// });

module.exports = router;