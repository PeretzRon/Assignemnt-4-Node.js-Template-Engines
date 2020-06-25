const express = require('express');
const router = express.Router();

const userData = require('./users')

/* GET home page. */
router.get('/', function (req, res, next) {
  const users = userData.users;
  res.render('index', {title: 'Assignment 4 - homepage', users: users});
});

module.exports = router;
