const express = require("express");
const router = express.Router();
const db = require("../models");

// VIEWS
router.get("/car", (req, res) => {
  db.Car.findAll().then((allCars) => {
    res.render("all-cars", { allCars: allCars });
  });
});
// Always go before your id route
router.get("/car/new", (req, res) => {
  res.render("new-car");
});
router.get("/car/:id", (req, res) => {
  db.Car.findOne({
    where: {
      id: req.params.id,
    },
  }).then((foundCar) => {
    console.log(foundCar);
    res.render("one-car", {
      name: foundCar.name,
      price: foundCar.price,
      id: foundCar.id,
    });
  });
});
router.get("/car/:id/edit", (req, res) => {
  db.Car.findOne({
    where: {
      id: req.params.id,
    },
  }).then((foundCar) => {
    console.log(foundCar);
    res.render("edit-car", {
      name: foundCar.name,
      price: foundCar.price,
      id: foundCar.id,
    });
  });
});

// API's

router.post("/api/car", (req, res) => {
  console.log(req.body);
  db.Car.create(req.body)
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
  db.Car.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((updatedObject) => {
    console.log(updatedObject);
    res.end();
  });
});
router.delete("/api/car/:id", (req, res) => {
  db.Car.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    res.end();
  });
});
module.exports = router;
