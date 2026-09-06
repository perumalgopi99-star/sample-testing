const request = require('supertest');
const app = require('../server');

describe('GET /api/hello', () => {
  it('responds with JSON status 200', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/json/);
  });

  it('returns the expected hello message', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.body).toEqual({ message: 'Hello from the Express server!' });
  });
});

describe('static assets', () => {
  it('serves files from the public directory', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/html/);
  });
});