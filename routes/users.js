const express = require('express');
const router = express.Router();

const userData = require('./index')

router.get('/users', function (req, res, next) {
  const users = userData.users;
  res.render('users', {title: 'Assignment 4 - users', users: users, path: '/users'});
});

module.exports = router;
