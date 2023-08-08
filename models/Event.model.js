const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const eventSchema = new Schema(
  {
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
    guests: [{ type: Schema.Types.ObjectId, ref: "Guests" }],
    food: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  },
  {
    timestamps: true,
  }
);


module.exports = model("Event", eventSchema);
