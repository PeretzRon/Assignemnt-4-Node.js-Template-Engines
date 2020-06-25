const express = require('express');
const router = express.Router();


const users= [];

router.get('/', function (req, res, next) {
  res.render('index', {title: 'Assignment 4 - homepage', path: '/'});
});

router.post('/add-user', function (req, res, next) {
  users.push({user: req.body.user});
  res.redirect('/users')
});

exports.router = router;
exports.users = users;


