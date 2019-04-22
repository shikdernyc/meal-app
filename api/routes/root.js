const Router = require("express").Router()

Router.route('/').get(function(req, res, next){
    res.status(200).json({
        message: "Hello, World!"
    })
})

module.exports = Router