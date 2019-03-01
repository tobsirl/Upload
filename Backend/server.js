const express = require('express');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const cors = require('cors');
const Grid = require('gridfs-stream');
const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');

require('dotenv').config();

const uploads = require('./upload');

const server = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

server.use(cors(corsOptions));

const { PORT, MONGO_URI, DATABASE } = process.env;

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


server.post('/upload', uploads);

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
