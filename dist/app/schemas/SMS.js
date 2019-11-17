function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
Object.defineProperty(exports, '__esModule', { value: true });
const _mongoose = require('mongoose');

const _mongoose2 = _interopRequireDefault(_mongoose);

const SMSSchema = new _mongoose2.default.Schema(
  {
    usuario: {
      type: String,
    },
    destinatario: {
      type: String,
    },
    msg: {
      type: String,
    },
    sequencia: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

exports.default = _mongoose2.default.model('SMS', SMSSchema);
