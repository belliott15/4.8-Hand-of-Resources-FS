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
  .put('/:id', async (req, res, next) => {
    try{
      const updatedHobby = await Hobby.update(req.params.id, req.body);
      res.json(updatedHobby);
    }catch(e){
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try{
      const newHobby = await Hobby.insert(req.body);
      res.json(newHobby);   
    }catch(e){
      next(e);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try{
      const deletedHobby = await Hobby.delete(req.params.id);
      res.json(deletedHobby);
    }catch(e){
      next(e);
    }
  })
;
