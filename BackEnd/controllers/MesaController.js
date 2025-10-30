import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

class MesaController {
     static async buscarMesas(req, res) {
        const mesas = await client.mesa.findMany({});

        return res.status(200).json({
            message: 'Mesas buscadas com sucesso!',
            error: false,
            mesas
        });
    }
    
    static async cadastrarMesa(req, res) {
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
                n_lugares: parseInt(n_lugares)
            }
        });

        return res.status(200).json({
            message: 'Mesa cadastrada com sucesso!',
            error: false
        });
    }
}

export { MesaController };