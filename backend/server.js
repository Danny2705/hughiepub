const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const itemRoutes = require("./src/modules/item/Item/items.routes");
const eventRoutes = require("./src/modules/Calendar/calendar.routes");
const authRoutes = require("./src/modules/Auth/auth.routes");

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Connected to MongoDB");
});

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", itemRoutes);
app.use("/api/calendar", eventRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
