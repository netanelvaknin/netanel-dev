const router = require("express").Router();
const authenticateToken = require("../middlewares/authentication");
const {
  addPost,
  deletePost,
  updatePost,
  getPosts,
} = require("../controllers/posts");

router.post("/posts/insert", authenticateToken, addPost);
router.post("/posts/delete", authenticateToken, deletePost);
router.post("/posts/update", authenticateToken, updatePost);
router.get("/posts/:id?", getPosts);

module.exports = router;
