/**
 * 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar: 
 * 
 * Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
    n = 7

   *
  * *
 *   *
*******

 */
/*
    6- Faça um programa que diz se um número definido numa variável é primo ou não.

    Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer 
    outros números dá resto diferente de zero.
    
    Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; 
    Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.
*/

let num = 67;
let count = 0;
for (i = 0; i <= num; i++) {
    if ((num % i) === 0) {
        count = count + 1;
    };
};
    if (count > 2) {
        console.log('O número: ' + num + ' NÃO é primo');
    } else {
        console.log('O número: ' + num + ' é primo');
    };