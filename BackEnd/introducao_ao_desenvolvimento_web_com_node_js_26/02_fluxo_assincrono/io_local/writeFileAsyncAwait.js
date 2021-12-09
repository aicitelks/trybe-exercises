const fs = require('fs').promises;

// foi necessário criar essa função assíncrona, pois o await só trabalha dentro de funções assim
async function main() {
  // trantando o sucesso
  try {
    // não esquecer de colocar o await antes da função
    await fs.writeFile('02_fluxo_assincrono/io_local/meu-arquivo-teste.txt', 'Meu textão, async/await');
    console.log('Arquivo escrito com sucesso!');
  
    // trantando o erro
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main()