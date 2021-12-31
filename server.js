const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! Shutting Down...');
  console.log(err.name, err.message);

  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

// const DB = process.env.DB_LOCAL;
const DB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.c8xjr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

console.log(DB);

mongoose.connect(DB).then(() => {
  console.log('Database connection successful!');
});

const port = process.env.PORT || 4200;

const server = app.listen(port, () => {
  console.log(`The server is running at port: ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNCAUGHT EXCEPTION! Shutting Down...');
  console.log(err.name, err.message);

  server.close(() => {
    process.exit(1);
  });
});
