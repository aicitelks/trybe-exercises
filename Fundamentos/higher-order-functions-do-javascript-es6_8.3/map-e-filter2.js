const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
const expectedResult = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

/* 
  2 - Construa um array de objetos a partir do array de livros. 
  Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, 
  e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. 
  
  O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

  Dica: use as funções map , sort

  [
    {
      author: nome
      age: idade      
    }
  ]
*/

function nameAndAge() {
  // escreva seu código aqui
  const autorIdade = books.map((book) => {

    const informacoesAutor = {
      age: book.releaseYear - book.author.birthYear,
      author: book.author.name
    }
    return informacoesAutor;
  });
  
  return autorIdade.sort((value1, value2) => {
    return value1.age - value2.age;
  });
}

// para testar com o play, sem usar o assert
console.log(nameAndAge());

//assert.deepStrictEqual(nameAndAge(), expectedResult);

// IMPORTANTE! o sort() ordena um array, por isso que ao tentar ordenar o objeto 'informacoesautor' apresenta o erro que o sort() não era uma função, ou seja, ele não conseguia trabalhar como uma função, pois estava atrelado a um objeto e não a um array