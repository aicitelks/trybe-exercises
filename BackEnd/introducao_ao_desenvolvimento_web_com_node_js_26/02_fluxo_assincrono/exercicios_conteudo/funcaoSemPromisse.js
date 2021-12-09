// Exemplo 1 - Trantando função de forma SÍNCRONA

function dividirNumeros(num1, num2) {
  // throw é uma função que retornar erros
  if (num2 == 0) throw new Error("Não pode ser feito uma divisão por zero");

  return num1 / num2;
}

// utilizado para tratar o caso de sucesso na chamada da função
try {
  const resultado = dividirNumeros(2, 0);
  console.log(`resultado: ${resultado}`);

  // utilizado para tratar o caso de erro na chamada da função
} catch (e) {
  console.log(e.message);
}