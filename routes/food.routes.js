const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Food = require("../models/Food.model");
const Event = require("../models/Event.model");

//  POST /api/foods  -  Creates a new food
router.post("/foods", (req, res, next) => {
  const { meal, allergyInfo, dietaryInfo, eventId } = req.body;

  Food.create({ meal, allergyInfo, dietaryInfo, event: eventId })
    .then((newFood) => {
      return Event.findByIdAndUpdate(eventId, {
        $push: { food: newFood._id },
      });
    })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

//  GET /api/foods/:foodId  - Retrieves a specific food by id
router.get("/foods/:foodId", (req, res, next) => {
  const { foodId } = req.params;

  Food.findById(foodId)
    .then((food) => res.json(food))
    .catch((error) => res.json(error));
});

// PUT  /api/foods/:foodId  - Updates a specific food by id
router.put("/foods/:foodId", (req, res, next) => {
  const { foodId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(foodId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Food.findByIdAndUpdate(foodId, req.body, { new: true })
    .then((updatedFood) => res.json(updatedFood))
    .catch((err) => res.json(err));
});

//  DELETE /api/foods/:foodId  - Deletes a specific food by id
router.delete("/foods/:foodId", (req, res, next) => {
  const { foodId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(foodId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Food.findByIdAndRemove(foodId)
    .then(() =>
      res.json({ message: `Food with ${foodId} is removed successfully.` })
    )
    .catch((error) => res.json(error));
});

module.exports = router;
