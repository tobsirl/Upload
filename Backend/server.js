const express = require('express');
const cors = require('cors');

const upload = require('./upload');

const server = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

server.use(cors(corsOptions));

server.post('/upload', upload);

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
