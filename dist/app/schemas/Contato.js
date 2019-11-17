"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

const ContatoSchema = new _mongoose2.default.Schema(
  {
    nome: {
      type: String,
      require: true,
    },
    telefone: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

exports. default = _mongoose2.default.model('Contato', ContatoSchema);
