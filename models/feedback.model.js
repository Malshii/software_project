const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const feedbackSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  firstName: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  lastName: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  review: {
    type: String,
  },
  rating: {
    type: Number,
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  dislikes: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  createdAt: {
    type: Date,    
    default: Date.now
  },
});

const Feedback = mongoose.model("feedback", feedbackSchema);
module.exports = Feedback;
