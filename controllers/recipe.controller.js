const Product = require('../models/recipe.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
exports.test2 = function (req, res) {
    res.send('Greetings from the Test controller!2');
};