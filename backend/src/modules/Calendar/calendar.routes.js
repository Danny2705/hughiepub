const express = require("express");
const calendarController = require("./calendar.controller");

const router = express.Router();

router.post("/create-event", calendarController.createEvent);

router.get("/get-events", calendarController.getEvent);

router.put("/update-event/:id", calendarController.updateEvent);

router.delete("/delete-event/:id", calendarController.deleteEvent);

router.get("/get-events/:id", calendarController.getEventById);

module.exports = router;
