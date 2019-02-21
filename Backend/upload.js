const IncomingForm = require('formidable').IncomingForm;

module.exports = function upload(req, res) {
  const form = new IncomingForm();

  form.on('file', (field, file) => {
    // Do something with the file
    // e.g. save it to the database
    // you can access it using file.path
    console.log(file.path, 'File Upload');
  });

  form.on('end', () => {
    res.json();
  });

  form.parse(req);
};
