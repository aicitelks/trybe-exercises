// index.js

const express = require('express'); // importa o express

const Author = require('./models/Author');

const app = express(); // inicializa a aplicação

// A essa aplicação, adicionamos uma nova rota GET /authors . E, como já havíamos aprendido anteriormente, passamos uma função que acessa os parâmetros req e res , que chama a função getAll do nosso model , aguarda sua execução e então retorna um JSON com os dados enviados pelo banco. Author retorna uma Promise
app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});