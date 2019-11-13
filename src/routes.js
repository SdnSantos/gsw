import { Router } from 'express';

import SMSController from './app/controllers/SMSController';

const routes = new Router();

routes.post('/sms', SMSController.post);

export default routes;
