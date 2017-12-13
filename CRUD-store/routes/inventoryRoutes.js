const express = require('express');
const inventoryRoutes = express.Router();
const Inventory = require('../models/inventory');

inventoryRoutes.route('/')
  .get((req, res)=>{
    Inventory.find((err, inventories)=>{
      if (err) return res.status(500).send(err);
      res.send(inventories);
    });
  })

  .post((req,res)=>{
    const newInventory = new Inventory(req.body);
    newInventory.save((err, inventory)=>{
      res.send(inventory);
    })
  })

  inventoryRoutes.route('/:id')
    .get((req, res)=>{
      Inventory.findById({_id: req.params.id},(err, inventory)=>{
        if (err) return res.status(500).send(err);
        res.send(inventory);
      });
    })

    .put((req, res)=>{
      Inventory.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, inventory)=>{
        if (err) res.status(500).send(err);
        res.send(inventory);
      })
    })

    .delete((req, res)=>{
      Inventory.findByIdAndRemove(req.params.id, (err, inventory)=>{
        if(err) return res.status(500).send(err);
        res.send({message: 'Successfully removed inventory', inventory});
      })
    })

module.exports = inventoryRoutes;
