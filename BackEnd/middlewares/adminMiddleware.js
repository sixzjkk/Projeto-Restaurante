import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

async function adminMiddleware(req, res, next) {
    if (!req.usuarioId) {
        return res.status(401).json({
            message: 'É necessário fazer login!',
            error: true
        });
    }

    const usuario = await client.usuario.findUnique({
        where: {
            id: req.usuarioId
        }
    });

    if (!usuario || usuario.tipo != 'adm') {
        return res.status(403).json({
            message: 'Acesso negado!',
            error: true
        });
    }

    next();
}

export default adminMiddleware;