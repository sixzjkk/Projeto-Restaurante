import express from 'express';
import loginMiddleware from '../middlewares/loginMiddleware.js';
import { ReservaController } from '../controllers/ReservaController.js'

const reservaRoutes = express.Router();

reservaRoutes.post('/reservas/novo', loginMiddleware, ReservaController.fazerReserva);

export default reservaRoutes;