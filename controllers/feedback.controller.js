const Feedback = require("../models/feedback.model");
const User = require("../models/user.model");
const mongoose = require("mongoose");
const Joi = require("joi");

//postReview
exports.postReview = (req, res) => {
  const schema = Joi.object({
    userId: Joi.string().required(),
    firstName: Joi.string().min(5).max(50).required(),
    lastName: Joi.string().min(5).max(50).required(),
    review: Joi.string().required(),
    rating: Joi.number().required(),
    createdAt: Joi.date().required(),
  });
  const validation = schema.validate(req.body);
  if (validation.error) {
    res.status(400).send({ message: validation.error.message });
    return;
  }
  const body = validation.value;
  const { userId,firstName,lastName, review, rating, createdAt } = body;
  const newFeedback = new Feedback({
    userId,
    firstName,
    lastName,
    review,
    rating,
    createdAt
  });
  newFeedback.save((err, feedback) => {
    if (err) {
      res.status(400).send({ message: err });
      return;
    }
    res.status(200).send({
      message: "Feedback posted successfully",
      feedback: feedback,
    });
  });
};

//getReview
exports.getReview = (req, res) => {
  Feedback.find({}, (err, feedback) => {
    if (err) {
      res.status(400).send({ message: err });
      return;
    }
    res
      .status(200)
      .send({ message: "Feedback fetched successfully", feedback });
  });
};

//getReviewByUserId
exports.getReviewByUserId = (req, res) => {
  Feedback.find({ userId: req.params.userId }, (err, feedback) => {
    if (err) {
      res.status(400).send({ message: err });
      return;
    }
    res
      .status(200)
      .send({ message: "Feedback fetched successfully", feedback });
  });
};

//getReviewByRating
exports.getReviewByRating = (req, res) => {
  const { rating } = req.params;
  Feedback.find({ rating }, (err, feedback) => {
    if (err) {
      res.status(400).send({ message: err });
      return;
    }
    res
      .status(200)
      .send({ message: "Feedback fetched successfully", feedback });
  });
};

//deleteReview
exports.deleteReview = (req, res) => {
  const { id } = req.params;
  Feedback.findByIdAndDelete(id, (err, feedback) => {
    if (err) {
      res.status(400).send({ message: err });
      return;
    }
    res
      .status(200)
      .send({ message: "Feedback deleted successfully", feedback });
  });
};

//add like to feedback
exports.addLike = async function (req, res) {
  try {
    const id = req.params.id;
    const userId = req.body.userId;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(200).send(`No feedback with id: ${id}`);
    const feedback = await Feedback.findById(id);
    
    if (!feedback) {
      return res.status(200).json(`No feedback with id: ${id}`);
    }
    const index = feedback.likes.findIndex((id) => String(id) === String(userId));
    if (index === -1) {
      feedback.likes.push(userId);
    } else {
      feedback.likes = feedback.likes.filter((id) => String(id) !== String(userId));
    }
    const updatedFeedback = await Feedback.findByIdAndUpdate(id, feedback, {
      new: true,
    });
    res.status(200).json({ code: 200, success: true, data: updatedFeedback });
  } catch (err) {
    res
      .status(500)
      .json({ code: 500, success: false, message: "Internal Server Error" });
  }
};

//add dislike to feedback
exports.addDislike = async function (req, res) {
  try {
    const id = req.params.id;
    const userId = req.body.userId;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(200).send(`No video with id: ${id}`);
    const feedback = await Feedback.findById(id);
  
    if (!feedback) {
      return res.status(200).json(`No feedback with id: ${id}`);
    }

    const usersWhoLiked = feedback.likes.map((id) => String(id));

    if (usersWhoLiked.includes(userId)) {
      return res.status(200).json({ code: 200, success: false, message: "You already liked this feedback" });
    }

    const index = feedback.dislikes.findIndex((id) => String(id) === String(userId));
    if (index === -1) {
      feedback.dislikes.push(userId);
    } else {
      feedback.dislikes = feedback.dislikes.filter((id) => String(id) !== String(userId));
    }
    const updatedFeedback = await Feedback.findByIdAndUpdate(id, feedback, {
      new: true,
    });
    res.status(200).json({ code: 200, success: true, data: updatedFeedback });
  } catch (err) {
    res
      .status(500)
      .json({ code: 500, success: false, message: "Internal Server Error" });
  }
};

//likeCount
exports.likeCount = async function (req, res) {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(200).send(`No feedback with id: ${id}`);
    const feedback = await Feedback.findById(id);
    if (!feedback) {
      return res.status(200).json(`No feedback with id: ${id}`);
    }
    const likeCount = feedback.likes.length;
    res.status(200).json({ code: 200, success: true, data: likeCount });
  } catch (err) {
    res
      .status(500)
      .json({ code: 500, success: false, message: "Internal Server Error" });
  }
}

//disLikeCount
exports.disLikeCount = async function (req, res) {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(200).send(`No feedback with id: ${id}`);
    const feedback = await Feedback.findById(id);
    if (!feedback) {
      return res.status(200).json(`No feedback with id: ${id}`);
    }
    const disLikeCount = feedback.dislikes.length;
    res.status(200).json({ code: 200, success: true, data: disLikeCount });
  } catch (err) {
    res
      .status(500)
      .json({ code: 500, success: false, message: "Internal Server Error" });
  }
}