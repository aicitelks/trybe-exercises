// models/Author.js

const connection = require('./connection');

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};


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

/** Explicações importantes
 * NOTE: Utilizaremos essas duas funções serialize e getFullNameAuthor nessa aplicação em todos os momentos que precisarmos gerar um objeto com propriedades em camelCase a partir de um objeto em snake_case , e para gerar uma string contendo o fullName da pessoa autora. 
 * 
 * A função getFullNameAuthor recebe os dados brutos e transforma na informação que queremos, o nome completo da pessoa autora! Com isso não modificamos em nada nosso getAllMySQL, assim desacoplando a necessidade dela conhecer outras funções além da serialize.
*/

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

// Busca um autor específico, a partir do seu ID
/** Explicações importantes:  
 * Usamos o where na nossa query para limitar o escopo da busca ao escritor procurado. 
 * No entanto, em vez de passar valores diretamente na string, fazendo interpolação, é uma boa prática separar os valores da query. Fazemos isso usando ? como parâmetros na string e usando, como segundo argumento, um array que contém os valores que devem substituir todos os ? utilizados, na ordem.
*/
const findByIdMySQL = async (id) => {
  // Repare que substituímos o id por `?` na query.
  // Depois, ao executá-la, informamos um array com o id para o método `execute`.
  // O `mysql2` vai realizar de forma segura, a substituição do `?` pelo id informado, isso previne possíveis ataques de sql injection.
  const query = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?'
  const [authorData] = await connection.execute(query, [id]);

  if (authorData.length === 0) return null;

  // Utilizamos [0] para buscar a primeira linha, que deve ser a única no array de resultados, pois estamos buscando por ID.
  return serialize(authorData[0]);
};

// Cria um novo autor no banco
/** Explicações importantes: 
 * Em Values foi utilizado '?' que será substituído por cada item do array (informado como segundo parâmetro da função execute()) na ordem em que consta no array.
 */
const createMySQL = async (firstName, middleName, lastName) => connection.execute(
  'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
  [firstName, middleName, lastName],
);

/** **************************** MONGODB **************************** */
// Faz o tratamento de forma automática, verificando se o parâmentro recebido é mesmo um ID padrão do MongoDB
const { ObjectId } = require('mongodb');

// Função para gerar um novo autor já com o fullname
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
/** Explicações importantes: 
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

// Busca pelo ID
/** Explicações importantes: 
 * Aqui usamos findOne(new ObjectId(id)) , uma sintaxe mais sucinta que podemos empregar quando estamos filtrando
 * documentos pelo campo _id . Também poderíamos usar a versão completa e mais verbosa: findOne({ _id: new ObjectId(id) }) .
 * 
 * Repare também que, na primeira linha da função findById , utilizamos a função isValid do ObjectId . Fazemos isso porque, caso o id informado não seja um ObjectId válido do MongoDB, teremos um erro ao fazer new Object(id) algumas linhas abaixo. 
 * Caso o id não seja um ObjectId válido, retornamos null , que é o mesmo comportamento de quando não encontramos um autor, já que um id inválido, realmente, não encontraria nenhum autor caso enviado ao banco. 
*/
const findById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  // a função connection retorna uma promise
  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(new ObjectId(id)));

  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;

  return getNewAuthor({ id, firstName, middleName, lastName });
};

// Cria um novo autor
/** Explicações importantes: 
 * Outra alteração que fizemos foi fazer com que a função create retorne um novo Author , contendo as informações que acabamos de inserir no banco. 
 * Para obter o ID que acabou de ser criado, utilizamos a propriedade insertedId do resultado da chamada de db.collection('authors').insertOne . 
*/
const create = async (firstName, middleName, lastName) => {
  connection()
    .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }))
    .then(result => getNewAuthor({ id: result.insertedId, firstName, middleName, lastName }));
};


// Usando as funções do MongoDB. São chamadas nas rotas do 'index.js'. (Para usar MySQL alterar a chamada e mudar a conexão)
module.exports = {
  /** FUNÇÕES MYSQL */
  getAllMySQL, // função que retorna todos os autores do banco MySQL
  findByIdMySQL,
  createMySQL,
  /** FUNÇÕES MONGODB */
  getAll, // função que retorna todos os autores do banco MONGODB
  findById,
  create,
  isValid,
};