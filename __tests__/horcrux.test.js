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

  it('GET /horcrux/id should return a single horcrux', async () => {
    const res = await request(app).get('/horcrux/1');
    const expected = {
      id: '1',
      name: 'Tom Riddles Diary', 
      original_owner: 'Tom Riddle', 
      house_artifact: false, 
      sacrifice: 'Myrtle Warren'
    };
    expect(res.body).toEqual(expected);
  });

  it('POST /horcrux should add a horcrux to the table data', async () => {
    const res = await await request(app)
      .post('/horcrux')
      .send({ name: 'Lord Voldemort', 
        original_owner: 'Tom Riddle', 
        house_artifact: false,
        sacrifice: 'Lord Voldemort'
      });
    expect(res.status).toBe(200);
    expect(res.body.name).toEqual('Lord Voldemort');
    expect(res.body.id).toEqual('8');
  });

  it('POST /horcrux should add a horcrux to the table data', async () => {
    const res = await await request(app)
      .post('/horcrux')
      .send({ name: 'Lord Voldemort', 
        original_owner: 'Tom Riddle', 
        house_artifact: false,
        sacrifice: 'Lord Voldemort'
      });
    expect(res.status).toBe(200);
    expect(res.body.name).toEqual('Lord Voldemort');
    expect(res.body.id).toEqual('8');
  });

  afterAll(() => {
    pool.end();
  });
});
