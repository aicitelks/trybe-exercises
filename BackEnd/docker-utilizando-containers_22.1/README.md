 Exercício 1
No Docker Hub , utilizando a caixa de busca ( "Search for great content" ) , busque pela imagem da Distribuição Linux Debian . 

 Exercício 2
Uma vez que encontrar a imagem oficial , acesse-a (clicando em seu card) e verifique na página de detalhes, se existe algum comando para baixarmos a imagem localmente sem ter que criar um container para isso . 
- Ao acessar a página de detalhes, logo de cara, a página já indica o comando git pull <imagem> , esse comando faz apenas o download da imagem, sem o processo de criação e execução do container . 

 Exercício 3
Baixe a imagem utilizando a tag : stable-slim , que é uma versão reduzida da distribuição. 

```docker pull debian:stable-slim```

 Exercício 4
Após baixar a imagem para seu computador local, crie e execute um container no modo interativo utilizando essa imagem como referência (não esqueça referenciar a tag ) . 

```docker container run -it debian:stable-slim```

Obs. trocando o comando ```run``` por ```create```, apenas cria-se o container sem iniciá-lo imediatamente. Esse comando gera um CONTAINER ID, que poderá ser usado para iniciá-lo posteriormente:

```docker container start <CONTAINER ID>```

 Exercício 5
No terminal, você deve conseguir rodar o comando ```cat /etc/*-release``` , que vai retornar os dados da distribuição Debian que está sendo rodada dentro do container . 

 Exercício 6
Encerre o terminal.

```exit```

 Exercício 7
Verifique na sua lista de containers , qual o container é referente ao exercício que acabou de praticar. 

comando abreviado ```docker ps -l``` (para mostrar qual foi o último container criado),
comando completo ```docker container ls -l``` 
coamndo para mostrar todos ```docker container ls -a``` 

 Exercício 8
Inicie o mesmo container novamente , sem criar outro. Valide se ele está ativo na lista de containers. 
comando abreviado ```docker start <CONTAINER ID || NAMES>```

 Exercício 9
Retome o container que foi criado anteriormente nesse exercício . Já que o container foi inicializado anteriormente de modo interativo, pudemos retomar seu terminal. 
```docker attach <CONTAINER ID || NAMES>```

 Exercício 10
Rode o comando ```cat /etc/debian_version``` que deve retornar a versão atual do sistema do container . 

 Exercício 11
Encerre o terminal . 

```exit```

 Exercício 12
Remova somente o container criado para esse exercício .
```docker container rm <CONTAINER ID || NAMES>```
