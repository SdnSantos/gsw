import Log from '../schemas/Log';

class LogController {
  async show(req, res) {
    const logs = await Log.find();

    const logsFormatado = logs.map(l => ({
      metodo: l.metodo,
      rota: l.rota,
    }));

    return res.json(logsFormatado);
  }
}

export default new LogController();
