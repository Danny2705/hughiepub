const express = require("express");
const Event = require("../../models/event.model");

const router = express.Router();

router.post("/create-event", async (req, res) => {
  console.log(req.body);
  const event = new Event(req.body.event);
  await event.save();
  res.sendStatus(201);
});

router.get("/get-events", async (req, res) => {
  const events = await Event.find();
  res.send(events);
});

router.put("/update-event/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedEvent = await Event.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/delete-event/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedEvent = await Event.findByIdAndDelete(id);
    if (!deletedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.json(deletedEvent);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/get-events/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
