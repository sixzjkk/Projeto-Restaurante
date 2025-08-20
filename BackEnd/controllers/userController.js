import bcryptjs from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

class UserController {
    static async registerUser (req, res) {
        const { name, email, password } = req.body;

        const salt = bcryptjs.genSaltSync(8);
        const hashPassword = bcryptjs.hashSync(password, salt);

        if (!name || !email || !password) {
            return res.json({
                message: 'Registration failed',
                error: true
            });
        }

        await client.user.create({
            data: {
                name,
                email,
                password: hashPassword
            }
        });

        res.json({
            message: 'Registration successful',
            error: false,
            token: ''
        }); 
    }
}

export { UserController };