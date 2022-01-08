const express = require('express');

// cria uma nova aplicação express
const app = express(); // 1

// informa ao express que quando uma requisição com o método GET for feita no caminho '/hello', a função 'handleHelloWorldRequest' deve ser chamada
app.get('/hello', handleHelloWorldRequest); // 2

// configura o express para que ele crie um servidor HTTP e escute requisições na porta 3001
// listen(port, callback) 
app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3

// Ao tratar uma requisição com método GET no caminho /hello , enviar o status HTTP 200 que significa OK e a mensagem "Hello world!". Ou seja, a função responde com o status 200 e envia a mensagem
function handleHelloWorldRequest(req, res) {
  res.status(200).send('Hello World! Oi! Você conseguiu e está tudo certo até aqui'); // 4
}
