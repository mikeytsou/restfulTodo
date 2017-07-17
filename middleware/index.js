const middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash("error", "Must be logged in");
  res.redirect("/sessions");
}

module.exports = middlewareObj;