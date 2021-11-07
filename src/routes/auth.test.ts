/**
 * @jest-environment node
 */

import supertest from 'supertest';
import app from '../app';

describe('/v1/current-user', () => {
  it('should status 404 when not logged in', async () => {
    await supertest(app)
      .get('/api/v1/current-user')
      .then((response) => {
        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual({});
      });
  });
});

describe('/v1/logout', () => {
  it('should status 302', async () => {
    await supertest(app)
      .post('/api/v1/logout')
      .then((response) => {
        expect(response.statusCode).toBe(302);
      });
  });
});
