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
  email: {
    type: String,
    trim: true,
  },
  rsvp: {
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
 food: { type: Schema.Types.ObjectId, ref: "Food" },
  event: { type: Schema.Types.ObjectId, ref: "Event" },
});

module.exports = model("Guest", guestSchema);
