const request = require('supertest');
const app = require('./index');
import mongoose from 'mongoose';

describe('Test the /btc/price path', () => {
  test('It should response the GET method', () => {
    return request(app).get('/btc/price').then(response => {
      expect(response.statusCode).toBe(200);
      expect(response.text).toMatch(/The current price of Bitcoin is \d{1,3}(,\d{3})*\.\d{4} USD/);
    });
  });
}
);

describe('POST /auth/register', () => {
  it('should create a new user with valid credentials', async () => {
    const response = await request(app)
      .post('/auth/register')
      .send({ username: 'tech', password: 'testpassword' });
    expect(response.statusCode).toBe(200);
  });
});

describe('POST /auth/login', () => {
  it('should login with valid credentials', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({ username: 'test', password: 'testpassword' });
    expect(response.statusCode).toBe(200);
  });
}
);

