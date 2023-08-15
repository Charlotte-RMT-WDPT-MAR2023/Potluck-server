const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Event = require("../models/Event.model");
const Guest = require("../models/Guest.model");

//  POST /api/events  -  Creates a new event
router.post("/events", (req, res, next) => {
  const { title, date, time, location, description} = req.body;

  Event.create({ title, date, time, location, description, guests: [], food: []  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

//  GET /api/events -  Retrieves all of the events
router.get("/events", async (req, res, next) => {
  
  
 Event.find()
  .populate("guests")
  .populate("food")
       .then((allEvents) => res.json(allEvents))
  .catch((err) => res.json(err));
});

//  GET /api/events/:eventId -  Retrieves a specific event by id
router.get("/events/:eventId", async (req, res, next) => {
  const { eventId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(eventId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

 // const eventList = await Event.findById(eventId).populate("guests")

  //if(eventList) return res.status(2002).json(eventList)


 Event.findById(eventId)

    .populate("guests")
    .populate("food")
    .then((event) => res.status(200).json(event))
   .catch((error) => res.json(error));
});



// PUT  /api/events/:eventId  -  Updates a specific event by id
router.put("/events/:eventId", (req, res, next) => {
  const { eventId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(eventId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Event.findByIdAndUpdate(eventId, req.body, { new: true })
    .then((updatedEvent) => res.json(updatedEvent))
    .catch((error) => res.json(error));
});

// DELETE  /api/events/:eventId  -  Deletes a specific event by id
router.delete("/events/:eventId", (req, res, next) => {
  const { eventId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(eventId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Event.findByIdAndRemove(eventId)
    .then(() =>
      res.json({
        message: `Event with ${eventId} is removed successfully.`,
      })
    )
    .catch((error) => res.json(error));
});

module.exports = router;
