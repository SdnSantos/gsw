import request from 'supertest';
import app from '../../src/app';

describe('Converter', () => {
  it('Converter letras para números', async () => {
    const response = await request(app)
      .post('/sms')
      .send({
        frase: 'A',
      });

    expect(response.body).toBe(2);
  });
});
