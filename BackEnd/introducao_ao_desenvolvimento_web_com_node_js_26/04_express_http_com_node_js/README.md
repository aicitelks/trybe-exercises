# Exercícios de conteúdo

- Hello Express
- Recipes

### Primeiros passos para criar uma API HTTP com Express
Criar e acessar a pasta onde ficarão os arquivos:
```
  mkdir nome-da-pasta
  cd nome-da-pasta
```

Inicializar um novo pacote Node.js e instalar o Express:
```
  npm init -y
  npm i express
```

Criar um entrypoint, ou seja, um ponto de partida. Por convenção usa-se 'index.js ':
```
  touch index.js
```

Pronto, já tem o que é necessário para criar uma API HTTP com o Express. 

Para iniciar a aplicação, execute o comando abaixo no diretório da aplicação.
```
  node index.js
```

Depois abra a url http://localhost:3001/NOME-DA-ROTA no navegador para ver a aplicação funcionando.

Para parar a aplicação pressione *CTRL+C* no terminal.

É interessante também seguir os passos a seguir: ```touch .gitignore``` e adicionar nele a pasta ```node_modules```.

## Nodemon
Uma vez que a aplicação estiver rodando novas atualizações não serão aplicadas enquanto a aplicação não for reiniciada. 

Para resolver isso basta utilizar o Nodemon, que fará o restart da aplicação automaticamente, toda vez que salvarmos um arquivo.

```
  npm i nodemon -D
```
O parâmetro -D que indica ao npm que esse pacote deve ser instalado como uma dependência de desenvolvimento.

Abrir o arquivo ```package.json``` e adicionar a seguinte linha:
```
  "scripts": {
    "dev": "nodemon index.js"
  },
```
Agora, para executar a aplicação, utilizar o seguinte comando:
```
  npm run dev
```

**ATENÇÃO**  
O Nodemon deve ser usado apenas o ambiente de desenvolvimento. Para executar uma aplicação em produção, deve-se utilizar o script ```start``` com o comando ```node index.js```.


*#BoraCodar*