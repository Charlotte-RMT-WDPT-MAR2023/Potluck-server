const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const moment = require('moment');

const eventSchema = new Schema(
  {
    title: {
      type: String,
    },
    date: {
      type: Date,
    },
    time: {
      type: String,
    },
    location: {
      type: String,
      required: [true, "Location is required."],
    },
    description: {
      type: String,
    },
    guests: [{ type: Schema.Types.ObjectId, ref: "Guest" }],
    food: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  },
  {
    timestamps: true,
  }
);


module.exports = model("Event", eventSchema);
