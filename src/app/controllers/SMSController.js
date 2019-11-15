/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */

import SMS from '../schemas/SMS';

class SMSController {
  async show(req, res) {
    const smss = await SMS.find();

    return res.json(smss);
  }

  async post(req, res) {
    const { usuario, destino, msg, sequencia } = req.body;

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
    let cont = 0;
    let proxNum = sequencia[cont];
    let num = '';
    let letra = '';
    let indice = '';

    //------------------------------------------------------------------------
    // LÓGICA CASO MANDE A MENSAGEM
    //------------------------------------------------------------------------
    if (!sequencia) {
      if (msg.length <= 255) {
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
      return res
        .status(400)
        .json({ erro: 'Mensagem maior que 255 caracteres' });
    }

    //------------------------------------------------------------------------
    // LÓGICA CASO MANDE A SEQUENCIA DE NÚMEROS
    //------------------------------------------------------------------------

    // PERCORRENDO A SEQUENCIA DE NÚMEROS PASSADO
    // for (let i = 0; i < sequencia.length; i++) {
    while (cont < sequencia.length) {
      if (num === proxNum) {
        letra = '';
        while (num === proxNum) {
          letra += num;
          num = proxNum;
          cont++;
          proxNum = sequencia[cont];
        }
      } else {
        letra = num;
      }

      indice = letra.length - 1;

      for (let j = 0; j < valor.length; j++) {
        if (letra[0] === String(valor[j])) {
          saida += chave[j][indice];
        }
      }

      if (proxNum !== undefined) {
        num = proxNum;
        proxNum = sequencia[cont];
      }
    }

    if (saida >= 255) {
      return res
        .status(400)
        .json({ error: 'Mensagem maior que 255 caracteres!' });
    }

    //---------------------------------------------------------------------
    //    SALVAMENTO NO MONGO
    //---------------------------------------------------------------------
    await SMS.create({
      usuario,
      destino,
      msg: saida,
      sequencia,
    });

    return res.json({
      usuario,
      destino,
      msg: saida,
      sequencia,
    });
  }
}

export default new SMSController();
