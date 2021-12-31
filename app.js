const express = require('express');
const path = require('path');

const cookieParser = require('cookie-parser');
const logger = require('morgan');

//const postRouter = require('./routes/postRoutes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/posts', postRouter);

module.exports = app;
