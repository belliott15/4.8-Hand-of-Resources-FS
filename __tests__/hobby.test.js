const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET /hobby should return a list of all hobbies', async () => {
    const res = await request(app).get('/hobby');
    expect(res.body.length).toEqual(7);
  });

  it('GET /hobby/id should return a single hobby', async () => {
    const res = await request(app).get('/hobby/1');
    const expected = {
      id: '1',
      name: 'Rock Climbing', 
      started: 2011, 
      active: true, 
    };
    expect(res.status).toBe(200);
    expect(res.body).toEqual(expected);
  });

  it('POST /hobby should add a hobby', async () => {
    const res = await request(app)
      .post('/hobby')
      .send({ name: 'Flying Trapeze', 
        started: 2022, 
        active: true
      });
    expect(res.status).toBe(200);
    expect(res.body.name).toEqual('Flying Trapeze');
    expect(res.body.id).toEqual('8');
  });

  it('PUT /hobby/:id should update a hobby', async () => {
    const res = await request(app)
      .put('/hobby/3')
      .send({ active: false });
    expect(res.status).toBe(200);
    expect(res.body.active).toEqual(false);
    expect(res.body.name).toEqual('Pole Dance');
  });

  //   it('DELETE /horcrux/:id should delete a horcrux', async () => {
  //     const res = await request(app).delete('/horcrux/7');
  //     expect(res.status).toBe(200);

  //     const { body } = await request(app).get('/horcrux/7');
  //     expect(body).toEqual(null);
  //   });

  afterAll(() => {
    pool.end();
  });
});
