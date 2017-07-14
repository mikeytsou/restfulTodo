const express = require("express");
      router = express.Router();
      passport = require("passport");
// MODELS
      User = require("../models/user");

// NEW
router.get("/sessions", function(req, res) {
  res.render("sessions/new");
});

// CREATE
router.post("/sessions", passport.authenticate("local", {
  successRedirect: "/todos",
  failureRedirect: "/sessions",
  // successFlash: "Welcome to YelpCamp",
  // failureFlash: true
}), function(req, res) {});

module.exports = router;