const createRecipeService = require('../services/recipe/create.recipe.service');
const findRecipeService = require('../services/recipe/find.recipe.service');

exports.create = async (request, response) => {
    const { name, ingredients, preparation } = request.body;
    const recipe = await createRecipeService.execute(
        name, ingredients, preparation, request.userId,
    );
    return response.status(201).json({ recipe });
};

exports.list = async (_request, response) => {
    const recipes = await findRecipeService.execute();
    return response.status(200).json(await recipes.toArray());
};

exports.show = async (request, response) => {
    try {
        const recipe = await findRecipeService.execute(request.params.id);
        if (recipe === null) {
            return response.status(404).json({ message: 'recipe not found' });
        }
        return response.status(200).json(recipe);
    } catch (err) {
        return response.status(404).json({ message: 'recipe not found' });
    }
};
