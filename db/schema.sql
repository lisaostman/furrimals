### Schema

CREATE DATABASE furrimal_db;
USE furrimal_db;

CREATE TABLE furrimal_user
(
	userId int NOT NULL AUTO_INCREMENT,
	email varchar(255) NOT NULL,
	PRIMARY KEY (userId)
);

CREATE TABLE furrimal_animal
(
	animalId int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	animalType varchar(255) NOT NULL,
	PRIMARY KEY (animalId)
);


CREATE TABLE furrimal_caught
(
	caughtId int NOT NULL AUTO_INCREMENT,
	userId int,
	animalId int,
	PRIMARY KEY (caughtId),
	FOREIGN KEY (userId) REFERENCES furrimal_user(userId),
    FOREIGN KEY (animalId) REFERENCES furrimal_animal(animalId)
);

CREATE TABLE furrimal_shops
(
	shopId int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	code varchar(255) NOT NULL,
	animalId int,
	PRIMARY KEY (shopId),
	FOREIGN KEY (animalId) REFERENCES furrimal_animal(animalId)
);

CREATE TABLE furrimal_friends
(
	friendId int NOT NULL AUTO_INCREMENT,
	firstFriend int,
	secondFriend int,
	PRIMARY KEY (friendId),
	FOREIGN KEY (firstFriend) REFERENCES furrimal_user(userId),
	FOREIGN KEY (secondFriend) REFERENCES furrimal_user(userId)
);
