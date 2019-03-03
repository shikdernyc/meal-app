const Router = require('express').Router();

Router.use('/auth', require('./auth'));

module.exports = Router;
