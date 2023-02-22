const mongoose = require("mongoose");

const carSchema = mongoose.Schema(
  {
    make: { type: String, required: [true, "Please add a make"] },
    model: { type: String, required: [true, "Please add a model"] },
    package: { type: String, required: [true, "Please add a package"] },
    category: { type: String, required: [true, "Please add a category"] },
    year: { type: String, required: [true, "Please add a year"] },
    color: { type: String, required: [true, "Please add a color"] },
    price: { type: String, required: [true, "Please add a price"] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Car", carSchema);
