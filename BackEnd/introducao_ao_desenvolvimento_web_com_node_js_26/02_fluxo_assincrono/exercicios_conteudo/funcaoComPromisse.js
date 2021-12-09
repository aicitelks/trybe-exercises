// Exemplo 2 - Trantando função de forma SÍNCRONA

function dividirNumeros(num1, num2) {
  // Promise é uma função que recebe uma callback com dois parâmentros, que também são funções: resolve() e reject()
  const promise = new Promise((resolve, reject) => {
    // definimos o caso de erro dessa promise, rejeitando o erro, usando o reject:
    if (num2 == 0) reject(new Error("Não pode ser feito uma divisão por zero"));

    // caso não hajam erros, o fluxo continua, faz o cálculo
    const resultado = num1 / num2;

    // e retorna o resultado, usando a função resolve para isso
    resolve(resultado)
  });

  // IMPORTANTE: a função dividirNumeros retorna uma promise, que deverá ser tratada quando essa função for chamada
  return promise;
}

// chamando a função e passando os parâmentros, ela é executada
dividirNumeros(18, 1)
  .then((result) => console.log(`sucesso: ${result}`)) // trantando o SUCESSO (resolve)
  .catch((err) => console.log(`erro: ${err.message}`)); // trantando o ERRO (reject)

// then() e catch() são funções, que recebem uma callback. 

// then(() => {});
// O parâmetro da callback do then é o resultado retorna pelo resolve() da Promise

// cath(() => {});
// O parâmetro da callback do catch é o erro retornado pelo reject() da Promise