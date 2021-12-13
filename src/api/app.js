const express = require('express');
const errorHandlerMiddleware = require('./middlewares/error.handler.middleware');
const userRoutes = require('./routes/user.routes');

const app = express();

app.use(express.json());

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.use('/users', userRoutes);

app.use(errorHandlerMiddleware);

module.exports = app;
