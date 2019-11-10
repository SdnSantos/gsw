import { Router } from 'express';

import SMSController from './app/controllers/SMSController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ msg: 'Hello World' });
});

export default routes;
