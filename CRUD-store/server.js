const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000
const morgan = require('morgan');
const mongoose = require('mongoose');
const inventoryRoutes = require('./routes/inventoryRoutes')

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/inventory', inventoryRoutes)

mongoose.connect('mongodb://localhost/inventory',
  {useMongoClient: true},
  (err) => {
    if(err) throw err;
    console.log('Connected to the database');
  }
);

app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
})
