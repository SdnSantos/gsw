/* eslint-disable no-undef */
import request from 'supertest';
import app from '../../src/app';

describe('Converter', () => {
  it('Converter letras para números', async () => {
    const response = await request(app)
      .post('/smsnum')
      .send({
        frase: 'TESTE DE MESA',
      });

    expect(response.body).toBe('833777783303_33063377772');
  });
});
