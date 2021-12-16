const recipe = require('../../models/recipe');
/**
 * Create a new user
 * 
 * @param {string} name 
 * @param {string} ingredients 
 * @param {string} preparation 
 * @param {string} role 
 */
exports.execute = async (name, ingredients, preparation, userId) => {
    const result = await recipe.insert(
        name, ingredients, preparation, userId,
    );

    return result.ops[0];
};
