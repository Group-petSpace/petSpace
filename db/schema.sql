CREATE DATABASE petspace_db;
USE petspace_db;

CREATE TABLE pets
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
    pet varchar(255) NOT NULL,
	breed varchar(255) NOT NULL,
	age int NOT NULL,
	PRIMARY KEY (id)
);
