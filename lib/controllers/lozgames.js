const { Router } = require('express');

module.exports = Router()
  .get('/', async (res, req) => {
    const allGames = await LozGames.getAll();
    res.json(allGames);
  })
  
  
;
