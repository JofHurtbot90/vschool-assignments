const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())

let number = 1

const animals = []

app.get(`/animals`, (req, res) =>{

return res.send(animals);
});

app.post(`/search`, (req, res) =>{
  console.log(req.body)
  animal.push(req.body)
return res.send({message: 'here is your new animal', object: req.body});
});


app.listen(port, () => {
  console.log( `App is listening on port ${port}`);
})
