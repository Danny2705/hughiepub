const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
require("dotenv").config();

const itemRoutes = require("./src/modules/item/Item/items.routes");
const eventRoutes = require("./src/modules/Calendar/calendar.routes");
const authRoutes = require("./src/modules/Auth/auth.routes");
const mailRoutes = require("./src/modules/Mail/mail.routes");

const app = express();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.use(express.json()); // Use JSON body parser
app.use(cors());
app.use(fileUpload());

// Routes
app.use("/api", itemRoutes);
app.use("/api/calendar", eventRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/mail", mailRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
