### Schema

CREATE DATABASE furrimal_db;
USE furrimal_db;

CREATE TABLE furrimal_user
(
	id int NOT NULL AUTO_INCREMENT,
	email varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE furrimal_caught
(
	id int NOT NULL AUTO_INCREMENT,
	email varchar(255) NOT NULL,
	type varchar(255) NOT NULL,
	PRIMARY KEY (id)
)

CREATE TABLE furrimal_animal
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	type varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE furrimal_shops
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	code varchar(255) NOT NULL,
	type varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

