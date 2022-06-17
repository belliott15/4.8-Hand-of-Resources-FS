const pool = require('../utils/pool');

module.exports = class Houseplant{
  id;
  name;
  age;
  species;
  alive;
  constructor(row){
    this.id = row.id;
    this.name = row.name;
    this.age = row.age;
    this.species = row.species;
    this.alive = row.alive;
  }

  static async getAll(){
    const { rows } = await pool.query('SELECT * FROM houseplants');
    return rows.map(row => new Houseplant(row));
  }
};
