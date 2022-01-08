// models/Author.js

const connection = require('./connection');

/** **************************** MySQL **************************** */
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

// A função getFullNameAuthor recebe os dados brutos e transforma na informação que queremos, o nome completo da pessoa autora! Com isso não modificamos em nada nosso getAllMySQL, assim desacoplando a necessidade dela conhecer outras funções além da serialize. 


// Busca todos os autores do banco.
const getAllMySQL = async () => {
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

/** **************************** MONGODB **************************** */

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName].filter((name) => name).join(" ");

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName
  }
};
// Busca todos os autores do banco.
/** 
 *  Ela busca no banco todos os escritores, faz um mapeamento para o formato de objeto que definimos para Author e retorna uma Promise 
 * no authors.map utiliza um destructure de objeto, porque o MongoDB devolve  um objeto para cada documento encontrado. 
 *  A API que o pacote mongodb oferece é bem semelhante à que usamos no cliente do MongoDB, com pequenas mudanças. Em vez de fazer db.authors.find() , por exemplo, precisamos fazer db.collection('authors').find() . 
 * Além de find , você pode utilizar outros métodos conhecidos, como findOne , insertMany e updateMany .

 * Nota : o método toArray converte o cursor retornado pelo método find em um array de documentos;
*/
const getAll = async () => {
  return connection()
    .then((db) => db.collection('authors').find().toArray())
    .then((authors) =>
      authors.map(({ _id, firstName, middleName, lastName }) =>
        getNewAuthor({
          id: _id,
          firstName,
          middleName,
          lastName,
        })
      )
    );
}

// alterar para uma dessas funções a sua chamada no index.js e mudar a conexão
module.exports = {
  getAllMySQL, // função que retorna todos os autores do banco MySQL
  getAll, // função que retorna todos os autores do banco MONGODB
};