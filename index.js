const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')

//app.listen(port, () => console.log(`listening on port ${port}!`))


mongoose.connect('mongodb://localhost/tes2t');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


