const fs = require('fs').promises;

fs.writeFile('02_fluxo_assincrono/io_local/meu-arquivo-teste.txt', 'Meu textão')
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });