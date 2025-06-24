require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const todosRoute = require("./routes/todos");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/todos", todosRoute);

const PORT = process.env.PORT || 5000;

console.log("Connecting to MongoDB...");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:");
    console.error(err.message);
  });
