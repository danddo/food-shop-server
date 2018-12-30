const port = 8000;
const dbURL = 'mongodb://localhost/food-shop';

const express = require('express');
const mongoose = require('mongoose');
const recipesRoute = require ('./routes/recipes.route')
var cors = require('cors');



const app = express();
const router = express.Router();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

router.get('/', function(req, res) {
    res.send('im the home page!');  
});
app.use('/recipes',recipesRoute);
app.use('/',router);
//app.use(cors());

app.listen(port, () => console.log(`listening on port ${port}!`));


mongoose.connect(dbURL);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected');
});


