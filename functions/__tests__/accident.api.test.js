import { app } from '../index';

const request = require('supertest');

//TODO: test work but error caused by logs
describe.skip('Accident Post Endpoints', () => {
  it.skip('Should return Status 201 OK', async () => {
    const res = await request(app).post('/v1/accident/create').send(accident);

    expect(res.statusCode).toEqual(201);
  });
});
