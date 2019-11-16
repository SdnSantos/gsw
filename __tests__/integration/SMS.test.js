/* eslint-disable no-undef */
import request from 'supertest';
import app from '../../src/app';

describe('SMS - POST', () => {
  it('Mandando a letra A tem que retornar 2', async () => {
    const response = await request(app)
      .post('/smss')
      .send({
        usuario: '000001',
        destinatario: '000002',
        msg: 'A',
        sequencia: '',
      });

    expect(response.body).toStrictEqual({
      usuario: '000001',
      destinatario: '000002',
      msg: 'A',
      sequencia: '2',
    });
  });

  it('Mandando a sequencia 2 tem que retornar A', async () => {
    const response = await request(app)
      .post('/smss')
      .send({
        usuario: '000001',
        destinatario: '000002',
        msg: '',
        sequencia: '2',
      });

    expect(response.body).toStrictEqual({
      usuario: '000001',
      destinatario: '000002',
      msg: 'A',
      sequencia: '2',
    });
  });

  it('Mandando a letra B tem que retornar 22', async () => {
    const response = await request(app)
      .post('/smss')
      .send({
        usuario: '000001',
        destinatario: '000002',
        msg: 'B',
        sequencia: '',
      });

    expect(response.body).toStrictEqual({
      usuario: '000001',
      destinatario: '000002',
      msg: 'B',
      sequencia: '22',
    });
  });

  it('Mandando a sequencia 22 tem que retornar B', async () => {
    const response = await request(app)
      .post('/smss')
      .send({
        usuario: '000001',
        destinatario: '000002',
        msg: '',
        sequencia: '22',
      });

    expect(response.body).toStrictEqual({
      usuario: '000001',
      destinatario: '000002',
      msg: 'B',
      sequencia: '22',
    });
  });

  it('Mandando a letra C tem que retornar 222', async () => {
    const response = await request(app)
      .post('/smss')
      .send({
        usuario: '000001',
        destinatario: '000002',
        msg: 'C',
        sequencia: '',
      });

    expect(response.body).toStrictEqual({
      usuario: '000001',
      destinatario: '000002',
      msg: 'C',
      sequencia: '222',
    });
  });

  it('Mandando a sequencia 222 tem que retornar C', async () => {
    const response = await request(app)
      .post('/smss')
      .send({
        usuario: '000001',
        destinatario: '000002',
        msg: '',
        sequencia: '222',
      });

    expect(response.body).toStrictEqual({
      usuario: '000001',
      destinatario: '000002',
      msg: 'C',
      sequencia: '222',
    });
  });

  it('Mandando a frase TESTE DE MESA tem que retornar 833777783303_33063377772', async () => {
    const response = await request(app)
      .post('/smss')
      .send({
        usuario: '000001',
        destinatario: '000002',
        msg: 'TESTE DE MESA',
        sequencia: '',
      });

    expect(response.body).toStrictEqual({
      usuario: '000001',
      destinatario: '000002',
      msg: 'TESTE DE MESA',
      sequencia: '833777783303_33063377772',
    });
  });

  it('Mandando a sequencia 833777783303_33063377772 tem que retornar TESTE DE MESA', async () => {
    const response = await request(app)
      .post('/smss')
      .send({
        usuario: '000001',
        destinatario: '000002',
        msg: '',
        sequencia: '833777783303_33063377772',
      });

    expect(response.body).toStrictEqual({
      usuario: '000001',
      destinatario: '000002',
      msg: 'TESTE DE MESA',
      sequencia: '833777783303_33063377772',
    });
  });
});
