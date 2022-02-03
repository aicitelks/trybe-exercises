/** Suponha que você quer escrever um programa em JavaScript que faz uma requisição para a API de dad jokes . Assim sendo, você escreve o seguinte código: */// ./dipExample.js

const fetch = require('node-fetch');

const url = 'https://icanhazdadjoke.com';

const requestWithFetch = () => {
  fetch(url, {
    headers: new fetch.Headers({
      Accept: 'application/json',
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data.joke))
    .catch((err) => console.log(err));
};

const getJokes = (numberOfJokes) => {
  for (let i = 0; i < numberOfJokes; i += 1) requestWithFetch();
};

getJokes(5);

module.exports = { getJokes };

/**
 *  Problema resolvido! Mas agora vamos pensar na questão que está nos acompanhando por todo o dia de hoje: como podemos reusar esse código no futuro para outros contextos sem alterar o código que já existe? Olhe para esse nosso exemplo: aí, estamos usando o fetch para fazer uma requisição à API. A função depende do fetch para funcionar. O fetch , portanto, é uma dependência da função! E o que seria, então, a inversão de dependência? Conforme foi dito lá em cima

    Quem usa uma função deve ser capaz de determinar quais outros módulos ela usa em sua lógica.

Em outras palavras, "quem usa decide como se usa". Como assim? Imagine que, no futuro, decide-se abolir o uso de fetch no seu projeto em favor do axios . Não queremos alterar o nosso código antigo (vai que ele quebra 😬), mas código novo deve vir com a API nova.
Só que nós queremos usar a nossa função getJokes numa funcionalidade nova que estamos fazendo, mas sem utilizar o fetch ! Como fazemos? 

Veja no dipExemple2.js
 */