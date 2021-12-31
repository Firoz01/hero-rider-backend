const Rider = require('../model/riderModel');

exports.createRider = async (req, res, next) => {
  const newRider = await Rider.create(req.body);
  return res.status(201).json({
    status: 'success',
    data: newRider
  });
};

exports.getAllRider = async (req, res, next) => {
  const riders = await Rider.find();
  return res.status(200).json({
    status: 'success',
    data: riders
  });
};
