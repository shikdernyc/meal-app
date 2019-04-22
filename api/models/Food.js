const mongoose = require("mongoose")
const Schema = mongoose.Schema

const foodSchema = new Schema({
    foodID: Number,
    foodName: {
        type: String,
        trim: true
    }
})

const Food = mongoose.model("Food", foodSchema)

module.exports = Food