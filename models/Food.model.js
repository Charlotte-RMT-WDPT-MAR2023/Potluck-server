const { Schema, model } = require("mongoose");

const foodSchema = new Schema({
    meal: {
    type: String,
    trim: true,
  },
  mealAllergens: {
    type: String,
    trim: true,
  },
  mealDietary: {
    type: String,
    trim: true,
  },
});

module.exports = model("Food", foodSchema);