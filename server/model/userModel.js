const mongoose = require("mongoose");

//User Schema

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Pleased enter your name"],
  },
  email: {
    type: String,
    require: [true, "Pleased enter your email"],
  },
  bio: {
    type: String,
    require: [true, "Pleased enter your bio"],
  },
  created_at: {
    type: String,
    require: true,
  },
  updated_at: {
    type: String,
    require: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;