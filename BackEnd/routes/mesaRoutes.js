import express from 'express';
import { MesaController } from '../controllers/MesaController.js';

const mesaRoutes = express.Router();

mesaRoutes.post('/novo', MesaController.registerMesa);

export default mesaRoutes;