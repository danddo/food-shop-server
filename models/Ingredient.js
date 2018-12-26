const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    name:String ,
    amount: Number,
})

module.exports ={
    schema : ingredientSchema
}