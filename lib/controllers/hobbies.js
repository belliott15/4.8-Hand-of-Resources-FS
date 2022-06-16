const { Router } = require('express');
const Hobby = require('../models/Hobby');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try{
      const singleHobby = await Hobby.getById(req.params.id);
      res.json(singleHobby);  
    }catch(e){
      next(e);
    }
  })
  .get('/', async (req, res) => {
    const allHobbies = await Hobby.getAll();
    res.json(allHobbies);
  })
  .post('/', async (req, res, next) => {
    try{
      const newHobby = await Hobby.insert(req.body);
      res.json(newHobby);   
    }catch(e){
      next(e);
    }
    
  })
;
