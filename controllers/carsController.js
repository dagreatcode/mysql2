const express = require("express");
const db = require("../models");
const router = express.Router();

// Views
router.get("/cars", (req, res) => {
  db.Cars.findAll().then((allCars) => {
    res.render("all-cars", { allCars: allCars });
  });
});
router.get("/cars/:id", (req, res) => {
  res.render("one-car");
});
router.get("/cars/:id/edit", (req, res) => {
  res.render("edit-car");
});
router.get("/cars/new", (req, res) => {
  res.render("new-car");
});

// API's

module.exports = router;
