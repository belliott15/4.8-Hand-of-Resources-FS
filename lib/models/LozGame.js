const pool = require('../utils/pool');

module.exports = class LozGame{
  id;
  name;
  released; 
  system;
  zelda_present;
  constructor(row){
    this.id = row.id;
    this.name = row.name;
    this.released = row.released;
    this.system = row.system;
    this.zelda_present = row.zelda_present;
  }

  static async getAll(){
    const { rows } = await pool.query('SELECT * FROM lozgames');
    return rows.map(row => new LozGame(row));
  }

  static async getById(id){
    const { rows } = await pool.query('SELECT * FROM lozgames WHERE id=$1', 
      [id]);
    return new LozGame(rows[0]);
  }

  static async insert({ name, released, system, zelda_present }){
    const { rows } = await pool.query('INSERT INTO lozgames (name, released, system, zelda_present) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, released, system, zelda_present]);
    return new LozGame(rows[0]);
  }
};
