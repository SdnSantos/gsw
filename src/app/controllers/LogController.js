import Log from '../schemas/Log';

class LogController {
  async show(req, res) {
    const logs = await Log.find();

    return res.json(logs);
  }
}

export default new LogController();
