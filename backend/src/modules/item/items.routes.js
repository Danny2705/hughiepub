const express = require("express");
const itemController = require("./items.controller");

const router = express.Router();

// GET all items
router.get("/items", itemController.getAllItems);

// GET a single item by ID
router.get("/items/:id", itemController.getItemById);

// POST create a new item
router.post("/items", itemController.createItem);

// PUT update an existing item by ID
router.put("/items/:id", itemController.updateItem);

// DELETE an item by ID
router.delete("/items/:id", itemController.deleteItem);

module.exports = router;
