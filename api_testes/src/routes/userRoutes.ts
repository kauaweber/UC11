import { Router } from 'express';
import { UserController } from '../controllers/userController';

const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/users', (request, response) =>
  userController.create(request, response)
);

userRoutes.get('/users', (request, response) =>
  userController.list(request, response)
);

userRoutes.get('/users/:id', (request, response) =>
  userController.findById(request, response)
);

export { userRoutes };