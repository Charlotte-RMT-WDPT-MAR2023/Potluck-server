const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const guestSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  plusOne: {
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
 food: { type: Schema.Types.ObjectId, ref: "food" },
  event: { type: Schema.Types.ObjectId, ref: "event" },
});

module.exports = model("Guest", guestSchema);
