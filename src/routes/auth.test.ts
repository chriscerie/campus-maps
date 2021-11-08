/**
 * @jest-environment node
 */

import supertest from 'supertest';
import app from '../app';

describe('/v1/auth/logout', () => {
  it('should status 302', async () => {
    await supertest(app)
      .post('/api/v1/auth/logout')
      .then((response) => {
        expect(response.statusCode).toBe(302);
      });
  });
});
