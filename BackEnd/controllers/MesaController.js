import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

class MesaController {
    static async registerMesa(req, res) {
        const { codigo, n_lugares } = req.body;
        
        if (!codigo || !n_lugares) {
            return res.status(400).json({
                message: 'Todos os campos são obrigatórios!',
                error: true
            });
        }

        await client.mesa.create({
            data: {
                codigo,
                n_lugares
            }
        });

        return res.status(200).json({
            message: 'Registration successful!',
            error: false
        });
    }
}

export { MesaController };