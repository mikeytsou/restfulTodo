const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  post: {
    type: String,
    required: true
  },
  createdAt: {type: Date, default: Date.now},
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String
  }
});

module.exports = mongoose.model("Todo", todoSchema);