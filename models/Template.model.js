const { Schema, model } = require("mongoose");

const templateSchema = new Schema({
    templateName: {
    type: String,
    trim: true,
  },
  imageURL: { type: String },
});

module.exports = model("Template", templateSchema);