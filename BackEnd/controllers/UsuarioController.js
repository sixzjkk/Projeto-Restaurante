import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

class UsuarioController {
    static async buscarTodosUsuarios(req, res) {
        const usuariosComSenhas = await client.usuario.findMany({});

        const usuarios = usuariosComSenhas.map(usuario => {
            usuario.password = undefined;
            return usuario;
        });

        return res.status(200).json({
            message: 'Usuário buscado!',
            error: false,
            usuarios
        });
    }

    static async buscarUsuario(req, res) {
        const usuario = await client.usuario.findUnique({
            where: {
                id: req.usuarioId
            }
        });

        usuario.password = undefined;

        return res.status(200).json({
            message: 'Usuário buscado!',
            error: false,
            usuario
        });
    }

    static async atualizarUsuario(req, res) {
        const usuarioAtualizado = req.body;

        if (!usuarioAtualizado.nome || !usuarioAtualizado.email) {
            return res.status(400).json({
                message: 'Todos os campos são obrigatórios!',
                error: true
            });
        }

        await client.usuario.update({
            where: {
                id: req.usuarioId
            },
            data: {
                nome: usuarioAtualizado.nome,
                email: usuarioAtualizado.email
            }
        });

        return res.status(200).json({
            message: 'Usuário atualizado com sucesso!',
            error: false
        });
    }

    static async loginUsuario(req, res) {
        const { email, password } = req.body;

        const usuario = await client.usuario.findUnique({
            where: {
                email
            }
        });

        if (!usuario) {
            return res.status(404).json({
                message: 'Usuário não encontrado!',
                error: true
            })
        }

        const isCorrectPassword = bcryptjs.compareSync(password, usuario.password);

        if (!isCorrectPassword) {
            return res.status(401).json({
                message: 'Senha incorreta!',
                error: true
            });
        }

        const token = jwt.sign({ id: usuario.id }, process.env.SECRET_KEY, { expiresIn: '2h' });

        return res.status(200).json({
            message: 'Autenticado!',
            error: false,
            token
        });
    }

    static async cadastroUsuario(req, res) {
        const { nome, email, password } = req.body;

        const possivelUsuario = await client.usuario.findUnique({
            where: {
                email
            }
        });

        if (possivelUsuario) {
            return res.status(409).json({
                message: 'Email já registrado!',
                error: true
            })
        }

        const salt = bcryptjs.genSaltSync(8);
        const hashPassword = bcryptjs.hashSync(password, salt);

        if (!nome || !email || !password) {
            return res.status(400).json({
                message: 'Todos os campos são obrigatórios!',
                error: true
            });
        }

        const usuario = await client.usuario.create({
            data: {
                nome,
                email,
                password: hashPassword
            }
        });

        const token = jwt.sign({ id: usuario.id }, process.env.SECRET_KEY, { expiresIn: '2h' });

        return res.status(200).json({
            message: 'Cadastro bem sucedido!',
            error: false,
            token
        });
    }
}

export { UsuarioController };