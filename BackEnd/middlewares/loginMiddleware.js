import jwt from 'jsonwebtoken';

function loginMiddleware(req, res, next) {
    const authHeader = req.headers['authorization'];
    
    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            message: 'É necessário fazer login!',
            error: true
        });
    }
    
    jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
        if (err) {
            return res.status(401).json({
                message: 'Token inválido!',
                error: true
            })
        }

        req.usuarioId = payload.id;
        next();
    });

}

export default loginMiddleware;