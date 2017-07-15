const express = require("express");
      router = express.Router();
      passport = require("passport");

// NEW
router.get("/sessions", function(req, res) {
  res.render("sessions/new");
});

// CREATE
router.post("/sessions", passport.authenticate("local", {
  failureRedirect: "/sessions",
  failureFlash: true
}), function(req, res) {
  res.redirect(`/users/${req.user.id}`);
});

// LOGOUT
router.get("/logout", function(req, res) {
  req.logout();
  // flash message
  res.redirect("/");
})

module.exports = router;