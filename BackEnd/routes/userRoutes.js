import express from 'express';
import { UserController } from '../controllers/UserController.js';

const userRoutes = express.Router();

userRoutes.post('/login', UserController.loginUser);

userRoutes.post('/register', UserController.registerUser);

export { userRoutes };