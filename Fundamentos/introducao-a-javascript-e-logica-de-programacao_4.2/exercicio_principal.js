/* 
* Aprofunde seus conhecimentos
* Leia atentamente os enunciados e faça o que se pede! Iremos utilizar o array para realizar os exercícios do 1 ao 7: 
* 
    Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
    Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
    Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
        A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
    Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". 
        Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
    Utilizando for , descubra qual o maior valor contido no array e imprima-o;
    Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
    Utilizando for , descubra qual o menor valor contido no array e imprima-o;
    Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
    Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let maiorNum = 0;
let aux = 0;

console.log('Os valores iniciais do Array são: ' + numbers);

for (let index = 0; index < numbers.length; index += 1) {
    soma = soma + numbers[index];
}
console.log('O valor da soma do array é: ' + soma);

let mediaAritmetica = soma / numbers.length;
console.log('O array tem ' + numbers.length + ' posições. Portanto, a média aritmética dele é: ' + mediaAritmetica);

if (mediaAritmetica > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual que 20');
}

for (let index = 0; index < numbers.length; index += 1) {
    maiorNum = numbers[index];
    for (let indexComparativo = numbers.length; indexComparativo > 0; indexComparativo -= 1) {
        aux = numbers[indexComparativo-1];

        if (maiorNum < aux) {
            maiorNum = aux;
        }
    }
}
console.log('O maior número do array é ' + maiorNum);