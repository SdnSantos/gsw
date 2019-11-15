import { Router } from 'express';

import Log from './app/schemas/Log';

import SMSController from './app/controllers/SMSController';
import SMSNumController from './app/controllers/SMSNumController';
import SMSLetController from './app/controllers/SMSLetController';
import LogController from './app/controllers/LogController';

const routes = new Router();

// routes.post('/smsnum', (req, res) => {
//   return res.json({ _id: 1 });
// });

routes.use('/', async (req, res, next) => {
  await Log.create({
    usuario: req.body.usuario,
    metodo: req.method,
    rota: req.url,
  });

  return next();
});

routes.get('/logs', LogController.show);

routes.post('/smss', SMSController.post);

routes.post('/smsnum', SMSNumController.post);
routes.post('/smslet', SMSLetController.post);

export default routes;
