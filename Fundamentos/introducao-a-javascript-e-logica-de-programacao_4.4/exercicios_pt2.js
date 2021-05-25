/**
 * 
    Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

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
 * 
    Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

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