const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');



// Create storage engine
const storage = new GridFsStorage({
  url: MONGO_URI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });

module.exports = function uploads(upload.single('file'), (req, res) =>) {
  // const form = new IncomingForm();

  // form.on('file', (name, file) => {
  //   // Do something with the file
  //   // e.g. save it to the database
  //   // you can access it using file.path
  //   // Desructing

  //   file.path = __dirname + '/upload/' + file.name;

  //   console.log('File Upload', name, file);
  // });

  // form.on('end', () => {
  //   res.json();
  // });

  // form.parse(req);


};
