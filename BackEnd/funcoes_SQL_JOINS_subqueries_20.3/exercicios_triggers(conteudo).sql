-- 1) Crie um TRIGGER que, a cada nova inserção feita na tabela carros, 
-- defina o valor da coluna data_atualizacao para o momento do ocorrido,
--  a acao para 'INSERÇÃO' e a coluna disponivel_em_estoque para 1 .
DELIMITER $$
CREATE TRIGGER insert_carros
	BEFORE INSERT ON carros
    FOR EACH ROW
BEGIN
	SET
		NEW.data_atualizacao = NOW(),
        NEW.acao = 'INSERÇÃO',
        NEW.disponivel_em_estoque = 1;
END $$
DELIMITER ;

INSERT INTO carros (preco) VALUES (30.000);
SELECT * FROM carros;

DROP TRIGGER insert_carros;
-- Error Code: 1442. Can't update table 'carros' in stored function/trigger 
-- because it is already used by statement which invoked this stored function/trigger.

-- 2) Crie um TRIGGER que, a cada atualização feita na tabela carros , defina o valor da coluna data_atualizacao para o momento do ocorrido e a acao para 'ATUALIZAÇÃO' .

-- 3) Crie um TRIGGER que, a cada exclusão feita na tabela carros , envie para a tabela log_operacoes as informações do tipo_operacao como 'EXCLUSÃO' e a data_ocorrido como o momento da operação.