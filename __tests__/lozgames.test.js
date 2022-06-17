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

  

  afterAll(() => {
    pool.end();
  });
});
