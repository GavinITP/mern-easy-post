const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "all posts" });
});

router.get("/:id", (req, res) => {
  res.json({ message: "single posts" });
});

router.post("/", (req, res) => {
  res.json({ message: "add new post" });
});

router.delete("/:id", (req, res) => {
  res.json({ message: "delete a post" });
});

router.patch("/:id", (req, res) => {
  res.json({ message: "update a post" });
});

module.exports = router;
