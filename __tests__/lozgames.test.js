const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET /lozgames should return a list of all games', async () => {
    const res = await request(app).get('/lozgames');
    expect(res.body.length).toEqual(18);
  });

  it('GET /lozgames/:id will return a single game', async () => {
    const res = await request(app).get('/lozgames/5');
    const expected = { 
      'id': '5',
      'name': 'The Legend of Zelda: Ocarina of Time', 
      'released': 1998, 
      'system': 'Nintendo 64', 
      'zelda_present': true,
    };
    expect(res.status).toEqual(200);
    expect(res.body).toEqual(expected);
  });

  it('POST /lozgames will add a new game to the data list', async () => {
    const res = await request(app)
      .post('/lozgames')
      .send({
        name: 'Legend of Zelda: Breath of the Wild 2',
        released: 2022, 
        system: 'Nintendo Switch',
        zelda_present: true,
      });
    expect(res.status).toEqual(200);
    expect(res.body.name).toEqual('Legend of Zelda: Breath of the Wild 2');
  });

  it('PUT /lozgames/:id will update a specific game', async () => {
    const res = await request(app)
      .put('/lozgames/7')
      .send({ zelda_present: false });
    expect(res.status).toBe(200);
    expect(res.body.zelda_present).toEqual(false);
    expect(res.body.name).toEqual('The Legend of Zelda : Oracle of Seasons & Oracale of Ages');
  });

  it('DELETE /lozgames/:id will delete a specific game', async () => {
    const res = await request(app)
      .delete('/lozgames/10');
    expect(res.status).toEqual(200);
    console.log('res.body', res.body);
    expect(res.body).toEqual(null);
  });

  afterAll(() => {
    pool.end();
  });
});
