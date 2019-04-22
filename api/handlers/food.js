const {Food} = require("../models")

async function getFoodById(foodID){
    try{
        let foodItem = await Food.findOne({foodID}, '-_id')
        return foodItem
    }catch(error){
        throw new Error(`Unable to find food with foodID ${foodID}`)
    }
}

async function getFoodByName(foodName){
    try{
        let foodItem = await Food.findOne({foodName}, '-_id');
        return foodItem
    }catch(error){
        throw new Error(`Unable to find ${foodName}`)
    }
}

async function getFoodList(){
    try{
        let foodCollection = await Food.find({})
        let foodList = foodCollection.map(({foodID, foodName})=>({foodID, foodName}))
        return foodList
    }catch(error){
        throw new Error("Unable to retrieve food list")
    }
}

module.exports = {
    getFoodById,
    getFoodByName,
    getFoodList
}