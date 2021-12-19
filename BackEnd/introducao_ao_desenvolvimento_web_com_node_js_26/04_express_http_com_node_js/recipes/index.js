/* index.js */

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// const { read } = require('fs');

// LISTAS
const recipes = [
  { id: 1, name: 'Mingau', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
]; 

// RECEITAS
// Retorna a lista de receitas, quando a requisição é do tipo 'GET'
app.get('/recipes', function (req, res) {
  res.json(recipes);
});

app.get('/recipes/search', function (req, res) {
  const { name, minPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => {
    r.name.includes(name)
    // && r.price < parseInt(maxPrice)
    && r.price >= parseInt(minPrice)
  });
  res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

// DRINKS
app.get('/drinks', (req, res) => {
  res.json(drinks);
});

app.get('/drinks/search', (req, res) => {
  const { name } = req.query;
  const filterDrinks =  drinks.filter((d) => d.name.includes(name)); 

  res.status(200).json(filterDrinks);
});

app.get('/drinks/:idDrink', (req, res) => {
  const { idDrink } = req.params;
  const drink = drinks.find((d) => d.id === parseInt(idDrink));

  // IMPORTANTE sempre usar o 'return' em código que quebra a aplicação, para que o Express interrompa o fluxo e não continue executando o código
  if (!drink) return res.status(404).json({ message: 'Bebida não encontrada' });

  res.status(200).json(drink);
});

// ROTAS QUE RECEBEM DADOS NO body DA REQUISIÇÃO
app.post('/recipes', function (req, res) {
  const { id, name, price, waitTime } = req.body;

  recipes.push({ id, name, price, waitTime });

  res.status(201).json({ message: 'Deu certo. Recipe created successfully!' });
});

app.post('/drinks', (req, res) => {
  const { id, name, price } = req.body;

  drinks.push({ id, name, price });

  res.status(201).json({ message: 'Bebida adicionada.' });
});
// fetch(`http://localhost:3001/recipes/`, {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     id: 4,
//     name: 'Macarrão com Frango',
//     price: 30
//   })
// });

// ROTA QUE VERIFICA SE O TOKEN POSSUI 16 CARACTERES
app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'})

  res.status(200).json({message: 'Valid Token!'})
});

// ROTAS QUE ATUALIZAM UM PRODUTO
app.put('/recipes/:id', function (req, res) {
  const { id } = req.params; // pega da URL
  const { name, price } = req.body; // pega do corpo

  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end(); // neste caso, nada é retornado, apenas o código é informado indicando que deu certo
});

app.put('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const drinkIndex = drinks.findIndex((drink) => drink.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Drink não encontrado' });

  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };

  res.status(200).json({ message: 'Drink atualizado' });
});

// ROTAS QUE DELETAM UM PRODUTO
app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app.delete('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex((d) => d.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Drink não localizado' });

  drinks.splice(drinkIndex, 1);

  res.status(204).end();
});


app.get('/xablau', function (req, res) {
  return res.status(404).json({ message: `Xablau!`});
});

// ROTA QUE NÃO EXISTE
app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

// Requisição do tipo PUT
// fetch(`http://localhost:3001/recipes/2`, {
//   method: 'PUT',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     name: 'Macarrão ao alho e óleo',
//     price: 40
//   })
// });

// // Requisição do tipo DELETE
// fetch(`http://localhost:3001/recipes/4`, {
//   method: 'DELETE',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   }
// });

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});