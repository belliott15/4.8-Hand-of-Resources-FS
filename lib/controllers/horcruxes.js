const { Router } = require('express');
const Horcrux = require('../models/Horcrux');

module.exports = Router()
  .get('/', async (req, res) => {
    const allHorcruxes = await Horcrux.getAll();
    res.json(allHorcruxes);
  })
  .post('/', async (req, res, next) => {
    try{
      const newHorcrux = await Horcrux.insert(req.body);
      res.json(newHorcrux);
    } catch(e){
      next(e);
    }
     
  })
  
;
