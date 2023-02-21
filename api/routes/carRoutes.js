const express = require("express");
const router = express.Router();
const { getCars, addCar } = require("../controllers/carController");

// GET & POST
router.route("/").get(getCars).post(addCar);

module.exports = router;
