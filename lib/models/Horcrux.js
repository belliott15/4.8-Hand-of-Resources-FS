const pool = require('../utils/pool');

module.exports = class Horcrux {
  id;
  name;
  original_owner;
  house_artifact;
  sacrifice;
  constructor(row){
    this.id = row.id;
    this.name = row.name;
    this.original_owner = row.original_owner;
    this.house_artifact = row.house_artifact;
    this.sacrifice = row.sacrifice;
  }

  static async getById(id){
    const { rows } = await pool.query('SELECT * FROM horcruxes WHERE id=$1', [id]);
    if (!rows[0])return null;

    return new Horcrux(rows[0]);
  }

  static async getAll(){
    const { rows } = await pool.query('SELECT * FROM horcruxes');
    return rows.map((row) => new Horcrux(row));
  }

  static async insert({ name, original_owner, house_artifact, sacrifice }){
    const { rows } = await pool.query('INSERT INTO horcruxes (name, original_owner, house_artifact, sacrifice) VALUES ($1, $2, $3, $4) RETURNING *', 
      [name, original_owner, house_artifact, sacrifice]);
    return new Horcrux(rows[0]);
  }

  static async updateById(id, attrs){
    const horcrux = await Horcrux.getById(id);
    if(!horcrux) return null;
    const { name, original_owner, house_artifact, sacrifice } = { ...horcrux, ...attrs };
    const { rows } = await pool.query('UPDATE horcruxes SET name=$2, original_owner=$3, house_artifact=$4, sacrifice=$5 WHERE id=$1 RETURNING *', 
      [id, name, original_owner, house_artifact, sacrifice]);
    return new Horcrux(rows[0]);
  }
};
