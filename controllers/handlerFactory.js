const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAll = catchAsync(async (Model, next, select = null) => {
  let theModel;
  if (select) {
    theModel = Model.find().select(select);
  } else {
    theModel = Model.find();
  }

  const doc = await theModel;
  if (!doc) {
    return next(new AppError('No document found with that ID', 404));
  }
  return doc;
});
