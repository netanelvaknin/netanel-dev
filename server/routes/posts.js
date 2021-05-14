const router = require("express").Router();
const Post = require("../models/posts");
const authenticateToken = require("../middlewares/authentication");

router.post("/posts/insert", authenticateToken, async (req, res) => {
  const post = req.body;

  try {
    const doc = await Post.create(post);
    if (doc) {
      res.status(200).send("Success!");
    }
  } catch (e) {
    res.status(400).send("Something is wrong with your request");
  }
});

router.post("/posts/delete", authenticateToken, async (req, res) => {
  try {
    const doc = await Post.findOneAndDelete({ _id: req.body._id });
    if (doc) {
      res.status(200).send("Success!");
    } else {
      res.status(404).send(`Cant find user with id: ${req.body._id}`);
    }
  } catch {
    res.status(400).send("Please provide _id");
  }
});

router.post("/posts/update", authenticateToken, async (req, res) => {
  try {
    const doc = await Post.findOneAndUpdate(
      { _id: req.body._id },
      { ...req.body }
    );

    if (doc) {
      res.status(200).send("Success!");
    } else {
      res.status(404).send(`Cant find user with id : ${req.body._id}`);
    }
  } catch {
    res.status(400).send("Please provide _id");
  }
});

router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).send(posts);
  } catch {
    res.status(400).send("Something went wrong");
  }
});

module.exports = router;
