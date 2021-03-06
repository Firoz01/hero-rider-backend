const express = require('express');
const learnerController = require('../controllers/learnerController');

const router = express.Router();

router.post(
  '/',
  learnerController.uploadLearnerImages,
  learnerController.createLearner
);
router.get('/', learnerController.getAllLearner);

module.exports = router;
