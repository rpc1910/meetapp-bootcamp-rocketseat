import { Router } from 'express';
import authMiddleware from './app/middlewares/auth';
import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';

const routes = new Router();

routes.post('/auth', AuthController.store);
routes.post('/users', UserController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);

export default routes;
