/*
    1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo: 
    
    n = 5

    *****
    *****
    *****
    *****
    *****
*/

// Linha será igual a n
// Coluna será igual a n

let n = 3;
let asterisco = '*';
let linha = '';
//let coluna = '';

console.log('Exercício 1');

for (let index = 1; index <= n; index += 1) {
    linha = linha + asterisco;
};

for (let index = 1; index <= n; index += 1) {
    console.log(linha);
};


/*
    Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo: 
    n = 5

    *
    **
    ***
    ****
    *****
*/

let linha2 = '';

console.log('Exercício 2');

for (let index = 1; index <= n; index += 1) {
    linha2 = linha2 + asterisco;
    console.log(linha2);
}
