const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

function validateName(req, res, next) {
  const { name } = req.body;
  // VALIDA SE O NAME ESTÁ VAZIO, E RETORNA PRA REQUISIÇÃO O STATUS 400 E O JSON COM A MENSAGEM
  if (!name || name === '') return res.status(400).json({ message: 'O name não pode ser vazio!' }); // 1

  // CHAMA O PRÓXIMO MIDDLEWARE
  next(); // 2
}

function validatePrice(req, res, next){
  const { price } = req.body;
  if (typeof price != 'number' || price <= 0)
    return res.status(400).json({ message: 'O preço deve ser numérico e/ou maior que 0' });

  next();
}

app.get('/recipes', function (req, res) {
  res.status(200).json(recipes);
});

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!' });

  res.status(200).json(recipe);
});

app.put('/recipes/:id', validateName, validatePrice, function (req, res) {
  const { id } = req.params;
  const { name, price, waitTime } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price, waitTime };

  res.status(204).end();
});

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

/** UMA ROTA, DOIS MIDDLEWARES */
app.post('/recipes',
  // MIDDLEWARE 1
  validateName,
  validatePrice,
  // MIDDLEWARE 2
  function (req, res) { // 3
    const { id, name, price } = req.body;
    recipes.push({ id, name, price });
    res.status(201).json({ message: 'Recipe created successfully!' });
  }
);

app.all('*', function (req, res) {
    return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});