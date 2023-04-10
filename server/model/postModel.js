const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
   
    content: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 300,
    },
    likes: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
