import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

class ReservaController {
    static async fazerReserva(req, res) {
        const { mesa_id, data, n_pessoas } = req.body;

        if (!mesa_id || !data || !n_pessoas) {
            return res.status(400).json({
                message: 'Todos os campos são obrigatórios!',
                error: true
            });
        }

        const dataISO = new Date(data + "T00:00:00").toISOString();

        const reserva = await client.reserva.create({
            data: {
                usuario_id: req.usuarioId,
                mesa_id: parseInt(mesa_id),
                data: dataISO,
                n_pessoas: parseInt(n_pessoas)
            }
        });

        return res.status(200).json({
            message: 'Reserva bem sucedida!',
            error: false,
            reserva
        });
    }
}

export { ReservaController };