import { Router } from 'express';

import SMSNumController from './app/controllers/SMSNumController';
import SMSLetController from './app/controllers/SMSLetController';

const routes = new Router();

routes.post('/smsnum', SMSNumController.post);
routes.post('/smslet', SMSLetController.post);

export default routes;
