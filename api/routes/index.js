const Router = require('express').Router();

Router.use('/', require("./root"))
Router.use('/food', require("./food"))

module.exports = Router;
