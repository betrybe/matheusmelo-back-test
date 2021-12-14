const user = require('../../models/user');
/**
 * Create a new user
 * 
 * @param {string} name 
 * @param {string} email 
 * @param {string} password 
 * @param {string} role 
 */
exports.execute = async (name, email, password, role) => {
    const result = await user.insert(
        name, email, password, role,
    );

    return result.ops[0];
};
