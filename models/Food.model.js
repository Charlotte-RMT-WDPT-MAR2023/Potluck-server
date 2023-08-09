const { Schema, model } = require("mongoose");

const foodSchema = new Schema({
    meal: {
    type: String,
    trim: true,
  },
  allergyInfo: {
    type: String,
    trim: true,
  },
  dietaryInfo: {
    type: String,
    trim: true,
  },
});

module.exports = model("Food", foodSchema);