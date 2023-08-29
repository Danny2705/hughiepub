const Event = require("../../models/event.model");

const createEvent = async (req, res) => {
  const event = new Event(req.body);
  await event.save();
  res.sendStatus(201);
};

const getEvent = async (req, res) => {
  const events = await Event.find().sort({ createAt: 1 });
  // const events = await Event.find();
  res.send(events);
};

const updateEvent = async (req, res) => {
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
};

const deleteEvent = async (req, res) => {
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
};

const getEventById = async (req, res) => {
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
};

module.exports = {
  createEvent,
  getEvent,
  updateEvent,
  deleteEvent,
  getEventById,
};
