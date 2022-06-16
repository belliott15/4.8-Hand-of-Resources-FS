const { Router } = require('express');
const Hobby = require('../models/Hobby');

module.exports = Router()
  .get('/', async (req, res) => {
    const allHobbies = await Hobby.getAll();
    res.json(allHobbies);
  })
;
