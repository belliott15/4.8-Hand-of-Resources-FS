const { Router } = require('express');
const LozGame = require('../models/LozGame');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const singleGame = await LozGame.getById(req.params.id);
    res.json(singleGame);
  })

  .get('/', async (req, res) => {
    const allGames = await LozGame.getAll();
    res.json(allGames);
  })
  
  
;
