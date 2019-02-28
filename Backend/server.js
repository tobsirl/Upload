const express = require('express');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const cors = require('cors');
const Grid = require('gridfs-stream');

require('dotenv').config();

const upload = require('./upload');

const server = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

server.use(cors(corsOptions));

server.post('/upload', upload);

const { PORT, MONGO_URI, DATABASE } = process.env;

// const connect = mongoose.createConnection(MONGO_URI);

// connect
//   .connect(MONGO_URI, () => {
//     let gfs = Grid(connect.db, mongoose.mongo);
//     gfs.collection('uploads');
//   })
//   .then(() => {
//     console.log(`Connected to the database and stream setup`);
//   })
//   .catch(err => {
//     console.log(err);
//   });

let db = new mongo.Db(DATABASE, new mongo.Server(MONGO_URI));

mongoose.connect(MONGO_URI, { useNewUrlParser: true }).then(
  () => {
    console.log(`Connected to database`);
    let gfs = Grid(db, mongo);
    gfs.collection('uploads');
  },
  err => {
    console.log(err);
  }
);

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
