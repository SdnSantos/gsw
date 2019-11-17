function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
Object.defineProperty(exports, '__esModule', {
  value: true,
}); /* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
const _Contato = require('../schemas/Contato');

const _Contato2 = _interopRequireDefault(_Contato);

class ContatoController {
  async show(req, res) {
    const contatos = await _Contato2.default.find();

    // Para retornar só os campos necessários
    const contatosFormatted = contatos.map(c => ({
      _id: c.id,
      nome: c.nome,
      telefone: c.telefone,
      email: c.email,
    }));

    return res.json(contatosFormatted);
  }

  async post(req, res) {
    const { nome, telefone, email } = req.body;

    await _Contato2.default.create({
      nome,
      telefone,
      email,
    });

    return res.json({
      nome,
      telefone,
      email,
    });
  }

  async delete(req, res) {
    const { _id } = req.params;

    await _Contato2.default.findByIdAndDelete(_id);

    return res.json({ msg: 'Deletado com sucesso' });
  }
}

exports.default = new ContatoController();
