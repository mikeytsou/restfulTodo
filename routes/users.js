const express = require("express");
      router = express.Router();
      passport = require("passport");
// MODELS
      User = require("../models/user");

// NEW
router.get("/users/new", function(req, res) {
  res.render("users/new");
});

// CREATE
router.post("/users", function(req, res) {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
  });
  const password = req.body.password;
  User.register(newUser, password, function(err, user) {
    if (err) {
      console.log(err);
      // req.flash("error", err.message);
      return res.render("users/new", {error: err.message});
    }
    passport.authenticate("local")(req, res, function() {
      req.flash("success", `Hello ${user.firstName} ${user.lastName}!`)
      res.redirect(`/users/${user.id}`);
    });
  });
})

module.exports = router;