const pool = require('../utils/pool');

module.exports = class LotrMovie{
  id; 
  name;
  released;
  extended_edition;
  constructor(row){
    this.id = row.id;
    this.name = row.name;
    this.released = row.released;
    this.extended_edition = row.extended_edition;
  }

  static async getAll(){
    const { rows } = await pool.query('SELECT * FROM lotrmovies');
    return rows.map(row => new LotrMovie(row));
  }
};
