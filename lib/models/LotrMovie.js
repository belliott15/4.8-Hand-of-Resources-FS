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

  static async getById(id){
    const { rows } = await pool.query('SELECT * FROM lotrmovies WHERE id=$1', 
      [id]);
    if(!rows.length) return null;
    return new LotrMovie(rows[0]);
  }

  static async insert({ name, released, extended_edition }){
    const { rows } = await pool.query('INSERT INTO lotrmovies (name, released, extended_edition) VALUES ($1, $2, $3) RETURNING *', 
      [name, released, extended_edition]);
    return new LotrMovie(rows[0]);
  }

  static async update(id, attrs){
    const updatedMovie = await LotrMovie.getById(id);
    if(!updatedMovie) return null;
    const { name, released, extended_edition } = { ...updatedMovie, ...attrs };
    const { rows } = await pool.query('UPDATE lotrmovies SET name=$2, released=$3, extended_edition=$4 WHERE id=$1 RETURNING *', 
      [id, name, released, extended_edition]);
    return new LotrMovie(rows[0]);
  }

  static async delete(id){
    const { rows } = await pool.query('DELETE FROM lotrmovies WHERE id=$1 RETURNING *', 
      [id]);
    return new LotrMovie(rows[0]);
  }
};

