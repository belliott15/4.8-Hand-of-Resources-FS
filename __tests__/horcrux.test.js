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

  it('PUT /horcrux/:id should update a horcrux', async () => {
    const res = await request(app)
      .put('/horcrux/7')
      .send({ name: 'Lord Voldemort', 
        original_owner: 'Tom Marvolo Riddle', 
      });
    expect(res.status).toBe(200);
    expect(res.body.name).toEqual('Lord Voldemort');
    expect(res.body.original_owner).toEqual('Tom Marvolo Riddle');
  });

  it('DELETE /horcrux/:id should delete a horcrux', async () => {
    const res = await request(app).delete('/horcrux/7');
    expect(res.status).toBe(200);

    const { body } = await request(app).get('/horcrux/7');
    expect(body).toEqual(null);
  });

  afterAll(() => {
    pool.end();
  });
});
