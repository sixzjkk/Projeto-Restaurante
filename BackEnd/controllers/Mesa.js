import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

class MesaController {
    static async registerMesa(req, res) {
        const { code, n_seats } = req.body;
        
        if (!code || !n_seats) {
            return res.status(400).json({
                message: 'All fields are required!',
                error: true
            });
        }

        await client.mesa.create({
            code,
            n_seats
        });

        return res.status(200).json({
            message: 'Registration successful!',
            error: false
        });
    }
}

export default { MesaController };