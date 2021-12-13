const ValidationError = require('../../errors/validation.error');

/**
 * @param {string} name 
 * @param {string} email 
 * @param {string} password 
 */
exports.execute = (name, email, password) => {
    throw new ValidationError(400, 'name', 'O campo name é obrigatório');
    //  Todo: Gravar no banco
};
