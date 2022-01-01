/* eslint-disable node/no-unsupported-features/es-syntax */
// const mongoose = require('mongoose');
// const multer = require('multer');
const multer = require('multer');
const AppError = require('../utils/appError');

const Rider = require('../model/riderModel');
const catchAsync = require('../utils/catchAsync');

const storage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
};

const upload = multer({ storage: storage, fileFilter: multerFilter });

exports.uploadRiderImages = upload.fields([
  { name: 'licenceImg', maxCount: 1 },
  { name: 'nidImg', maxCount: 1 },
  { name: 'profileImg', maxCount: 1 }
]);

exports.createRider = catchAsync(async (req, res, next) => {
  const newRider = await Rider.create({
    ...req.body,
    licenceImg: req.files.licenceImg[0].buffer,
    nidImg: req.files.nidImg[0].buffer,
    profileImg: req.files.profileImg[0].buffer
  });

  return res.status(201).json({
    status: 'success',
    data: newRider
  });
});

exports.getAllRider = catchAsync(async (req, res, next) => {
  const riders = await Rider.find();
  return res.status(200).json({
    status: 'success',
    data: riders
  });
});
