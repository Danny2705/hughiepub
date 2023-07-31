const mongoose = require("mongoose");

// Define the schema for the Item model
const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    desc: { type: String },
    price: { type: Number, required: true },
    quantity: { type: Number, default: 1 },
  },
  {
    timestamps: true,
  }
);

// Create the Item model based on the schema
const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
