const middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash("error", "Must be logged in");
  res.redirect("/sessions");
}

middlewareObj.profilePrivacy = function(req, res, next) {
  if (req.isAuthenticated() && req.params.id === req.user.id) {
    return next();
  }
  req.flash("error", "You don't have permission");
  res.redirect("/sessions");
}

module.exports = middlewareObj;