const { Router } = require('../utils/pool');
const Houseplant = require('../models/Houseplant');

module.exports = Router()
  .get('/', async (req, res, next) => {
    const allHouseplants = await Houseplant.getAll();
    res.json(allHouseplants);
  })

;
