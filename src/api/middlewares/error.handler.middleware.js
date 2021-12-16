const AppError = require('../errors/app.error');
/**
 * Middleware que trata todos os erros lançados
 * 
 * @param {Error} error 
 * @param {*} _request 
 * @param {*} response 
 * @param {*} _next 
 * @returns 
 */
module.exports = (
    error,
    _request,
    response,
    _next,
) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            message: error.message,
        });
    }

    return response.status(500).json({
        message: error.message,
    });
};