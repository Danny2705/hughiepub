const Item = require("../../models/items.model");

// Fetch all items
const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Fetch a single item by ID
const getItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findById(id);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create a new item
const createItem = async (req, res) => {
  console.log(req.body);
  const { name, image, description, price } = req.body;
  try {
    const newItem = new Item({
      name,
      image,
      description,
      price,
    });
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update an existing item by ID
const updateItem = async (req, res) => {
  const { id } = req.params;
  const { name, image, description, price } = req.body;
  try {
    const updatedItem = await Item.findByIdAndUpdate(id, {
      name,
      image,
      description,
      price,
    });
    if (!updatedItem) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete an item by ID
const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedItem = await Item.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.json(deletedItem);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
