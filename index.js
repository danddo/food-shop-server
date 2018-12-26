const port = 8000;
const dbURL = 'mongodb://localhost/food-shop';

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();
const recipe = require ('./routes/recipe.route')

router.get('/', function(req, res) {
    res.send('im the home page!');  
});

app.use('/recipe',recipe);
app.use('/',router);

app.listen(port, () => console.log(`listening on port ${port}!`));





mongoose.connect(dbURL);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected');
});

