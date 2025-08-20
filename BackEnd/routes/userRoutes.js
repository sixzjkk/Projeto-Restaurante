import express from 'express';
import { UserController } from '../controllers/userController.js';

const userRoutes = express.Router();

userRoutes.post('/register', UserController.registerUser);

export { userRoutes };