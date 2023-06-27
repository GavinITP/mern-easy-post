const express = require("express");
const Blog = require("../models/blogModel");

const router = express.Router();

router.get("/", async (req, res) => {
  const blogs = await Blog.find();

  try {
    res.status(200).json(blogs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/:id", (req, res) => {
  res.json({ message: "single posts" });
});

router.post("/", async (req, res) => {
  const { title, description } = req.body;

  try {
    const blog = await Blog.create({ title, description });
    res.status(200).json(blog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", (req, res) => {
  res.json({ message: "delete a post" });
});

router.patch("/:id", (req, res) => {
  res.json({ message: "update a post" });
});

module.exports = router;
