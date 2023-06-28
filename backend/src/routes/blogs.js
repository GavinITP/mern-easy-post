const express = require("express");
const {
  getAllBlogs,
  getOneBlog,
  insertBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogs");

const router = express.Router();

router.get("/", getAllBlogs);

router.get("/:id", getOneBlog);

router.post("/", insertBlog);

router.delete("/:id", deleteBlog);

router.patch("/:id", updateBlog);

module.exports = router;
