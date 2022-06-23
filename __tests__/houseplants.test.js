const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET /houseplant should return a list of all houseplants', async () => {
    const res = await request(app).get('/houseplant');
    const expected = {
      id: '1',
      name: 'ZZ Plant',
      age: 5,
      species: 'Zamioculcas zamiifolia',
      alive: true
    };
    expect(res.status).toEqual(200);
    expect(res.body[0]).toEqual(expected);
  });

  it('GET /:id should return a specific houseplant', async () => {
    const res = await request(app).get('/houseplant/3');
    expect(res.status).toBe(200);
    expect(res.body.name).toEqual('Bird of Paradise');
    expect(res.body.species).toEqual('Strelitzia reginae');
  });

  it('POST /houseplant should add a new houseplant', async () => {
    const res = await request(app)
      .post('/houseplant')
      .send({
        name: 'Snake Plant', 
        age: 3, 
        species: 'Dracaena trifasciata',
        alive: true
      });
    expect(res.status).toEqual(200);
    expect(res.body.name).toEqual('Snake Plant');
    expect(res.body.age).toEqual(3);
  });

  it('PUT /houseplant/:id should update a houseplant', async () => {
    const res = await request(app)
      .put('/houseplant/1')
      .send({ alive: false });
    expect(res.status).toEqual(200);
    expect(res.body.alive).toEqual(false);
  });

  it('DELETE /houseplant/:id should delete a houseplant from the table', async () => {
    const res = await request(app)
      .delete('/houseplant/3');
    expect(res.status).toEqual(200);
    
    const resp = await request(app).get('/houseplant/3');
    expect(resp.body).toEqual(null);
  });

  afterAll(() => {
    pool.end();
  });
});
