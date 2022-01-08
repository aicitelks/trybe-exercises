const readline = require('readline-sync');

console.log('Hello World!');
console.log('Deus seja louvado. Amém!');

const name = readline.question('Qual o seu nome? ');
const age = readline.questionInt('E a sua idade? ');

console.log(`${name} Seja bem-vinda! E parabéns por seus ${age} anos de idade. Saúde!`);