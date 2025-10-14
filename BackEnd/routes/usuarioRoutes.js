import express from 'express';
import { UsuarioController } from '../controllers/UsuarioController.js';

const usuarioRoutes = express.Router();

usuarioRoutes.post('/login', UsuarioController.loginUsuario);

usuarioRoutes.post('/cadastro', UsuarioController.registerUsuario);

export default usuarioRoutes;