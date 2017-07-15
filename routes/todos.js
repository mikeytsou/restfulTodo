const express = require("express");
      router = express.Router();
      middleware = require("../middleware/index");
// MODELS
      User = require("../models/user")
      Todo = require("../models/todo")

// INDEX
router.get("/todos", function(req, res) {
  res.render("todos/index");
});

// NEW
router.get("/todos/new", function (req, res) {
  console.log(req.user)
  res.render("todos/new");
});

// CREATE
router.post("/todos", function(req, res) {
  const post = req.body.todo.post;
  const author = {
    id: req.user._id,
    username: req.user.username
  }
  const newTodo = {
    post: post,
    author: author
  }
  Todo.create(newTodo, function(err, newTodos) {
    if (err) {
      console.log(err);
    } else {
      console.log(newTodos);
      res.redirect(`/users/${req.user.id}`);
    }
  })
});

// SHOW
router.get("/users/:id", function(req, res) {
  User.findById(req.params.id, function(err, foundUser) {
    if (err) {
      console.log(err);
      res.redirect("/");
    }
    Todo.find().where('author.id').equals(foundUser._id).exec(function(err, todos) {
      if (err) {
        console.log(err);
        res.redirect("/");
      }
      res.render("users/show", {user: foundUser, todos: todos})
    })
  })
});

module.exports = router;