import express from 'express';
import { UserController } from '../controllers/userController.js';

const userRoutes = express.Router();

userRoutes.post('/login', UserController.login);

userRoutes.post('/register', UserController.register);

export { userRoutes };