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
      usersRoutes = require("./routes/users")

// APP CONFIG
mongoose.connect("mongodb://localhost/restful_todo");
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(flash());
app.set("view engine", "ejs");

// ROUTES
app.use(indexRoutes);
app.use(usersRoutes);


// MISSING ROUTE
app.get("*", function(req, res) {
  res.send("PAGE NOT FOUND");
})

// SERVER
app.listen(3000, function() {
  console.log("CONNECT TO PORT 3000");
})
