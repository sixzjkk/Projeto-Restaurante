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
                message: 'Usuario not found!',
                error: true
            })
        }

        const correctPassword = bcryptjs.compareSync(password, usuario.password);

        if (!correctPassword) {
            return res.status(401).json({
                message: 'Incorrect password!',
                error: true
            });
        }

        const token = jwt.sign({id: usuario.id}, process.env.SECRET_KEY, {expiresIn: '2h'});

        return res.status(200).json({
            message: 'Authenticated!',
            error: false,
            token
        });
    }

    static async registerUsuario (req, res) {
        const { name, email, password, confirmPassword } = req.body;

        const possibleUsuario = await client.usuario.findUnique({
            where: {
                email
            }
        });

        if (possibleUsuario) {
            return res.status(409).json({
                message: 'Email already registered!',
                error: true
            })
        }

        const salt = bcryptjs.genSaltSync(8);
        const hashPassword = bcryptjs.hashSync(password, salt);

        if (!name || !email || !password || !confirmPassword || (confirmPassword !== password)) {
            return res.status(400).json({
                message: 'All fields are required!',
                error: true
            });
        }

        const usuario = await client.usuario.create({
            data: {
                name,
                email,
                password: hashPassword
            }
        });

        const token = jwt.sign({id: usuario.id}, process.env.SECRET_KEY, {expiresIn: '2h'});

        return res.status(200).json({
            message: 'Registration successful!',
            error: false,
            token 
        });
    }
}

export { UsuarioController };