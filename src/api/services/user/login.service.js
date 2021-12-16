const jwt = require('jsonwebtoken');
const userModel = require('../../models/user');
const ValidationError = require('../../errors/validation.error');

const SECRET_JWT = 'betrybe';
/**
 * 
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<string>}
 */
exports.execute = async (email, password) => {
    const user = await userModel.findByEmail(email);
    if (user === null || user.password !== password) {
        throw new ValidationError(401, 'Incorrect username or password');
    }

    return jwt.sign({ email }, SECRET_JWT, { expiresIn: '1 days' });
};
