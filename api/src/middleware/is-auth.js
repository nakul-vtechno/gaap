import jwt from 'jsonwebtoken';

export default function (req, res, next) {
    const authHeader = req.get('Authorization');
    console.log('authHeader: ',authHeader);
    if (!authHeader) {
        const error = new Error('Not authenticated.');
        error.msg = "Not authenticated."
        error.statusCode = 401;
        // throw error;
        return res.status(401).json({ error: error });
    }

    const token = authHeader.split(' ')[1];
    let decodedToken;

    try {
        decodedToken = jwt.verify(token, 'birenderNakul@786');
    } catch (err) {
        err.statusCode = 500;
        err.msg = "Server Error";
        // throw err;
        return res.status(500).json({ error: err });
    }
    if (!decodedToken) {
        const error = new Error('Not authenticated.');
        error.statusCode = 401;
        error.msg = 'Not authenticated.'
        res.status(401).json({ error: error });
        // throw error;
    }
    req.userId = decodedToken.userId;
    next();

}