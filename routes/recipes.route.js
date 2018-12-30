const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipes.controller');


router.get('/seed', recipesController.seedRecipes);
router.get('/', recipesController.getRecipes);
router.get('/:id', recipesController.getRecipe);
router.put('/:id', recipesController.updateRecipe);
router.delete('/:id', recipesController.deleteRecipe);
//router.post('/', recipe_controller.saveRecipes);

module.exports = router;