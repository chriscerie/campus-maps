/**
 * @jest-environment node
 */

import supertest from 'supertest';
import mongoose from 'mongoose';
import app from '../app';
import Location from '../models/locationsModel';

const sendLocationData = {
  name: 'Test name',
  type: 'Test type',
  tile: {
    x: 1,
    y: 1,
    z: 1,
  },
};

describe('GET /v1/locations/loc/:id', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URL);

    new Location(
      Object.assign(
        { id: '1111', description: 'Test description' },
        sendLocationData
      )
    ).save();
  });

  it('should status 404 when requesting nonexistent data', async () => {
    await supertest(app)
      .get('/api/v1/locations/loc/0')
      .then((response) => {
        expect(response.statusCode).toBe(404);
      });
  });

  it('should send Location when requesting existing data', async () => {
    await supertest(app)
      .get('/api/v1/locations/loc/1111')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.id).toBe('1111');
        expect(response.body).toMatchObject(sendLocationData);
      });
  });
});

describe('POST /v1/locations/loc/:id', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URL);

    new Location(
      Object.assign(
        { id: '1111', description: 'Test description' },
        sendLocationData
      )
    ).save();
  });

  it('should send Location when requesting existing data', async () => {
    await supertest(app)
      .post('/api/v1/locations/loc/1111')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.id).toBe('1111');
        expect(response.body).toMatchObject(sendLocationData);
      });
  });

  it('should status 500 when requesting nonexistent data with no params', async () => {
    await supertest(app)
      .post('/api/v1/locations/loc/0')
      .then((response) => {
        expect(response.statusCode).toBe(500);
      });
  });

  it('should create and send Location when requesting nonexisting data with correct params', async () => {
    await supertest(app)
      .post('/api/v1/locations/loc/1112')
      .send(sendLocationData)
      .then((response) => {
        expect(response.statusCode).toBe(201);
        expect(response.body.id).toBe('1112');
        expect(response.body).toMatchObject(sendLocationData);
      });
  });
});
