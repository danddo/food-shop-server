const express = require('express');
const router = express.Router();
const recipe_controller = require('../controllers/recipe.controller');


router.get('/test', recipe_controller.test);
router.get('/test2', recipe_controller.test2);

module.exports = router;