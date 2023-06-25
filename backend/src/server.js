const express = require("express");
const dotenv = require("dotenv");
const blogRoutes = require("../routes/blogs");

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api/blogs", blogRoutes);

app.listen(PORT, () => {
  console.log("Listening for requests...");
});
