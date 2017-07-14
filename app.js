const express = require("express");
      app = express();
      mongoose = require("mongoose");
      bodyParser = require("body-parser");
      passport = require("passport");
      localStrategy = require("passport-local");
      passportLocalMongoose = require("passport-local-mongoose");
      methodOverride = require("method-override");
      flash = require("connect-flash");
// ROUTES
      indexRoutes = require("./routes/index");
      usersRoutes = require("./routes/users");
      sessionsRoutes = require("./routes/sessions");


// APP CONFIG
mongoose.connect("mongodb://localhost/restful_todo");
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(flash());
app.set("view engine", "ejs");

// PASSPORT CONFIG
app.use(require("express-session")({
  secret: "THIS IS A SECRET",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// HELPERS
app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

// ROUTES
app.use(indexRoutes);
app.use(usersRoutes);
app.use(sessionsRoutes);


// MISSING ROUTE
app.get("*", function(req, res) {
  res.send("PAGE NOT FOUND");
})

// SERVER
app.listen(3000, function() {
  console.log("CONNECT TO PORT 3000");
})
