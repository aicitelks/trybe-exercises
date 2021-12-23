const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const authMiddleware = require('./auth-middleware');

// Esta rota não passa pelo middleware de autenticação!
app.get('/open', function (req, res) {
  res.send('Estou sendo mostrada sem passar pela autenticação!')
});

// Esta rota passa pelo middleware de autenticação!
app.get('/close', authMiddleware, function (req, res) {
  res.send('closed!')
});

const recipesRouter = require('./recipesRouter');

/* Todas as rotas com /recipes/<alguma-coisa> entram aqui e vão para o roteador. */
/* OU SEJA, O MIDDLEWARE 'ROUTER' SERÁ EXECUTADO PARA QUALQUER ROTA QUE COMECE COM /recipes */
app.use('/recipes', recipesRouter);

// QUANDO UMA ROTA NÃO EXISTE
app.all('*', function (req, res) {
    return res.status(404).json({ message: `Rota '${req.path}' não existe!` });
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});