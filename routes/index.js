const express = require("express");
      router = express.Router();
      passport = require("passport");

// ROOT
router.get("/", function(req, res) {
  res.redirect("/todos");
});

module.exports = router;