# EXERCÍCIOS DE CONTEÚDO

## Desafios stored procedure
 
Para todos os desafios abaixo, certifique-se de que a função possa ser chamada e o resultado dela seja usado corretamente. Utilize o banco de dados sakila .

1) Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.

2) Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.

3) Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.



It's Trigger Time
Alright, people! Hora de montar uns triggers. 

1) Crie um TRIGGER que, a cada nova inserção feita na tabela carros , defina o valor da coluna data_atualizacao para o momento do ocorrido, a acao para 'INSERÇÃO' e a coluna disponivel_em_estoque para 1 .

2) Crie um TRIGGER que, a cada atualização feita na tabela carros , defina o valor da coluna data_atualizacao para o momento do ocorrido e a acao para 'ATUALIZAÇÃO' .

3) Crie um TRIGGER que, a cada exclusão feita na tabela carros , envie para a tabela log_operacoes as informações do tipo_operacao como 'EXCLUSÃO' e a data_ocorrido como o momento da operação.


## Exercícios de Triggers

1)    Crie um Trigger para INSERT que deve definir o valor do campo release_year da tabela movies como o ano atual de forma dinâmica, sem haver a necessidade de digitar manualmente o valor do ano. Além disso, crie um outro Trigger para INSERT que adiciona um novo registro na tabela movies_logs , informando o movie_id do filme que acaba de ser inserido na tabela movies , a executed_action como 'INSERT' e a log_date como a data atual.

 2)    Crie um Trigger para UPDATE que, ao receber uma alteração na tabela movies , deve comparar o valor anterior de ticket_price com o valor sendo inserido nesta atualização. Caso o valor seja maior que o anterior, insira na coluna ticket_price_estimation o valor de 'Increasing' . Caso contrário, insira o valor 'Decreasing' . Adicionalmente, insira um novo registro na tabela movies_logs , contendo informações sobre o registro alterado ( movie_id , executed_action e log_date ).

3)    Crie um Trigger na tabela movies que, ao ter algum de seus registros excluídos, deve enviar uma informação para a tabela movies_logs , onde devem ser guardados a data da exclusão, a executed_action 'DELETE' e o id do filme excluído.
