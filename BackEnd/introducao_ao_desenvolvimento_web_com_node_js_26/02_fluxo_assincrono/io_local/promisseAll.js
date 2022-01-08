const fs = require('fs').promises;

const file1 = '02_fluxo_assincrono/io_local/meu-arquivo.txt';
const file2 = '02_fluxo_assincrono/io_local/meu-arquivo2.txt';
const file3 = '02_fluxo_assincrono/io_local/meu-arquivo-teste.txt';

Promise.all([
  fs.readFile(file1),
  fs.readFile(file2),
  fs.readFile(file3),
])
  .then(([file1, file2, file3]) => {
    const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
    console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivos: ${err.message}`);
  });

// estamos lendo os três arquivos ao mesmo tempo, e nosso .then será executado quando a leitura de todos eles terminar, recebendo como parâmetro um array com o resultado de cada uma das Promises.
