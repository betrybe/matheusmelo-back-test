const recipe = require('../../models/recipe');

exports.execute = async (id = null) => {
    if (id !== null) {
        return recipe.findById(id);
    }
    return recipe.findAll();
};
