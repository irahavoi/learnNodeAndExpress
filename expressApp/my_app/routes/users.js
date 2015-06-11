var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var users = require('../data/users.json');
  console.log(users);
  res.render('users/profile', {title : 'User Profile', users : users});

  //res.send('respond with a resource');
});

module.exports = router;
