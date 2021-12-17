/* index.js */
const express = require('express');
const app = express();

// lista de receitas
const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
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

// Retorna a lista de receitas, quando a requisição é do tipo 'GET'
app.get('/recipes', function (req, res) {
  res.json(recipes);
});

app.get('/drinks', (req, res) => {
  res.json(drinks);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});