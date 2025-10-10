import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

async function adminMiddleware(req, res, next) {
    if (!req.userId) {
        return res.status(401).json({
            message: 'Login required!',
            error: true
        });
    }

    const user = await client.user.findUnique({
        where: {
            id: req.userId
        }
    });

    if (!user || user.type != 'adm') {
        return res.status(403).json({
            message: 'Access denied!',
            error: true
        });
    }

    next();
}

export default adminMiddleware;