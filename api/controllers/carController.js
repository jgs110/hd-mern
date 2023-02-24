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

// @desc    Get car
// @route   GET /api/cars/id
// @access  Public
const getCar = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const car = await Car.findById(id);
  res.status(200).json(car);
});

// @desc    Add car
// @route   POST /api/cars
// @access  Public
const addCar = asyncHandler(async (req, res) => {
  const { make, model, package, category, year, color, miles, price } =
    req.body;
  if (
    !make ||
    !model ||
    !package ||
    !category ||
    !year ||
    !color ||
    !miles ||
    !price
  ) {
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
    miles: miles,
  });
  res.status(201).json(car);
});

module.exports = { getCars, getCar, addCar };
