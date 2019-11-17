function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
Object.defineProperty(exports, '__esModule', { value: true });
const _mongoose = require('mongoose');

const _mongoose2 = _interopRequireDefault(_mongoose);

const LogSchema = new _mongoose2.default.Schema(
  {
    usuario: {
      type: String,
    },
    metodo: {
      type: String,
    },
    rota: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

exports.default = _mongoose2.default.model('LOG', LogSchema);
