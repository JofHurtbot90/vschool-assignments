const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const morgan = require('morgan');
const mongoose = require('mongoose');
const gameRoute = require('./routes/gameRoute')

app.use(bodyParser.json());
app.use(morgan('dev'));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/game-studios-exclusive-content', {useMongoClient: true}
err =>{
  if(err) throw err;
  console.log('Connected to the database');
  }
);

app.listen(port, ()=>{
  console.log('Server is listening on ${port}');
});
