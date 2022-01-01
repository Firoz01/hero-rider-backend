const Learner = require('../model/learnerModel');
const Rider = require('../model/riderModel');
const AppError = require('../utils/appError');
const { getAll } = require('./handlerFactory');

exports.getUsers = async (req, res, next) => {
  if (
    req.body.email === 'admin@admin.com' &&
    req.body.password === 'abcd1234'
  ) {
    const learners = await getAll(Learner, next, 'fullName email');
    const riders = getAll(Rider);
    console.log(learners);
    res.status(200).json('success');
  } else {
    res.status(404).json('invalide email or password');
    return next(new AppError('Invalide Email Password', 404));
  }
};
