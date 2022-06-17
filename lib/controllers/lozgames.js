const { Router } = require('express');

module.exports = Router()
  .get('/', async (req, res) => {
    const allGames = await LozGames.getAll();
    res.json(allGames);
  })
  
  
;
