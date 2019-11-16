/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
import Contato from '../schemas/Contato';

class ContatoController {
  async show(req, res) {
    const contatos = await Contato.find();

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

    await Contato.create({
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

    await Contato.findByIdAndDelete(_id);

    return res.json({ msg: 'Deletado com sucesso' });
  }
}

export default new ContatoController();
