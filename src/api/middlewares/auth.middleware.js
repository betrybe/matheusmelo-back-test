const jwt = require('jsonwebtoken');
const AuthError = require('../errors/auth.error');

const SECRET_JWT = 'betrybe';
/**
 * Middleware que checa se o usuário está logado
 * 
 * @param {*} request 
 * @param {*} _response 
 * @param {*} next 
 * @returns 
 */
module.exports = (
    request,
    _response,
    next,
) => {
    const authError = new AuthError(401, 'jwt malformed');
    const token = request.headers.authorization;
    if (token == null) {
        return next(authError);
    }
    jwt.verify(token, SECRET_JWT, (err, decoded) => {
        if (err) {
            return next(authError);
        }
        request.userId = decoded.id;
        next();
    });
};