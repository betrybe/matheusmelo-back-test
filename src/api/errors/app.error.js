module.exports = class AppError extends Error {
    constructor(statusCode, ...params) {
        super(...params);
        this.statusCode = statusCode;
    }
};