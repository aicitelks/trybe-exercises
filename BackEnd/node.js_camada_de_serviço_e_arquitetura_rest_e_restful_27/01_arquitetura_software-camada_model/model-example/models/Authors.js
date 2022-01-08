// models/Author.js

const connection = require('./connection');

// Cria uma string com o nome completo do autor
const getFullNameAuthor = (first_name, middle_name, last_name) => {

  // Note que `Boolean` é uma função que recebe um parâmetro e retorna true ou false
  // nesse caso, se middle_name for `undefined` ou uma string vazia o retorno será `false`
  const fullName = [first_name, middle_name, last_name]
    .filter(Boolean)
    .join(' ');

  return fullName;
};

// Converte o nome dos campos de snake_case para camelCase
const serialize = ({ id, first_name, middle_name, last_name }) => ({
  id,
  firstName: first_name,
  middleName: middle_name,
  lastName: last_name,
  fullName: getFullNameAuthor(first_name, middle_name, last_name),
});

// NOTE: Utilizaremos essas duas funções serialize e getFullNameAuthor nessa aplicação em todos os momentos que precisarmos gerar um objeto com propriedades em camelCase a partir de um objeto em snake_case , e para gerar uma string contendo o fullName da pessoa autora. 

// A função getFullNameAuthor recebe os dados brutos e transforma na informação que queremos, o nome completo da pessoa autora! Com isso não modificamos em nada nosso getAll , assim desacoplando a necessidade dela conhecer outras funções além da serialize. 

// Busca todos os autores do banco.
const getAll = async () => {
  /**
   * O model Author exporta uma função getAll
   * Essa função retornará todos os escritores cadastrados no banco de dados. 
   * Utilizamos o método execute para fazer uma query mysql como já estamos acostumados. Esse método retorna uma Promise que quando resolvida, nos fornece um array com 2 campos: [rows, fields] . Na primeira posição desse array temos a resposta que desejamos (no caso os authors ) e na segunda posição vêm algumas informações extras sobre a query que não iremos utilizar. 
   * Usando o array destructuring [authors], obtemos o retorno da primeira posição.
   */
  const [authors] = await connection.execute( // o método execute() permite executar uma query no BD
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
  );
  return authors.map(serialize);
};

module.exports = {
  getAll, // função que retorna todos os autores do banco
};