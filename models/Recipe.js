const mongoose = require('mongoose');
const ingredientSchema = require('./Ingredient.js');

const recipeSchema = new mongoose.Schema({
    name:String ,
    description: String,
    imagePath: String,
    ingredients : [ingredientSchema.schema]
});