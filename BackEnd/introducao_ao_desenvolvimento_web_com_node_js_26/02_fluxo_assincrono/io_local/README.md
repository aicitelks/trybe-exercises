## Lendo arquivos com métodos síncronos 
Os métodos assíncronos não esperam o comando atual terminar para iniciar o próximo. Se quisermos ler um arquivo de maneira assíncrona, o Javascript não vai esperar o arquivo inteiro ser lido para só então dar continuidade ao script. Se quisermos esse comportamento, precisamos de um método síncrono . O método disponibilizado pelo módulo fs para leitura síncrona de arquivos é o fs.readFileSync.

##  Lendo arquivos com métodos assíncronos
O método fornecido pelo módulo fs para leitura assíncrona de arquivos é o fs.readFile . Na versão padrão do fs , a função readFile aceita um callback, que é chamado quando a leitura do arquivo termina. 

##  Escrevendo dados em arquivos
Escrever dados em arquivos é um processo bem parecido com a leitura de dados! Assim como o módulo ('fs').promises disponibiliza o método readFile , há também o método writeFile . 

##  Utilizando async/await
Acontece que nem sempre queremos utilizar essa API das Promises. Muitas vezes, queremos simplesmente buscar o resultado e pronto. E é aí que entra o async/await .

Essas duas palavras-chave foram criadas para trabalhar com Promises como se estivéssemos trabalhando com código síncrono.
A questão é que toda função na qual utilizamos async, automaticamente passa a retornar uma Promise, que será rejeitada em caso de erro, e resolvida em caso de sucesso.

O resultado de usarmos async / await é que o código fica com uma sintaxe quase idêntica à sintaxe utilizada para código síncrono. 

###### Esta pasta contém exemplos sobre eles.