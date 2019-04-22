let Router = require("express").Router()
let {
    getFoodList,
    getFoodById,
    getFoodByName
} = require("../handlers/food")

Router.route('/').get(async function (req, res, next) {
    try {
        let foodList = await getFoodList();
        return res.status(200).json(foodList);
    } catch (error) {
        next(error)
    }
})

Router.route('/id/:foodID').get(async function (req, res, next) {
    try {
        let {
            foodID
        } = req.params
        let food = await getFoodById(foodID)
        return res.status(200).json(food)
    } catch (error) {
        next(error)
    }
})

Router.route('/name/:foodName').get(async function (req, res, next) {
    try {
        let {
            foodName
        } = req.params
        let food = await getFoodByName(foodName);
        return res.status(200).json(food)
    } catch (error) {
        next(error)
    }
})

module.exports = Router