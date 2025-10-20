import express from 'express';
import loginMiddleware from '../middlewares/loginMiddleware.js';
import adminMiddleware from '../middlewares/adminMiddleware.js';
import { MesaController } from '../controllers/MesaController.js';

const mesaRoutes = express.Router();

mesaRoutes.get('/', MesaController.buscarMesas);

mesaRoutes.post('/novo', loginMiddleware, adminMiddleware, MesaController.registerMesa);

export default mesaRoutes;