const express = require("express");
const router = express.Router();
const { getCars, getCar, addCar } = require("../controllers/carController");

// GET & POST
router.route("/").get(getCars).post(addCar);

// GET Car
router.route("/:id").get(getCar);

module.exports = router;
