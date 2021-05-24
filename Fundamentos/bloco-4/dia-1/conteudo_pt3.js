let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console
console.log("A variável patientId é do tipo: " + typeof patientId);
console.log("A variável isEnrolled é do tipo: " + typeof isEnrolled);
console.log("A variável patientInfo é do tipo: " + typeof patientInfo);
console.log("A variável patientEmail é do tipo: " + typeof patientEmail);
console.log("A variável patientAge é do tipo: " + typeof patientAge);

patientId = '50';

console.log("A variável patientId com NOVO VALOR é do tipo: " + typeof patientId);
console.log('');
/*  Vamos fazer algumas operações simples para encontrarmos a área e o perímetro de um retângulo de base 5 e altura 8.

    Crie uma variável chamada base e uma variável chamada altura e atribua os seus respectivos valores: 5 e 8;
    Crie uma variável chamada area e atribua a ela o resultado da multiplicação da base pela altura. 
    Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
    
    Crie uma variável chamada perimetro e atribua a ela a soma de todos os lados do retângulo;

*/

console.log('Exercício Retângulo');

let base = 5;
let altura = 8;
let area = 0;
let perimetro = 0;

area = base * altura;
perimetro = base + altura;

console.log('> Base: ' + base);
console.log('> Alutra: ' + altura);
console.log('A área do retângulo é: ' + area);
console.log('O perímetro do retângulo é: ' + perimetro);