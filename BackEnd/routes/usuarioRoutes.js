import express from 'express';
import loginMiddleware from '../middlewares/loginMiddleware.js';
import adminMiddleware from '../middlewares/adminMiddleware.js';
import { UsuarioController } from '../controllers/UsuarioController.js';

const usuarioRoutes = express.Router();

usuarioRoutes.get('/perfil/todos', loginMiddleware, adminMiddleware, UsuarioController.buscarTodosUsuarios)

usuarioRoutes.get('/perfil', loginMiddleware, UsuarioController.buscarUsuario);

usuarioRoutes.patch('/perfil', loginMiddleware, UsuarioController.atualizarUsuario);

usuarioRoutes.post('/auth/login', UsuarioController.loginUsuario);

usuarioRoutes.post('/auth/cadastro', UsuarioController.cadastrarUsuario);

export default usuarioRoutes;