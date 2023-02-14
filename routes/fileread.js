var express = require('express');
var router = express.Router();
const fs = require('fs');

const getFileContent = (file) => {
  return fs.readFileSync(file, { encoding: 'utf8' });
};

router
  .route('/')
  .get((req, res, next) => {
    res.render('pages/fileread', { filecontent: getFileContent('file.txt') });
  })
  .post((req, res, next) => {
    console.log('nhgujhik');
    let filecontent = getFileContent('file.txt').slice(req.body.Start);
    res.render('pages/fileread', { filecontent });
  });

module.exports = router;
