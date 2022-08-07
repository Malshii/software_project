const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedback.controller');

router.post('/postReview', feedbackController.postReview);
router.get('/getAllReviews', feedbackController.getReview);
router.get('/addLike/:id', feedbackController.addLike);
router.get('/likeCount/:id', feedbackController.likeCount);
router.get('/addDislike/:id', feedbackController.addDislike);
router.get('/disLikeCount/:id', feedbackController.disLikeCount);
router.get('/getReviewByUserId/:userId', feedbackController.getReviewByUserId);
router.get('/getReviewByRating/:rating', feedbackController.getReviewByRating);
router.delete('/deleteReview/:id', feedbackController.deleteReview);

module.exports = router;