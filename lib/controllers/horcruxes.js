const { Router } = require('express');
const Horcrux = require('../models/Horcrux');

module.exports = Router()
  .get('/', async (req, res) => {
    const allHorcruxes = await Horcrux.getAll();
    res.json(allHorcruxes);
  });
