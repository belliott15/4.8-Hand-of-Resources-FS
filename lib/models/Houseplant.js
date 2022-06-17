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

  static async getById(id){
    const { rows } = await pool.query('SELECT * FROM houseplants WHERE id=$1', 
      [id]);
    if(!rows.length) return null;
    return new Houseplant(rows[0]);
  }

  static async insert({ name, age, species, alive }){
    const{ rows } = await pool.query('INSERT INTO houseplants (name, age, species, alive) VALUES ($1, $2, $3, $4) RETURNING *', 
      [name, age, species, alive]);
    return new Houseplant(rows[0]);
  }
};
