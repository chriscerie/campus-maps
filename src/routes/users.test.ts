/**
 * @jest-environment node
 */

import supertest from 'supertest';
import app from '../app';

describe('/v1/users/current-user', () => {
  it('should status 404 when not logged in', async () => {
    await supertest(app)
      .get('/api/v1/users/current-user')
      .then((response) => {
        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual({});
      });
  });
});
