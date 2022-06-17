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
  
  .post('/', async (req, res, next) => {
    try{
      const newGame = await LozGame.insert(req.body);
      res.json(newGame);
    }catch(e){
      next(e);
    }
  })

  .put('/:id', async (req, res, next) => {
    try{
      const updatedGame = await LozGame.update(req.params.id, res.body);
      res.json(updatedGame);
    }catch(e){
      next(e);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try{
      const deletedGame = await LozGame.delete(req.params.id);
      res.json(deletedGame);
    }catch(e){
      next(e);
    }
  })
;
