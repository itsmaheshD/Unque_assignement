import request from 'supertest';
import app from '../src/app.js';
import { connectTestDB, disconnectTestDB } from './setup.js';

export let studentId, professorId;

beforeAll(connectTestDB);
afterAll(disconnectTestDB);

describe('User Registration', () => {
  it('should register student A1', async () => {
    const res = await request(app).post('/api/auth/register').send({
      name: 'A1',
      email: 'a1@example.com',
      password: '123456',
      role: 'student'
    });
    studentId = res.body.id;
    expect(res.status).toBe(201);
  });

  it('should register professor P1', async () => {
    const res = await request(app).post('/api/auth/register').send({
      name: 'P1',
      email: 'p1@example.com',
      password: '123456',
      role: 'professor'
    });
    professorId = res.body.id;
    expect(res.status).toBe(201);
  });
});
