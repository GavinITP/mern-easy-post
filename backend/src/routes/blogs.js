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

router.get("/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  try {
    res.status(200).json(blog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
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

router.delete("/:id", async (req, res) => {
  try {
    const blog = await Blog.deleteOne({ _id: req.params.id });
    res.status(200).json(blog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }

  res.json({ message: "delete a post" });
});

router.patch("/:id", (req, res) => {
  res.json({ message: "update a post" });
});

module.exports = router;
