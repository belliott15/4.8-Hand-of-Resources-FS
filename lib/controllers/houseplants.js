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

;
