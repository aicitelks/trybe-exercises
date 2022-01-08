// index.js 

const express = require('express'); // importa o express
const bodyParser = require('body-parser');
const Author = require('./models/Authors');

const app = express(); // inicializa a aplicação
app.use(bodyParser.json()); // transforma o que vem do body empacotado em um JSON para ser usado pela aplicação

// A essa aplicação, adicionamos uma nova rota GET /authors . E, como já havíamos aprendido anteriormente, passamos uma função que acessa os parâmetros req e res , que chama a função getAll do nosso model , aguarda sua execução e então retorna um JSON com os dados enviados pelo banco. Author retorna uma Promise
app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
      return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso! '});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});