"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');

var _Log = require('./app/schemas/Log'); var _Log2 = _interopRequireDefault(_Log);

var _LogController = require('./app/controllers/LogController'); var _LogController2 = _interopRequireDefault(_LogController);
var _ContatoController = require('./app/controllers/ContatoController'); var _ContatoController2 = _interopRequireDefault(_ContatoController);
var _SMSController = require('./app/controllers/SMSController'); var _SMSController2 = _interopRequireDefault(_SMSController);

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

exports. default = routes;
