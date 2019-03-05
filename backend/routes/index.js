const Router = require('express').Router();

Router.use('/auth', require('./auth'));
Router.use('/classify', require('./classify'));

module.exports = Router;
