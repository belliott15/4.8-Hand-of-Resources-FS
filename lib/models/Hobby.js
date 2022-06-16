const pool = require('../utils/pool');

module.exports = class Hobby {
  id;
  name;
  started;
  active;
  constructor(row){
    this.id = row.id;
    this.name = row.name;
    this.started = row.started;
    this.active = row.active;
  }

  static async getAll(){
    const { rows } = await pool.query('SELECT * FROM hobbies');
    return rows.map((row) => new Hobby(row));
  }
  
};
