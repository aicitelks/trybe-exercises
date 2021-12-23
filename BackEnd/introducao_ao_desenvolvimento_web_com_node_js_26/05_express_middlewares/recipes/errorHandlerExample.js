/* errorHandlerExample.js */

/* TESTANDO
* Para testar, execute essa nova API com o comando node errorHandlerExample.js e faça uma requisição para a URL 
* http://localhost:3002/abc
* A requisição vai retornar uma resposta similar a essa: 
* {
*   "error": "Erro: ENOENT: no such file or directory, open './abc'"
* }
* Agora, se você criar o arquivo e jogar o conteúdo, por exemplo, usando o comando: 
* echo 'abc' > abc 
* e fizer a requisição de novo, ela requisição vai retornar uma resposta com o conteúdo do arquivo. 
*/

const express = require('express');
const fs = require('fs/promises');

const app = express();

app.get('/:fileName', async (req, res, next) => {
    try {
        const file = await fs.readFile(`./${req.params.fileName}`);
        res.send(file.toString('utf-8'));
    } catch (e) {
        next(e); // O parâmetro passado para função next, é sempre um indicador que ele vai redirecionar para o middleware de erro
    }
});

app.use(function (err, req, res, next) { 
  res.status(500).json({ error: `Erro: ${err.message}` });
});

app.listen(3002);