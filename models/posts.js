const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: String, required: true },
    description: { type: String, required: true },
  },
  { collection: "my-posts" }
);

const model = mongoose.model("PostSchema", PostSchema);

module.exports = model;
