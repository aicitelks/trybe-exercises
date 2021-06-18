const fatorial = numero => {

  let resultado = numero;

  for (let index = 1; index < numero; index += 1) {
    resultado = resultado * index;
  }
  return resultado
}

console.log(`O resultado do fatorial é: ${fatorial(4)}`);


// EXERCÍCIO 2


// console.log(frase.split(' '));

let frase = 'Faça um novo futuro. Começe hoje!';
let palavras = frase.split(' ');
let palavrao = '';
// console.log(frase.split(' ')[3].length);

for (let palavraComparativa of palavras) {
  if (palavraComparativa.length > palavrao.length) {
    palavrao = palavraComparativa;
  }
}

console.log(`A maior palavra da frase "${frase}" é: ${palavrao}`);
