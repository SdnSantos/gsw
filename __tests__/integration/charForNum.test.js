/* eslint-disable no-undef */
import request from 'supertest';
import app from '../../src/app';

describe('Converter para números', () => {
  // it('Mandando a letra A tem que retornar 2', async () => {
  //   const response = await request(app)
  //     .post('/smsnum')
  //     .send({
  //       usuario: '000001',
  //       destino: '000002',
  //       msg: 'A',
  //     });

  //   expect(response.body).toHaveProperty('_id');
  // });

  it('Mandando a letra A tem que retornar 2', async () => {
    const response = await request(app)
      .post('/smsnum')
      .send({
        usuario: '000001',
        destino: '000002',
        msg: 'A',
      });

    expect(response.body).toBe('2');
  });

  it('Mandando a letra B tem que retornar 22', async () => {
    const response = await request(app)
      .post('/smsnum')
      .send({
        usuario: '000001',
        destino: '000002',
        msg: 'B',
      });

    expect(response.body).toBe('22');
  });

  it('Mandando a letra C tem que retornar 222', async () => {
    const response = await request(app)
      .post('/smsnum')
      .send({
        usuario: '000001',
        destino: '000002',
        msg: 'C',
      });

    expect(response.body).toBe('222');
  });
});

describe('Converter para números', () => {
  it('Mandando a letra B tem que retornar 22', async () => {
    const response = await request(app)
      .post('/smsnum')
      .send({
        usuario: '000001',
        destino: '000002',
        msg: 'B',
      });

    expect(response.body).toBe('22');
  });
});

describe('Converter para números', () => {
  it('Mandando a letra C tem que retornar 222', async () => {
    const response = await request(app)
      .post('/smsnum')
      .send({
        usuario: '000001',
        destino: '000002',
        msg: 'C',
      });

    expect(response.body).toBe('222');
  });
});

describe('Converter para números', () => {
  it('Converter letras para números', async () => {
    const response = await request(app)
      .post('/smsnum')
      .send({
        usuario: '000001',
        destino: '000002',
        msg: 'TESTE DE MESA',
      });

    expect(response.body).toBe('833777783303_33063377772');
  });
});
