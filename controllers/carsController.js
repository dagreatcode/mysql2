const express = require("express");
const db = require("../models");
const router = express.Router();

// Views
router.get("/car", (req, res) => {
  db.Cars.findAll().then((allCars) => {
    res.render("all-cars", { allCars: allCars });
  });
});
router.get("/car/new", (req, res) => {
  res.render("new-car");
});
router.get("/car/:id", (req, res) => {
  db.Cars.findOne({
    where: {
      id: req.params.findOne,
    },
  }).then((foundCar) => {
    res.render("one-car", {
      name: foundCar.name,
      price: foundCar.price,
    });
  });
});
router.get("/car/:id/edit", (req, res) => {
  db.Cars.findOne({
    where: {
      id: req.params.findOne,
    },
  }).then((foundCar) => {
    res.render("edit-car", {
      name: foundCar.name,
      price: foundCar.price,
    });
  });
});

// API's

router.post("/api/car", (req, res) => {
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
router.put("/api/car/:id", (req, res) => {
  db.Cars.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((updatedObject) => {
    console.log(updatedObject);
    res.end();
  });
});
module.exports = router;
