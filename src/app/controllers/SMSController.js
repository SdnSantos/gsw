/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
// import SMS from '../schemas/SMS';

class SMSController {
  async post(req, res) {
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

    const { frase } = req.body;

    let tecla = '';
    let teclaAnterior = '';
    let saida = '';

    // PERCORRENDO A FRASE PASSADA
    for (let i = 0; i < frase.length; i++) {
      // PERCORRENDO AS CHAVES
      for (let j = 0; j < chave.length; j++) {
        tecla = chave[j];
        // VERIFICANDO SE TEM NA CHAVE A LETRA DA FRASE
        if (chave[j].indexOf(frase[i]) !== -1) {
          // PERCORRENDO CADA LETRA DA CHAVE
          // for (let k = 0; k < chave[j].length; k++) {
          let k = 0;
          while (chave[j][k] !== frase[i]) {
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

    return res.json(saida);
  }
}

export default new SMSController();
