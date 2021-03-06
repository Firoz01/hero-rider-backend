const Learner = require('../model/learnerModel');
const Rider = require('../model/riderModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const { getAll } = require('./handlerFactory');

exports.getUsers = catchAsync(async (req, res, next) => {
  if (
    req.body.email === 'admin@admin.com' &&
    req.body.password === 'abcd1234'
  ) {
    const learners = await getAll(Learner, next, 'fullName email');
    const riders = await getAll(Rider, next, 'fullName email');
    const userDoc = {
      riders,
      learners
    };
    console.log(userDoc);
    res.status(200).json(userDoc);
  } else {
    res.status(404).json('invalide email or password');
    return next(new AppError('Invalide Email Password', 404));
  }
});
