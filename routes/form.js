var express = require('express');
var router = express.Router();
const form = require('../models/form');

router.route('/').get((req, res, next) => {
  res.render('pages/form');
});

router
  .route('/List')
  .get((req, res, next) => {
    form.find((err, data) => {
      if (err) console.log(err);
      else res.render('pages/List', { data });
    });
  })
  .post(async (req, res) => {
    await form.create(req.body, () => {
      const { error } = form(req.body);
      if (error) {
        res.render('Form', { errors: error.details });
        return;
      }
      res.redirect('/form/List');
    });
  });
router.get('/form', (req, res) => {
  res.render('pages/form');
});
module.exports = router;
