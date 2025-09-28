import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

class UserController {
    static async login (req, res) {
        const { email, password } = req.body;

        const user = await client.user.findUnique({
            where: {
                email
            }
        });

        if (!user) {
            return res.status(404).json({
                message: 'User not found',
                error: true
            })
        }

        const correctPassword = bcryptjs.compareSync(password, user.password);

        if (!correctPassword) {
            return res.status(401).json({
                message: 'Incorrect password',
                error: true
            });
        }

        const token = jwt.sign({id: user.id}, process.env.SECRET_KEY, {expiresIn: '2h'});

        return res.status(200).json({
            message: 'Authenticated!',
            error: false,
            token
        });
    }

    static async register (req, res) {
        const { name, email, password, confirmPassword } = req.body;

        const possibleUser = await client.user.findUnique({
            where: {
                email
            }
        });

        if (possibleUser) {
            return res.status(409).json({
                message: 'Email already registered',
                error: true
            })
        }

        const salt = bcryptjs.genSaltSync(8);
        const hashPassword = bcryptjs.hashSync(password, salt);

        if (!name || !email || !password || !confirmPassword || (confirmPassword !== password)) {
            return res.status(400).json({
                message: 'Registration failed',
                error: true
            });
        }

        const user = await client.user.create({
            data: {
                name,
                email,
                password: hashPassword
            }
        });

        const token = jwt.sign({id: user.id}, process.env.SECRET_KEY, {expiresIn: '2h'});

        return res.status(200).json({
            message: 'Registration successful',
            error: false,
            token 
        });
    }
}

export { UserController };