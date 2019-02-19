const express = require('express');

const server = express();

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
