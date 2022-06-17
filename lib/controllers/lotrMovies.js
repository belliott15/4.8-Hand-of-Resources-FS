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
  
;
