const express = require("express");
      router = express.Router();

// ROOT
router.get("/", function(req, res) {
  res.redirect("/todos");
});

module.exports = router;