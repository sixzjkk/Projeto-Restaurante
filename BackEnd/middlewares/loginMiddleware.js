import jwt from 'jsonwebtoken';

function loginMiddleware(req, res, next) {
    const authHeader = req.headers['Authorization'];

    if (!authHeader) {
        return res.status(401).json({
            message: 'Login required!',
            error: true
        });
    }

    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
        if (err) {
            return res.status().json({
                message: 'Invalid token!',
                error: true
            })
        }

        req.userId = payload.id;
        next();
    })

}

export default loginMiddleware;