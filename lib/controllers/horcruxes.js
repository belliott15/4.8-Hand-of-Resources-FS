const { Router } = require('express');
const Horcrux = require('../models/Horcrux');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const singleHorcrux = await Horcrux.getById(id);
    res.json(singleHorcrux);
  })
  .get('/', async (req, res) => {
    const allHorcruxes = await Horcrux.getAll();
    res.json(allHorcruxes);
  })
  .put('/:id', async (req, res, next) => {
    try{
      const updateHorcrux = await Horcrux.updateById(req.params.id, req.body);
      res.json(updateHorcrux);
    }catch(e){
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try{
      const newHorcrux = await Horcrux.insert(req.body);
      res.json(newHorcrux);
    } catch(e){
      next(e);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try{
      const deletedHorcrux = await Horcrux.delete(req.params.id);
      res.json(deletedHorcrux);
    }catch(e){
      next(e);
    }
  })
;
