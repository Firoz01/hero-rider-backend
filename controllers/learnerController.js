const multer = require('multer');
const AppError = require('../utils/appError');
const Learner = require('../model/learnerModel');
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

exports.uploadLearnerImages = upload.fields([
  { name: 'nidImg', maxCount: 1 },
  { name: 'profileImg', maxCount: 1 }
]);

exports.createLearner = catchAsync(async (req, res, next) => {
  console.log(req.files);
  const newLearner = await Learner.create({
    // eslint-disable-next-line node/no-unsupported-features/es-syntax
    ...req.body,
    nidImg: req.files.nidImg[0].buffer,
    profileImg: req.files.profileImg[0].buffer
  });
  return res.status(201).json({
    status: 'success',
    data: newLearner
  });
});

exports.getAllLearner = catchAsync(async (req, res, next) => {
  const riders = await Learner.find();
  return res.status(200).json({
    status: 'success',
    data: riders
  });
});
