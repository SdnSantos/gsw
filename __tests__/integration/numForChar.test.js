/* eslint-disable no-undef */
import request from 'supertest';
import app from '../../src/app';

describe('Converter para letras', () => {
  it('Converter números para letras', async () => {
    const response = await request(app)
      .post('/smslet')
      .send({
        sequencia: '833777783303_33063377772',
      });

    expect(response.body).toBe('TESTE DE MESA');
  });
});
