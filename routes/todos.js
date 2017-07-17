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

// CREATE
router.post("/todos", middleware.isLoggedIn, function(req, res) {
  const post = req.body.post;
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
      if (req.xhr) {
        res.json(newTodos);
      } else {
        res.redirect(`/users/${req.user.id}`);
      }
    }
  })
});

// SHOW
router.get("/users/:id", middleware.profilePrivacy, function(req, res) {
  User.findById(req.params.id, function(err, foundUser) {
    if (err) {
      console.log(err);
      res.redirect("/todos");
    }
    Todo.find().where('author.id').equals(foundUser._id).exec(function(err, todos) {
      if (err) {
        console.log(err);
        res.redirect("/todos");
      }
      res.render("users/show", {user: foundUser, todos: todos})
    });
  });
});

// DELETE
router.delete("/todos/:id", middleware.isLoggedIn, function(req, res) {
  Todo.findByIdAndRemove(req.params.id, function(err, todo) {
    if (err) {
      console.log(err)
    } else {
      res.json(todo);
    }
  });
});

module.exports = router;