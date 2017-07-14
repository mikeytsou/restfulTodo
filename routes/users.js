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
// router.post("")

module.exports = router;