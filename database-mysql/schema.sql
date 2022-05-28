DROP DATABASE milk;
CREATE DATABASE milk;

USE milk;
CREATE TABLE fournisseur (
    id int NOT NULL AUTO_INCREMENT,
    firstname varchar(350) NOT NULL,
    lastname varchar(350) NOT NULL,
    email varchar(350) NOT NULL,
    phonenumber int NOT NULL,
    adress varchar(350) NOT NULL,
    image varchar(350) NOT NULL,
    password varchar(350) NOT NULL,
    PRIMARY KEY (ID)
);	

CREATE TABLE reception (
    id int NOT NULL AUTO_INCREMENT,
    firstname varchar(350) NOT NULL,
    lastname varchar(350) NOT NULL,
    email varchar(350) NOT NULL,
    phonenumber int NOT NULL,
    adress varchar(350) NOT NULL,
    image varchar(350) NOT NULL,
    password varchar(350) NOT NULL,
    PRIMARY KEY (ID)
);	

CREATE TABLE analyse (
    id int NOT NULL AUTO_INCREMENT,
    firstname varchar(350) NOT NULL,
    lastname varchar(350) NOT NULL,
    email varchar(350) NOT NULL,
    phonenumber int NOT NULL,
    adress varchar(350) NOT NULL,
    image varchar(350) NOT NULL,
    password varchar(350) NOT NULL,
    PRIMARY KEY (ID)
);

CREATE TABLE facture (
    id int NOT NULL AUTO_INCREMENT,
    firstname varchar(350) NOT NULL,
    lastname varchar(350) NOT NULL,
    email varchar(350) NOT NULL,
    phonenumber int NOT NULL,
    adress varchar(350) NOT NULL,
    image varchar(350) NOT NULL,
    password varchar(350) NOT NULL,
    PRIMARY KEY (ID)
);	

CREATE TABLE admin (
    id int NOT NULL AUTO_INCREMENT,
    firstname varchar(350) NOT NULL,
    lastname varchar(350) NOT NULL,
    email varchar(350) NOT NULL,
    password varchar(350) NOT NULL,
    PRIMARY KEY (ID)
);

-- CREATE TABLES 

CREATE TABLE collier (
    id int NOT NULL AUTO_INCREMENT,
    code int NOT NULL,
    PRIMARY KEY (ID)
)

-- CREATE TABLE criteria (
--     temperature
--     densite
--     matiere 
--     waterPercent
--     acidity
--     ph 
--     alcohol
-- )



/*  Execute this file from the command line by typing:
 *    mysql -u root -p < database-mysql/schema.sql
 *  to create the database and the tables.*/