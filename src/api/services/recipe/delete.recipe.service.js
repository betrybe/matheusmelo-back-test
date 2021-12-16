const recipe = require('../../models/recipe');

exports.execute = async (id) => recipe.deleteById(id);
