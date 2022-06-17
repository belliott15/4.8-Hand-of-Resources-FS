const { Router } = require('express');
const LotrMovie = require('../models/LotrMovie');

module.exports = Router()
  .get('/', async (req, res) => {
    const allMovies = await LotrMovie.getAll();
    res.json(allMovies);
  })
;
