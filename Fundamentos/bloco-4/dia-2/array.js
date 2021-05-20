/* *** EXEMPLOS DO CONTEÚDO ***

/* MOSTRANDO O TAMANHO DO ARRAY

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// 3

/* OBTENDO ATRAVÉS DO ÍNDICE ESPECÍFICO

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

/* ADICIONAR NO FIM OU NO INÍCIO


let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');  // o método .push() adiciona um novo item no final do array
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.unshift('Praticar sempre');  // o método .unshift() adiciona um novo item no começo do array
console.log(tasksList);

// ['Praticar sempre, Tomar café', 'Reunião', 'Brincar com o cachorro']

/* REMOVER A ÚLTIMA POSIÇÃO


let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.pop();  // remove a última tarefa
console.log(tasksList);

// [ 'Tomar café', 'Reunião' ]

/* REMOVER A PRIMEIRA POSIÇÃO


let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.shift();  // remove a última tarefa
console.log(tasksList);

// [ 'Reunião', 'Brincar com o cachorro' ]

/* PROCURAR O ÍDICE DE UM ARRAY ATRAVÉS DO SEU VALOR


let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = tasksList.indexOf('Brincar com o cachorro');
console.log(indexOfTask);

// 2

*/

// EXERCÍCIOS DO CONTEÚDO

// Exercício 1  Obtenha o valor "Serviços" do array menu : 
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices); 

// Exercício 2  Procure o índice do valor "Portfólio" do array menu : 
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

// Exercício 3 Adicione o valor "Contato" no final do array menu : 
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');

console.log(menu);