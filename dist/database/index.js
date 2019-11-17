function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
Object.defineProperty(exports, '__esModule', { value: true });
const _mongoose = require('mongoose');

const _mongoose2 = _interopRequireDefault(_mongoose);

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnection = _mongoose2.default.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

exports.default = new Database();
