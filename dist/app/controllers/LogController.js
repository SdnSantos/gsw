function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
Object.defineProperty(exports, '__esModule', { value: true });
const _Log = require('../schemas/Log');

const _Log2 = _interopRequireDefault(_Log);

class LogController {
  async show(req, res) {
    const logs = await _Log2.default.find();

    const logsFormatado = logs.map(l => ({
      metodo: l.metodo,
      rota: l.rota,
    }));

    return res.json(logsFormatado);
  }
}

exports.default = new LogController();
