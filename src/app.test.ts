import supertest from 'supertest';
import app from './app';

describe('/express_backend', () => {
  it('should get the correct status and response', async () => {
    await supertest(app)
      .get('/express_backend')
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBe(
          'EXPRESS BACKEND IS CONNECTED TO REACT'
        );
      });
  });
});
