// https://www.npmjs.com/package/express-async-handler
const asyncHandler = require("express-async-handler");

const Car = require("../models/carModel");

// @desc    Get cars
// @route   GET /api/cars
// @access  Public
const getCars = asyncHandler(async (req, res) => {
  const cars = await Car.find();
  res.status(200).json(cars);
});

// @desc    Add car
// @route   PUT /api/cars
// @access  Public
const addCar = asyncHandler(async (req, res) => {
  const { make, model, package, category, year, color, price } = req.body;
  if (!make || !model || !package || !category || !year || !color || !price) {
    res.status(400);
    throw new error("Please add all fields");
  }

  const car = await Car.create({
    make: make,
    model: model,
    package: package,
    category: category,
    year: year,
    color: color,
    price: price,
  });
  res.status(201).json(car);
});

module.exports = { getCars, addCar };
