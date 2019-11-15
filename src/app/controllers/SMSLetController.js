/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
import SMS from '../schemas/SMS';

class SMSLetController {
  async post(req, res) {
    const { usuario, destino, sequencia } = req.body;

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

    let cont = 0;
    let proxNum = sequencia[cont];
    let num = '';
    let letra = '';
    let indice = '';
    let saida = '';

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

export default new SMSLetController();
