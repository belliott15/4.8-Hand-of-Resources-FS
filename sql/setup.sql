-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS horcruxes

CREATE TABLE horcruxes (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL, 
    original_owner VARCHAR NOT NULL,
    house_artifact BOOLEAN NOT NULL,
    sacrifice VARCHAR NOT NULL
)

INSERT INTO horcruxes (
    name,
    original_owner, 
    house_artifact, 
    sacrifice
)
VALUES
('Tom Riddles Diary', 'Tom Riddle', false, 'Myrtle Warren'),
('Marvolo Gaunts Ring', 'Marvolo Gaunt', false, 'Tom Riddle Sr.'),
(`Salazar Slytherin's locket`, 'Salazar Slytherin', true, 'Hepzibah Smith'),
(`Huffelpuff's Cup`, 'Helga Hufflepuff', true, 'Unknown Muggle'),
('Ravenclaw Diadem', 'Rowena Ravenclaw', true, 'Albanian Pesant'),
('Nagini', 'Tom Riddle', false, 'Bertha Jorkins'),
('Harry Potter', 'Harry Potter', false, 'Lily Potter'),