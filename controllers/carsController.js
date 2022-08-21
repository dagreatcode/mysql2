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

router.post("/api/cars", (req, res) => {
  db.Cars.create(req.body)
    .then((newCar) => {
      res.json({
        error: false,
        data: newCar,
        message: "Successfully created new car",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to create new car.",
      });
    });
});

module.exports = router;
