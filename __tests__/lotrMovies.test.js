const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET /lotrmovie should return a list of LOTR Movies', async () => {
    const res = await request(app).get('/lotrmovie');
    expect(res.status).toEqual(200);
    expect(res.body.length).toEqual(6);
  });


  afterAll(() => {
    pool.end();
  });
});