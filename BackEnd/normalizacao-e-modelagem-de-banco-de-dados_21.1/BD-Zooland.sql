# Exercício 1

-- Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. 
-- As informações a serem armazenadas sobre cada animal são:

-- Nome;
-- Espécie;
-- Sexo;
-- Idade;
-- Localização.

-- Cada animal também possui vários cuidadores, e cada cuidador pode ser responsável por 
-- mais de um animal. 
-- Além disso, cada cuidador possui um gerente, sendo que cada gerente pode ser responsável 
-- por mais de um cuidador. 

-- N animal N cuidador
-- N cuidador 1 gerente

CREATE DATABASE IF NOT EXISTS Zooland;

USE Zooland;

CREATE TABLE Animais(
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    especie VARCHAR(100) NOT NULL,
    sexo CHAR(1) NOT NULL,
    idade INT NOT NULL,
    localizacao VARCHAR(200) NOT NULL
);

CREATE TABLE Gerentes(
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100)
);

CREATE TABLE Cuidadores(
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES Gerentes (gerente_id)
);

CREATE TABLE CuidadoresAnimais(
	cuidador_id INT NOT NULL,
    animal_id INT NOT NULL,
    FOREIGN KEY (cuidador_id) REFERENCES Cuidadores (cuidador_id),
    FOREIGN KEY (animal_id) REFERENCES Animais (animal_id),
    CONSTRAINT PRIMARY KEY (cuidador_id, animal_id)
);

INSERT INTO Animais (nome, especie, sexo, idade, localizacao)
VALUES
('Cavalo de Fogo', 'Horse', 'M', 18, 'Heartland'),
('Ventania', 'Horse', 'M', 15, 'Greyschool'),
('Spirit', 'Horse', 'M', 11, 'Campo');