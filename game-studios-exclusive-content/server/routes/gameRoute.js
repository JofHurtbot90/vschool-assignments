const express = require('express');
const gameRoute = express.Router();
const Game = require('../models/games');

gameRoute.route('/')
  .get((req, res)=>{
    Game.find((err, games)=>{
    if (err) return res.status(500).send(err);
    return res.send(games);
  });
})

  .post((req,res)=>{
    const newGame = Game(req.body);
    newGame.save((err, game)=>{
    res.send(game);
  });
})

gameRoute.route('/:id')
  .get((req, res)=>{
    Game.findById({_id: req.params.id}, (err, inventory)=>{
      if(err) return res.status(500).send(err);
      res.send(game);
    });
  })

  .put((req, res)=>{
    Game.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, game)=>{
      if(err) res.status(500).send(err);
      res.send(game)
    })
  })

  .delete((req, res)=>{
    Game.findByIdAndRemove(req.params.id, (err, game)=>{
      if(err) return res.status(500).send(err);
      res.send({message: 'Successfully removed game', game});
    })
  })

  module.exports = gameRoute;
