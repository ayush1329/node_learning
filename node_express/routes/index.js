var express = require('express');
var router = express.Router();
const verify = require('../controllers/verify-token');

/* GET home page. */
router.get('/', verify, function(req, res, next) {
  res.status(200).json({
    'name': 'Ayush',
    'title': 'Software Enginner'
  });
});


module.exports = router;
