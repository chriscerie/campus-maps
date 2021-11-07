/**
 * @jest-environment node
 */

import supertest from 'supertest';
import app from '../app';

describe('GET /v1/locations/loc/:id', () => {
  it('should status 404 when requesting nonexistent data', async () => {
    await supertest(app)
      .get('/api/v1/locations/loc/0')
      .then((response) => {
        expect(response.statusCode).toBe(404);
      });
  });

  it('should status 200 when requesting existing data', async () => {
    await supertest(app)
      .get('/api/v1/locations/loc/3588023830')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe('POST /v1/locations/loc/:id', () => {
  it('should status 200 when requesting existing data', async () => {
    await supertest(app)
      .post('/api/v1/locations/loc/3588023830')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });

  it('should status 500 when requesting nonexistent data with no data', async () => {
    await supertest(app)
      .post('/api/v1/locations/loc/0')
      .then((response) => {
        expect(response.statusCode).toBe(500);
      });
  });
});
