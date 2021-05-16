const Post = require("../models/posts");

const addPost = async (req, res) => {
  const post = req.body;

  try {
    const doc = await Post.create(post);
    if (doc) {
      res.status(200).send("Success!");
    }
  } catch (e) {
    res.status(400).send("Something is wrong with your request");
  }
};

const deletePost = async (req, res) => {
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
};

const updatePost = async (req, res) => {
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
};

const getPosts = async (req, res) => {
  try {
    let posts;
    if (req.params.id) {
      posts = await Post.find({ _id: req.params.id });
    } else {
      posts = await Post.find();
    }

    res.status(200).send(posts);
  } catch (e) {
    console.log("ERROR: ", e);
    res.status(400).send("Something went wrong");
  }
};

module.exports = {
  addPost,
  deletePost,
  updatePost,
  getPosts,
};
