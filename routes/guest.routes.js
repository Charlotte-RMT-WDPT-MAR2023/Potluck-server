const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Guest = require("../models/Guest.model");
const Event = require("../models/Event.model");

//  POST /api/guests  -  Creates a new guest
router.post("/guests", (req, res, next) => {
  const { name, plusOne, email, rsvp, allergyInfo, dietaryInfo, foodId, eventId } = req.body;

  Guest.create({ name, plusOne, email, rsvp, allergyInfo, dietaryInfo, food: foodId, event: eventId })
    .then((newGuest) => {
      return Event.findByIdAndUpdate(eventId, {
        $push: { guests: newGuest._id },
      });
    })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

//  GET /api/guests/:guestId  - Retrieves a specific guest by id
router.get("/guests/:guestId", (req, res, next) => {
  const { guestId } = req.params;

  Guest.findById(guestId)
    .then((guest) => res.json(guest))
    .catch((error) => res.json(error));
});

// PUT  /api/guests/:guestId  - Updates a specific guest by id
router.put("/guests/:guestId", (req, res, next) => {
  const { guestId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(guestId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Guest.findByIdAndUpdate(guestId, req.body, { new: true })
    .then((updatedGuest) => res.json(updatedGuest))
    .catch((err) => res.json(err));
});

//  DELETE /api/guests/:guestId  - Deletes a specific guest by id
router.delete("/guests/:guestId", (req, res, next) => {
  const { guestId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(guestId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Guest.findByIdAndRemove(guestId)
    .then(() =>
      res.json({ message: `Guest with ${guestId} is removed successfully.` })
    )
    .catch((error) => res.json(error));
});

module.exports = router;
