/* errorHandlerExpressRescue.js */
// O EXPRESS RESCUE GARANTE QUE ERROS SEJAM SEMPRE TRATADOS

/** Para adicionarmos os express-rescue , basta passarmos o nosso middleware como parâmetro para a função rescue 
 (que importamos do módulo). 
 * Essa função vai gerar um novo middleware que vai fazer o tratameto de erros da middleware sem precisarmos escrever o try/catch.

 O rescue faz a execução do middleware recebido como parâmentro, dentro de um bloco de try/catch, capturando o erro (se houver) e passando ele para a next()
*/
const express = require('express');
const rescue = require('express-rescue');
const fs = require('fs/promises');

const app = express();

app.get(
  '/:fileName',
  rescue(async (req, res) => {
    const file = await fs.readFile(`./${req.params.fileName}`);
    res.send(file.toString('utf-8'));
  })
);

app.use((err, req, res, next) => {
  res.status(500).json({ error: `Erro: ${err.message}` });
});

app.listen(3001);