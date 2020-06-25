var express = require('express');
var router = express.Router();

const users= [];

/* GET users listing. */
router.get('/add-user', function (req, res, next) {
  res.render('add-user', {title: 'Assignment 4 - Add user'});
});

router.post('/add-user', function (req, res, next) {
  users.push({user: req.body.user});
  res.redirect('/')
});

exports.router = router;
exports.users = users;
