import express from 'express';
import { ReservaController } from '../controllers/ReservaController.js'

const reservaRoutes = express.Router();

reservaRoutes.post('/reservas/novo', ReservaController.fazerReserva);

export default reservaRoutes;