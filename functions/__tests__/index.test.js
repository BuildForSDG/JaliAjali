const request = require('supertest');
// const app = require('../index');
import {app} from "../index";

describe('Post Endpoints', () => {
  it('Should return my name', async () => {
    const res = await request(app)
      .post('/user')
      .send({
        name: "World"
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual("Hello World");
  })
});
