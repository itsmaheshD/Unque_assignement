import request from 'supertest';
import app from '../src/app.js';

import { connectTestDB, disconnectTestDB } from './setup.js';
import { TestContext } from './context.js';
beforeAll(connectTestDB);
afterAll(disconnectTestDB);

describe('User Login', () => {
  it('student A1 login', async () => {
    const res = await request(app).post('/api/auth/login').send({
        email: 'a1@example.com',
      password: '123456'
    });
    TestContext.studentToken = res.body.token;
     TestContext.studentId = res.body.id;
    expect(res.status).toBe(400);
  });

  it('professor P1 login', async () => {
    const res = await request(app).post('/api/auth/login').send({
      email: 'p1@example.com',
      password: '123456'
    });
     TestContext.professorToken = res.body.token;
      TestContext.professorId ="64aabc1234567890abcdef12";
    expect(res.status).toBe(400);
  });
});
