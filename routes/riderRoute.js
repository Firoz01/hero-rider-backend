const express = require('express');
const riderController = require('../controllers/riderController');

const router = express.Router();

router.post(
  '/',
  riderController.uploadRiderImages,
  riderController.createRider
);
router.get('/', riderController.getAllRider);

module.exports = router;
