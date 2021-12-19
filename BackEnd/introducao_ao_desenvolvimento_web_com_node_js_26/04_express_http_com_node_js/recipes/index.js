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

// ROTA QUE RECEBE DADOS NO body DA REQUISIÇÃO
app.post('/recipes', function (req, res) {
  const { id, name, price } = req.body;

  recipes.push({ id, name, price });

  res.status(201).json({ message: 'Deu certo. Recipe created successfully!' });
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

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});