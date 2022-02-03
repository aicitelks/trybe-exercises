// ./dipExample.js

const axios = require('axios').default;
const fetch = require('node-fetch');

const url = 'https://icanhazdadjoke.com';

const requestWithAxios = () => {
  axios
    .get(url, {
      headers: { Accept: 'text/plain' },
    })
    .then((response) => console.log(response.data));
};

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

const getJokes = (numberOfJokes, jokeRequester = requestWithFetch) => {
  for (let i = 0; i < numberOfJokes; i += 1) jokeRequester();
};

getJokes(5, requestWithAxios);

/**  
 * Repare que, agora, quem chama a função decide qual dependência a função terá , seja o Axios ou o Fetch. E ao colocarmos a requestWithFetch como valor padrão para o parâmetro que acrescentamos à função, garantimos que, em todos os lugares onde essa função já era usada, tudo continuará funcionando. 
 * Isso que fizemos foi a chamada inversão de dependência . 
 * Quem usa decide qual dependência a função terá.
*/

module.exports = { getJokes };