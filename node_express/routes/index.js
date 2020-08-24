var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.ontroller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    'name': 'Ayush',
    'title': 'Software Enginner'
  });
});

router.route('/detail').get(userController.userDetail)

module.exports = router;
