const createRecipeService = require('../services/recipe/create.recipe.service');

exports.create = async (request, response) => {
    const { name, ingredients, preparation } = request.body;
    const recipe = await createRecipeService.execute(
        name, ingredients, preparation, request.userId,
    );
    return response.status(201).json({ recipe });
};
