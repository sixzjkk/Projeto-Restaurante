import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

class UsuarioController {
    static async loginUsuario (req, res) {
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

        const token = jwt.sign({id: usuario.id}, process.env.SECRET_KEY, {expiresIn: '2h'});

        return res.status(200).json({
            message: 'Autenticado!',
            error: false,
            token
        });
    }

    static async cadastroUsuario (req, res) {
        const { nome, email, password} = req.body;

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

        const token = jwt.sign({id: usuario.id}, process.env.SECRET_KEY, {expiresIn: '2h'});

        return res.status(200).json({
            message: 'Cadastro bem sucedido!',
            error: false,
            token 
        });
    }
}

export { UsuarioController };