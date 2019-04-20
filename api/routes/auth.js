const Router = require('express').Router();

Router.route('/login').post(function(req, res, next) {
  res.status(200).json({ message: 'Hello, World' });
});

module.exports = Router;
