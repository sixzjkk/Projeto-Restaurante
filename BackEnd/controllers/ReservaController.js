import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

class ReservaController {
    static async fazerReserva(req, res) {
        const [mesaId, data, n_pessoas] = req.body;

        const reserva = await client.reserva.create({
            data: {
                usuario_id: req.usuarioId,
                mesa_id: mesaId,
                data,
                n_pessoas
            }
        });


    }
}

export { ReservaController };