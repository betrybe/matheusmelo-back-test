const ApiError = require('./api.error');

module.exports = class ValidationError extends ApiError {
    constructor(statusCode, nameField, ...params) {
        super(...params);
        this.statusCode = statusCode;
        this.nameField = nameField;
    }
};