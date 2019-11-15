/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */

import SMS from '../schemas/SMS';

class SMSNumController {
  async show(req, res) {
    const smss = await SMS.find();

    return res.json(smss);
  }

  async post(req, res) {
    const { usuario, destino, msg } = req.body;

    if (msg.length <= 255) {
      const teclado = {
        ABC: 2,
        DEF: 3,
        GHI: 4,
        JKL: 5,
        MNO: 6,
        PQRS: 7,
        TUV: 8,
        WXYZ: 9,
        ' ': 0,
      };

      // PEGANDO AS CHAVES DO OBJETO
      const chave = Object.keys(teclado);
      // PEGANDO O VALOR DOS OBJETOS
      const valor = Object.values(teclado);

      let tecla = '';
      let teclaAnterior = '';
      let saida = '';

      // PERCORRENDO A MENSAGEM PASSADA
      for (let i = 0; i < msg.length; i++) {
        // PERCORRENDO AS CHAVES
        for (let j = 0; j < chave.length; j++) {
          tecla = chave[j];
          // VERIFICANDO SE TEM NA CHAVE A LETRA DA MENSAGEM
          if (chave[j].indexOf(msg[i]) !== -1) {
            // PERCORRENDO CADA LETRA DA CHAVE
            // for (let k = 0; k < chave[j].length; k++) {
            let k = 0;
            while (chave[j][k] !== msg[i]) {
              if (tecla === teclaAnterior) {
                saida += '_';
              }

              saida += valor[j];
              k++;
            }
            saida += valor[j];
            teclaAnterior = tecla;
          }
        }
      }

      //---------------------------------------------------------------------
      //    SALVAMENTO NO MONGO
      //---------------------------------------------------------------------
      await SMS.create({
        usuario,
        destino,
        msg,
        sequencia: saida,
      });

      return res.json({
        usuario,
        destino,
        msg,
        sequencia: saida,
      });
    }
    return res.status(400).json({ erro: 'Mensagem maior que 255 caracteres' });
  }
}

export default new SMSNumController();
