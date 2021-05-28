/*  EXERCÍCIO 1
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


/*  EXERCÍCIO 2
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

/*  EXERCÍCIO 3
    3- Agora inverta o lado do triângulo. Por exemplo: 
    n = 5

    *
   **
  ***
 ****
*****
Atenção! Note que esse exercício é bem mais complexo que o anterior! 
Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também. 
*/

// Foi consultado o gabarito para o desenvolvimento do  exercício 3!
let linha3 = '';
let posicao = n; // inputPosition

console.log('Exercício 3');

for (let index = 0; index < n; index += 1) {
    for (let index2 = 0; index2 <= n; index2 += 1) {
        if (index2 < posicao) {
            linha3 = linha3 + ' ';
        } else {
            linha3 = linha3 + asterisco;
        }
    }
    console.log(linha3);
    linha3 = '';
    posicao -= 1;
}