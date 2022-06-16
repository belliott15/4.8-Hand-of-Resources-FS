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

  static async getById(id){
    const { rows } = await pool.query('SELECT * FROM hobbies WHERE id=$1', 
      [id]
    );
    return new Hobby(rows[0]);
  }

  static async insert({ name, started, active }){
    const { rows } = await pool.query('INSERT INTO hobbies (name, started, active) VALUES ($1, $2, $3) RETURNING *', 
      [name, started, active]);
    return new Hobby(rows[0]);
  }
};
