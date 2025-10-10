import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

class TableController {
    static async registerTable(req, res) {
        const { code, n_seats } = req.body;
        
        if (!code || !n_seats) {
            return res.status(400).json({
                message: 'All fields are required!',
                error: true
            });
        }

        await client.table.create({
            code,
            n_seats
        });

        return res.status(200).json({
            message: 'Registration successful!',
            error: false
        });
    }
}

export default { TableController };