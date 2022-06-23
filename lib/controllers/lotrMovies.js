const { Router } = require('express');
const LotrMovie = require('../models/LotrMovie');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const singleMovie = await LotrMovie.getById(req.params.id);
    res.json(singleMovie);
  })
  .get('/', async (req, res) => {
    const allMovies = await LotrMovie.getAll();
    res.json(allMovies);
  })
  .post('/', async (req, res, next) => {
    try{
      const newMovie = await LotrMovie.insert(req.body);
      res.json(newMovie);
    }catch(e){
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try{
      const updatedMovie = await LotrMovie.update(req.params.id, req.body);
      res.json(updatedMovie);
    }catch(e){
      next(e);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try{
      const deletedMovie = await LotrMovie.delete(req.params.id);
      res.json(deletedMovie);
    }catch(e){
      next(e);
    }
    
  })

;
