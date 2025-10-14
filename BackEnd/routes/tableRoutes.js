import express from 'express';
import { MesaController } from '../controllers/Mesa';

const mesaRoutes = express.Router();

mesaRoutes.post('/novo', MesaController.registerMesa);

export default mesaRoutes;