const Recipe = require('../models/recipe.model')

//Simple version, without validation or sanitation
exports.seedRecipes = function (req, res) {
    let pizzaRecipe  = new Recipe({    
        name: 'Pizza' ,
        description: 'Very tasty pizza',
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg',
        ingredients :[{name:'Cheese',amount:'3'},{name:'Tomato',amount:'5'}]
    });

    let scrambledEggRecipe  = new Recipe({    
        name: 'Scrambled Egg' ,
        description: 'Very Scrambled Egg',
        imagePath: 'https://www.incredibleegg.org/wp-content/uploads/Scrambled-with-Milk-930x620.jpg',
        ingredients :[{name:'Egg',amount:'2'}]
    });
    pizzaRecipe.save(function (err, data) {
        if (err) return console.error(err);
        
    });
    scrambledEggRecipe.save(function (err, data) {
        if (err) return console.error(err);
    });

    res.send(`${pizzaRecipe.name} ${scrambledEggRecipe.name} Created successfully`);
};

exports.getRecipes = function (req, res) {
    Recipe.find(function (err,data){
        if (err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    })
}

exports.getRecipe = function (req, res) {
    Recipe.findById(req.params.id, (err,recipe)=>{
        res.send(recipe);
    });
}


exports.saveRecipe = function (req, res) {

}
   
exports.updateRecipe = function (req, res) {

}

exports.deleteRecipe = function (req, res) {
    console.log('asd');
    Recipe.findByIdAndRemove(req.params.id, (err,doc)=>{
        if (err){
            console.log('err deleteRecipe')
        } 
        if (doc){
            res.sendStatus(204);
        }      
    });
}