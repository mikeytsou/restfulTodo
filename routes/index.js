const express = require("express");
      router = express.Router();
      passport = require("passport");

router.get("/", function(req, res) {
  res.render("landing");
});

module.exports = router;