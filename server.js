// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
const express = require("express");
const exphbs = require("express-handlebars");
const handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const db = require("./models");
const carsController = require("./controllers/carsController");
const usersController = require("./controllers/usersController");
var compression = require('compression')

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setup filter
app.use(compression({ filter: shouldCompress }))
 
function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }
 
  // fallback to standard filter function
  return compression.filter(req, res)
}

// Set Handlebars.
app.engine(
  "handlebars",
  exphbs.engine({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(handlebars),
  })
);
app.set("view engine", "handlebars");

// VIEW ROUTES
app.get("/", (req, res) => {
  res.render("index", { name: "Vincent Kendrick" });
});

// Test API Routes
app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.get("/apiFun", (req, res) => {
  res.send("API FUN");
  const adminUser = req.params.apiFun;
  console.log(adminUser);
  res.end();
});

// // Static directory to be served
// app.use(express.static("app/public"));

// // Routes
app.use(carsController);
app.use(usersController);

// // =============================================================
// require("./app/routes/api-routes.js")(app);

// Starts the server to begin listening
// =============================================================
// db.sequelize.sync({force:true}).then(function () { // TODO: Drops Database to mirgate added changes from the model
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(`App listening on ???? PORT http://localhost:${PORT}`);
  });
});
