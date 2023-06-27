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
});

router.patch("/:id", async (req, res) => {
  try {
    const blogId = req.params.id;
    const { title, description } = req.body;

    const updatedBlog = await Blog.findOneAndUpdate(
      { _id: blogId },
      { title, description },
      { new: true }
    );

    if (updatedBlog) {
      res.status(200).json(updatedBlog);
    } else {
      res.status(404).json({ error: "Blog not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
