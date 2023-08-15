const { Schema, model } = require("mongoose");

const foodSchema = new Schema({
    meal: {
    type: String,
    trim: true,
  },
  allergyInfo: {
    type: Array,
    trim: true,
  },
  dietaryInfo: {
    type: Array,
    trim: true,
  },
  event: { type: Schema.Types.ObjectId, ref: "Event" },
  guest: { type: Schema.Types.ObjectId, ref: "Guest" },
});

module.exports = model("Food", foodSchema);