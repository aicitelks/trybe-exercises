/**
    1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

    Exemplo de palíndromo: arara .
    verificaPalindrome('arara') ;
    Retorno esperado: true
    verificaPalindrome('desenvolvimento') ;
    Retorno esperado: false

*/

/**
   2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

    Array de teste: [2, 3, 6, 7, 10, 1]; .
    Valor esperado no retorno da função: 4 .
*/

let arrayExer2 = [2, 3, 6, 7, 10, 1];
let aux = 0;
let maiorNum = 0;
let indiceMaiorNum = 0;

// Função deve receber como parâmetro o array
function retornarIndiceMaiorNum(array) {
    for (let index = 0; index < array.length; index += 1) {
        aux = arrayExer2[index];
        //FOR OF traz os valores do array (FOR IN traz os indices do array)
        for (let i of arrayExer2) {
            if (aux < i) {
                maiorNum = i;
            }
        }
    }
    //Consultado - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    //indexOf(elemente a ser pesquisado, pontoInicialDoIndice)
    indiceMaiorNum = arrayExer2.indexOf(maiorNum, 0);
    return indiceMaiorNum;
}

let resultado = retornarIndiceMaiorNum(arrayExer2);
//console.log('O maior número do array é [' + maiorNum + '] e o seu índice é (' + resultado + ')');
console.log('EXERCÍCIO 2');
console.log(resultado);
console.log('');

/**
    3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

    Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
    Valor esperado no retorno da função: 6 .
*/

let arrayExer3 = [2, 4, 6, 7, 10, 0, -3];

function retornarIndiceMenorNum(parametro) {
    for (let iMenor of parametro) {
        auxMenor = iMenor;
        for (let z of parametro) {
            if (auxMenor > z) {
                menorNum = z;
            }
        }
    }
    indiceMenorNum = arrayExer3.indexOf(menorNum, 0);
    return indiceMenorNum;
}
let resultadoIndiceMenorNum = retornarIndiceMenorNum(arrayExer3);
console.log('EXERCÍCIO 3');
console.log(resultadoIndiceMenorNum);
console.log('');

/**
    4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

    Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
    Valor esperado no retorno da função: Fernanda .
*/

/**
    5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

    Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
    Valor esperado no retorno da função: 2 .
*/

/**
    6. Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

    Valor de teste: N = 5 .
    Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
*/

/**
    7. Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

    Valor de teste: 'trybe' e 'be'
    Valor esperado no retorno da função: true
    verificaFimPalavra('trybe', 'be') ;
    Retorno esperado: true
    verificaFimPalavra('joaofernando', 'fernan') ;
    Retorno esperado: false
*/