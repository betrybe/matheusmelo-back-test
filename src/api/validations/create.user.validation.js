const Joi = require('joi');
const ValidationError = require('../errors/validation.error');
const checkEmailUniqueService = require('../services/user/check.email.unique.service');

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required().external(checkEmailUniqueService.execute),
    password: Joi.string().required(),
}).error((error) => error.map((err) => {
    switch (err.code) {
        case 'any.required': case 'string.email':
            return new ValidationError(400, 'Invalid entries. Try again');
        case 'any.custom':
            return err.local.error;
        default:
            return err;
    }
}));

module.exports = async (req, res, next) => {
    const options = {
        abortEarly: true,
        allowUnknown: true,
        stripUnknown: true,
    };

    try {
        req.body = await schema.validateAsync(req.body, options);
        next();
    } catch (error) {
        next(error);
    }
};