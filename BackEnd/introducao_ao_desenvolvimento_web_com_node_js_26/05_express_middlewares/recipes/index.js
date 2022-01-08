/* index.js */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authMiddleware = require('./auth-middleware');
const recipesRouter = require('./recipesRouter');

app.use(bodyParser.json());

/* Todas as rotas com /recipes/<alguma-coisa> entram aqui e vão para o roteador. */
/* OU SEJA, O MIDDLEWARE 'ROUTER' SERÁ EXECUTADO PARA QUALQUER ROTA QUE COMECE COM /recipes */
app.use('/recipes', recipesRouter);

// Esta rota NÃO PASSA pelo middleware de autenticação!
app.get('/open', (req, res) => {
  res.send('Estou sendo mostrada sem passar pela autenticação!')
});

// Esta rota PASSA pelo middleware de autenticação!
app.get('/close', authMiddleware, function (req, res) {
  res.send('Passei pela autenticação!')
});

// QUANDO UMA ROTA NÃO EXISTE
app.all('*', function (req, res) {
    return res.status(404).json({ message: `Rota '${req.path}' não existe!` });
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});