const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const itemRoutes = require("./src/modules/item/items.routes");

const app = express();

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://pub123:pub123@cluster0.ly4evkw.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  });

app.get("/", (req, res) => {
  res.send("Please send request");
});

app.use(cors());
// Routes
app.use("/api", itemRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
