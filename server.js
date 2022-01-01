const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const express = require('express');

dotenv.config({ path: './config.env' });
const app = require('./app');

app.use(express.json());
app.use(cors());

// const DB = process.env.DB_LOCAL;
const DB = process.env.DB_ATLAS;

mongoose.connect(DB).then(() => {
  console.log('Database connection successful!');
});

const port = process.env.PORT || 4200;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
