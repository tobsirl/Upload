const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const upload = require('./upload');

const server = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

server.use(cors(corsOptions));

server.post('/upload', upload);

const { PORT, MONGO_URI } = process.env;

mongoose.connect(MONGO_URI, { useNewUrlParser: true }).then(
  () => {
    console.log(`Connected to database`);
  },
  err => {
    console.log(err);
  }
);

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
