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

  it('GET /lotrmovie should reutrn a single movie', async () => {
    const res = await request(app).get('/lotrmovie/2');
    expect(res.status).toEqual(200);
    expect(res.body.name).toEqual('The Lord of the Rings: The Two Towers');
  });

  it('POST /lotrmovie shoul add a new movie to the data set', async () => {
    const res = await request(app)
      .post('/lotrmovie')
      .send({
        name: 'Subltle racism in middle earth',
        released: 2022,
        extended_edition: false
      });
    expect(res.status).toEqual(200);
    expect(res.body.name).toEqual('Subltle racism in middle earth');
    expect(res.body.released).toEqual(2022);
  });

  afterAll(() => {
    pool.end();
  });
});
