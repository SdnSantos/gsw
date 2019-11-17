function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
Object.defineProperty(exports, '__esModule', { value: true });
const _express = require('express');

const _Log = require('./app/schemas/Log');

const _Log2 = _interopRequireDefault(_Log);

const _LogController = require('./app/controllers/LogController');

const _LogController2 = _interopRequireDefault(_LogController);
const _ContatoController = require('./app/controllers/ContatoController');

const _ContatoController2 = _interopRequireDefault(_ContatoController);
const _SMSController = require('./app/controllers/SMSController');

const _SMSController2 = _interopRequireDefault(_SMSController);

const routes = new (0, _express.Router)();

//---------------------------------------------------------------------------
//                    ROTAS DE LOGS
//---------------------------------------------------------------------------
routes.use('/', async (req, res, next) => {
  await _Log2.default.create({
    usuario: req.body.usuario,
    metodo: req.method,
    rota: req.url,
  });

  return next();
});

routes.get('/logs', _LogController2.default.show);

//---------------------------------------------------------------------------
//                    ROTAS DE Destinatários
//---------------------------------------------------------------------------

routes.get('/destinatarios', _ContatoController2.default.show);
routes.post('/destinatarios', _ContatoController2.default.post);

//---------------------------------------------------------------------------
//                    ROTAS DE SMSs
//---------------------------------------------------------------------------

routes.get('/smss', _SMSController2.default.show);
routes.post('/smss', _SMSController2.default.post);

exports.default = routes;
