const fs = require('fs');

const nomeDoArquivo = '02_fluxo_assincrono/io_local/meu-arquivo.txt';

try {
  // o método readFileSync é síncrono, logo ele espera a leitura terminar para continuar
  const data = fs.readFileSync(nomeDoArquivo, 'utf8'); // 2o parâmetro é opcional
  console.log(data);
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
} 