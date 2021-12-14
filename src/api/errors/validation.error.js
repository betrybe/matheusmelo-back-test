module.exports = class ValidationError extends Error {
    constructor(statusCode, ...params) {
        super(...params);
        this.statusCode = statusCode;
    }
};