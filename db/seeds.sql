INSERT INTO furrimal_user (email) VALUES ('example@live.com');
INSERT INTO furrimal_animal (name, animalType) VALUES ('Coffee Dragon', 'Cafe');
INSERT INTO furrimal_caught (userId, animalId) VALUES (1, 1);
INSERT INTO furrimal_shops (name, code, animalId) VALUES ('Gloria Jeans Coffee', 1234, 1);


-- SELECT * 
-- FROM furrimal_db.furrimal_shops

-- SELECT * 
-- FROM furrimal_db.furrimal_user
-- JOIN furrimal_db.furrimal_animal
-- ON furrimal_user.animalId = furrimal_animal.animalId; 
