const express = require("express");
      router = express.Router();
      passport = require("passport");

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

// LOGOUT
router.get("/logout", function(req, res) {
  req.logout();
  // flash message
  res.redirect("/todos");
})

module.exports = router;