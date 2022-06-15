const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET /horcrux should return a list of all horcruxs', async () => {
    const res = await request(app).get('/horcrux');
    expect(res.body.length).toEqual(7);
  });
  afterAll(() => {
    pool.end();
  });
});
