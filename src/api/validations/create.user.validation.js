const Joi = require('joi');
const ValidationError = require('../errors/validation.error');

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
}).error((error) => error.map((err) => {
    switch (err.code) {
        case 'any.required': case 'string.email':
            return new ValidationError(400, 'Invalid entries. Try again');
        default:
            return err;
    }
}));

module.exports = (req, res, next) => {
    const options = {
        abortEarly: true,
        allowUnknown: true,
        stripUnknown: true,
    };

    const { error, value } = schema.validate(req.body, options);

    if (error) {
        next(error);
    }
    req.body = value;
    next();
};