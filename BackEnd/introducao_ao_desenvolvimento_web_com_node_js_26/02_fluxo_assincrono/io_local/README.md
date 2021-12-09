## Lendo arquivos com métodos síncronos 

Os métodos assíncronos não esperam o comando atual terminar para iniciar o próximo. Se quisermos ler um arquivo de maneira assíncrona, o Javascript não vai esperar o arquivo inteiro ser lido para só então dar continuidade ao script. Se quisermos esse comportamento, precisamos de um método síncrono . O método disponibilizado pelo módulo fs para leitura síncrona de arquivos é o fs.readFileSync.

##  Lendo arquivos com métodos assíncronos

O método fornecido pelo módulo fs para leitura assíncrona de arquivos é o fs.readFile . Na versão padrão do fs , a função readFile aceita um callback, que é chamado quando a leitura do arquivo termina. 

###### Esta pasta contém exemplos sobre eles.