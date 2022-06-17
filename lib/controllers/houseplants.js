const { Router } = require('express');
const Houseplant = require('../models/Houseplant');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const data = await Houseplant.getById(req.params.id);
    res.json(data);
  })
  .get('/', async (req, res) => {
    const allHouseplants = await Houseplant.getAll();
    res.json(allHouseplants);
  })
  .post('/', async (req, res, next) => {
    try{
      const newHouseplant = await Houseplant.insert(req.body);
      res.json(newHouseplant); 
    }catch(e){
      next(e);
    }
  }) 
  .put('/:id', async (req, res, next) => {
    try{
      const updatedHouseplant = await Houseplant.update(req.params.id, req.body);
      res.json(updatedHouseplant);
    }catch(e){
      next(e);
    }
  })
;
