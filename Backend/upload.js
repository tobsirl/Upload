const IncomingForm = require('formidable').IncomingForm;

module.exports = function upload(req, res) {
  const form = new IncomingForm();

  form.on('file', (name, file) => {
    // Do something with the file
    // e.g. save it to the database
    // you can access it using file.path
    // Desructing

    file.path = __dirname + '/upload/' + file.name;

    console.log('File Upload', name, file);
  });

  form.on('end', () => {
    res.json();
  });

  form.parse(req);
};
