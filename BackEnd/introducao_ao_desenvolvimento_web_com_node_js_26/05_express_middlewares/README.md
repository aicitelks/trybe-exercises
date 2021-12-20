# Instruções rápidas

Criar e acessar a pasta onde ficarão os arquivos:
```
  mkdir nome-da-pasta
  cd nome-da-pasta
```

Iniciar um novo pacote Node.js
```
  npm init -y
```

Instalar
```
  npm i express body-parser
  npm i nodemon -D
```

Criar o entrypoint
```
  touch index.js
```

Abrir o arquivo ```package.json``` e adicionar a seguinte linha:
```
  "scripts": {
    "dev": "nodemon index.js"
  },
```

Criar o arquivo e adicionar nele a pasta ```node_modules```:
```
  touch .gitignore
```

Para executar a aplicação:
```
  npm run dev
```