const express = require('express');
const BodyParser = require('body-parser');
const errorHandlerMiddleware = require('./middlewares/error.handler.middleware');
const userRoutes = require('./routes/user.routes');
const loginRoutes = require('./routes/login.routes');
const recipeRoutes = require('./routes/recipe.routes');

const app = express();

app.use(BodyParser.json());

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.use('/users', userRoutes);
app.use('/login', loginRoutes);
app.use('/recipes', recipeRoutes);

app.use(errorHandlerMiddleware);

module.exports = app;
