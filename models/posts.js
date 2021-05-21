const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: String, required: true },
    description: { type: String },
    postNumber: { type: Number }
  },
  { collection: "my-posts" }
);

const model = mongoose.model("PostSchema", PostSchema);

module.exports = model;
