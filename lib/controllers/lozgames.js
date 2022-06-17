const { Router } = require('express');
const LozGame = require('../models/LozGame');

module.exports = Router()
  .get('/', async (req, res) => {
    const allGames = await LozGame.getAll();
    res.json(allGames);
  })
  
  
;
