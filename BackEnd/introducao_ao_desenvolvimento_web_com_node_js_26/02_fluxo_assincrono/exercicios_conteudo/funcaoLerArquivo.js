const fs = require('fs');
const arquivo = '02_fluxo_assincrono/file.txt';

function readFilePromise(file) {
  return new Promise((resolve, reject) => {

    fs.readFile(file, (err, content) => {
      if(err) return reject(err);

      resolve(content);
    });

  });
}

readFilePromise(arquivo)
  .then((content) => {
    console.log(`Arquivo com ${content.byteLength} bytes, lido com sucesso!`);
  })
  .catch((err) => {
    console.log(`Erro: "${err.message}" ao tentar o arquivo`);
  });