const Joi = require('joi');
const ValidationError = require('../errors/validation.error');

const schema = Joi.object({
    email: Joi.string()
        .email()
        .required().error(new ValidationError(401, 'All fields must be filled')),
    password: Joi.string()
        .required().error(new ValidationError(401, 'All fields must be filled')),
});

module.exports = async (req, res, next) => {
    const options = {
        abortEarly: true,
        allowUnknown: true,
        stripUnknown: true,
        errors: {
            label: false,
        },
    };

    try {
        req.body = await schema.validateAsync(req.body, options);
        next();
    } catch (error) {
        next(error);
    }
};