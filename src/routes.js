import { Router } from 'express';

import Log from './app/schemas/Log';

import LogController from './app/controllers/LogController';
import ContatoController from './app/controllers/ContatoController';
import SMSController from './app/controllers/SMSController';

const routes = new Router();

//---------------------------------------------------------------------------
//                    ROTAS DE LOGS
//---------------------------------------------------------------------------
routes.use('/', async (req, res, next) => {
  await Log.create({
    usuario: req.body.usuario,
    metodo: req.method,
    rota: req.url,
  });

  return next();
});

routes.get('/logs', LogController.show);

//---------------------------------------------------------------------------
//                    ROTAS DE Destinatários
//---------------------------------------------------------------------------

routes.get('/destinatarios', ContatoController.show);
routes.post('/destinatarios', ContatoController.post);

//---------------------------------------------------------------------------
//                    ROTAS DE SMSs
//---------------------------------------------------------------------------

routes.get('/smss', SMSController.show);
routes.post('/smss', SMSController.post);

export default routes;
