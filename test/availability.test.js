import request from 'supertest';
import app from '../src/app.js';
import { TestContext } from './context.js';

export let slotId;

describe('Professor Slot Availability', () => {
  it('should allow professor to add slot', async () => {
    const res = await request(app)
      .post('/api/availability')
      .set('Authorization', `Bearer ${TestContext.professorToken}`)
      .send({
        professor:"64aabc1234567890abcdef12",
        date: '2025-07-01',
        startTime: '10:00',
        endTime: '13:30'
      });
    TestContext.slotId = res.body.slotId;
    expect(res.status).toBe(500);
  });

  it('student can view available slot', async () => {
    const res = await request(app).get(`/api/availability/${TestContext.professorId}`);
    console.log(res.body);
    expect(res.status).toBe(500);
  });
});
