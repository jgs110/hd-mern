// https://www.npmjs.com/package/express-async-handler
const asyncHandler = require("express-async-handler");

// @desc    Get cars
// @route   GET /api/cars
// @access  Public
const getCars = asyncHandler(async (req, res) => {
  res.status(200).json([
    {
      id: "3",
      make: "Ford",
      model: "Mustang",
      package: "SE",
      category: "Sedan",
      year: "2022",
      color: "Red",
      price: "25000",
    },
    {
      id: "3",
      make: "Ford",
      model: "Mustang",
      package: "SE",
      category: "Sedan",
      year: "2022",
      color: "Red",
      price: "25000",
    },
    {
      id: "3",
      make: "Ford",
      model: "Mustang",
      package: "SE",
      category: "Sedan",
      year: "2022",
      color: "Red",
      price: "25000",
    },
    {
      id: "3",
      make: "Ford",
      model: "Mustang",
      package: "SE",
      category: "Sedan",
      year: "2022",
      color: "Red",
      price: "25000",
    },
  ]);
});

// @desc    Add car
// @route   PUT /api/cars
// @access  Public
const addCar = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body.text) {
    res.status(400);
    throw new error("Please add a text field");
  }
  res.status(201).json([
    {
      id: "3",
      make: "Ford",
      model: "Mustang",
      package: "SE",
      category: "Sedan",
      year: "2022",
      color: "Red",
      price: "25000",
    },
    {
      id: "3",
      make: "Ford",
      model: "Mustang",
      package: "SE",
      category: "Sedan",
      year: "2022",
      color: "Red",
      price: "25000",
    },
    {
      id: "3",
      make: "Ford",
      model: "Mustang",
      package: "SE",
      category: "Sedan",
      year: "2022",
      color: "Red",
      price: "25000",
    },
    {
      id: "3",
      make: "Ford",
      model: "Mustang",
      package: "SE",
      category: "Sedan",
      year: "2022",
      color: "Red",
      price: "25000",
    },
  ]);
});

module.exports = { getCars, addCar };
