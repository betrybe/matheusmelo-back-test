const Joi = require('joi');
const ValidationError = require('../errors/validation.error');

const schema = Joi.object({
    name: Joi.string().required(),
    ingredients: Joi.string().required(),
    preparation: Joi.string().required(),
}).error(new ValidationError(400, 'Invalid entries. Try again.'));

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