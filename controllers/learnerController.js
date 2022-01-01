const Learner = require('../model/learnerModel');

exports.createLearner = async (req, res, next) => {
  const newRider = await Learner.create(req.body);
  return res.status(201).json({
    status: 'success',
    data: newRider
  });
};

exports.getAllLearner = async (req, res, next) => {
  const riders = await Learner.find();
  return res.status(200).json({
    status: 'success',
    data: riders
  });
};
