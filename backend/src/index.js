const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

const blogRoutes = require("./routes/blogRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI;

app.use(express.json());
app.use(cors());
app.use("/api/blogs", blogRoutes);

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Connected to DB");

    app.listen(PORT, () => {
      console.log("Listening for requests...");
    });
  })
  .catch((err) => {
    console.log(err);
  });
