const mongoose = require('mongoose');
const ingredientSchema = require('./ingredient.model.js');

const recipeSchema = new mongoose.Schema({
    name:String ,
    description: String,
    imagePath: String,
    ingredients : [ingredientSchema.schema]
});

module.exports = mongoose.model('Recipe',recipeSchema);