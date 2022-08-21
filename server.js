// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// VIEW ROUTES
app.get("/", (req, res) => {
  res.render("index", {name: "Vincent Kendrick"});
});

// Test API Routes
app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.get("/apiFun", (req, res) => {
  res.send("API FUN");
  var adminUser = req.params.apiFun;
  console.log(adminUser);
  res.end();
});

// // Static directory to be served
// app.use(express.static("app/public"));

// // Routes
// // =============================================================
// require("./app/routes/api-routes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log(`App listening on 🌎 PORT http://localhost:${PORT}`);
});
