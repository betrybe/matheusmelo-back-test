const user = require('../../models/user');
const ValidationError = require('../../errors/validation.error');
/**
 * Check if an e-mail is already used by other user
 * 
 * @param {string} email 
 */
exports.execute = async (email) => {
    const result = await user.findByEmail(email);
    if (result != null) {
        throw new ValidationError(409, 'Email already registered');
    }
    return email;
};
