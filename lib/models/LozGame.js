const pool = require('../utils/pool');

module.exports = class LozGames{
  id;
  name;
  released; 
  system;
  zeldaPresent;
  constructor(row){
    this.id = row.id;
    this.name = row.name;
    this.released = row.released;
    this.system = row.system;
    this.zeldaPresent = row.zeldaPresent;
  }

  static async getAll(){
    const { rows } = await pool.query('SELECT * FROM lozgames');
    return rows.map(row => new LozGames(row));
  }
};
