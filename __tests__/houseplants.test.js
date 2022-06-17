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
  })


  afterAll(() => {
    pool.end();
  });
});
