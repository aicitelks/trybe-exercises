-- 1. Utilizando a tabela sakila.payment , 
-- monte uma function que retorna a quantidade total de pagamentos 
-- feitos até o momento por um determinado customer_id .

USE sakila;

DELIMITER $
CREATE FUNCTION CountPayments(customer_id INT)
	RETURNS INT 
	READS SQL DATA
BEGIN
	DECLARE total_payments INT;

    SELECT COUNT(*)
    FROM payment AS P
    WHERE P.customer_id = customer_id
    INTO total_payments;

    RETURN total_payments;
END $$
DELIMITER ;

-- SELECT * FROM payment;
-- SELECT CountPayments(2);

-- 2. Crie uma function que, dado o parâmetro de entrada inventory_id , 
-- retorna o nome do filme vinculado ao registro de inventário com esse id. 

SELECT * FROM inventory;

DELIMITER $$
CREATE FUNCTION GetFilmTitleByInventoryID(id INT)
	RETURNS VARCHAR(200)
    READS SQL DATA
BEGIN
	DECLARE film_title VARCHAR(200);

	SELECT F.title
	FROM inventory AS I
	INNER JOIN film AS F
	ON I.film_id = F.film_id
	WHERE I.inventory_id = 10
    INTO film_title;
    
    RETURN film_title;
END $$
DELIMITER ;

-- SELECT GetFilmTitleByInventoryID(10);

-- 3. Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' )
-- e retorna a quantidade total de filmes registrados nessa categoria.
DELIMITER $$
CREATE FUNCTION GetTotalFilmByCategory(category_name VARCHAR(200))
	RETURNS INT
    READS SQL DATA
BEGIN
	DECLARE total_films INT;

	SELECT COUNT(FC.film_id)
	FROM category AS C
	INNER JOIN film_category AS FC
	ON C.category_id = FC.category_id
	WHERE C.`name` = category_name
    INTO total_films;

    RETURN total_films;
END $$
DELIMITER ;

-- SELECT GetTotalFilmByCategory('Action');