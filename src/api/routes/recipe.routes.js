const express = require('express');

const recipeController = require('../controllers/recipe.controller');
const createRecipeValidation = require('../validations/create.recipe.validation');
const AuthMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', AuthMiddleware, createRecipeValidation, recipeController.create);

module.exports = router;