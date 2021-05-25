/**
 * 
    Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

    Array de teste: [2, 3, 6, 7, 10, 1]; .
    Valor esperado no retorno da função: 4 .
 */


let arrayTeste = [2, 3, 6, 7, 10, 1];
let aux = 0;
let maiorNum = 0;
let maiorIndice = 0;

// Função deve receber como parâmetro o array
function retornarMaiorIndice(array) {
    for (let index = 0; index < array.length; index += 1) {
        aux = arrayTeste[index];
        for (let i of arrayTeste) {
            if (aux < i) {
                maiorNum = i;
            }
        }
    }
    //Consultado - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    //indexOf(elemente a ser pesquisado, pontoInicialDoIndice)
    maiorIndice = arrayTeste.indexOf(maiorNum, 0);
    return maiorIndice;
}

let resultado = retornarMaiorIndice(arrayTeste);
console.log(resultado);

