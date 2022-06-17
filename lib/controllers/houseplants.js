const { Router } = require('express');
const Houseplant = require('../models/Houseplant');

module.exports = Router()
  .get('/', async (req, res) => {
    const allHouseplants = await Houseplant.getAll();
    res.json(allHouseplants);
  })

;
