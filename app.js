const express = require('express');
const path = require('path');

const cookieParser = require('cookie-parser');
const logger = require('morgan');

const riderRouter = require('./routes/riderRoute');
const learnerRouter = require('./routes/learnerRoute');
const adminRouter = require('./routes/adminRoute');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/riders', riderRouter);
app.use('/learners', learnerRouter);
app.use('/admin', adminRouter);

module.exports = app;
