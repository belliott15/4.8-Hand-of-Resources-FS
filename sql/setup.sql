-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS horcruxes;
DROP TABLE IF EXISTS hobbies;
DROP TABLE IF EXISTS lozgames;
DROP TABLE IF EXISTS houseplants;


CREATE TABLE horcruxes (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL, 
    original_owner VARCHAR NOT NULL,
    house_artifact BOOLEAN NOT NULL,
    sacrifice VARCHAR NOT NULL
);

INSERT INTO horcruxes (
    name,
    original_owner, 
    house_artifact, 
    sacrifice
)
VALUES
('Tom Riddles Diary', 'Tom Riddle', false, 'Myrtle Warren'),
('Marvolo Gaunts Ring', 'Marvolo Gaunt', false, 'Tom Riddle Sr.'),
('Salazar Slytherin locket', 'Salazar Slytherin', true, 'Hepzibah Smith'),
('Huffelpuff Cup', 'Helga Hufflepuff', true, 'Unknown Muggle'),
('Ravenclaw Diadem', 'Rowena Ravenclaw', true, 'Albanian Pesant'),
('Nagini', 'Tom Riddle', false, 'Bertha Jorkins'),
('Harry Potter', 'Harry Potter', false, 'Lily Potter');

CREATE TABLE hobbies (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL, 
    started INT NOT NULL,
    active BOOLEAN NOT NULL
);

INSERT INTO hobbies (
    name,
    started, 
    active
)
VALUES
('Rock Climbing', 2011, true),
('Baking', 2010, false),
('Pole Dance', 2013, true),
('Aerial Silks', 2011, true),
('Hand Balancing', 2014, true),
('Dungeons and Dragons', 2019, false),
('Speech and Debate', 2005, false)
;

CREATE TABLE lozgames (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL, 
    released INT NOT NULL,
    system VARCHAR NOT NULL,
    zelda_present BOOLEAN NOT NULL
);

INSERT INTO lozgames (
    name,
    released, 
    system,
    zelda_present
)
VALUES
('The Legend of Zelda', 1986, 'Famicom Disk System', true),
('Zelda II: The Aventure of Link', 1987, 'Famicon Disk System', true),
('The Legend of Zelda: A Link to the Past', 1991, 'SNES', true),
('The Legend of Zelda: Link’s Awakening', 1993, 'GameBoy', false),
('The Legend of Zelda: Ocarina of Time', 1998, 'Nintendo 64', true),
('The Legend of Zelda: Majora’s Mask', 2000, 'Nintendo 64', false),
('The Legend of Zelda : Oracle of Seasons & Oracale of Ages', 2001, 'GameBoy Color', false),
('The Legend of Zelda: A Link to the Past & Four Swords', 2002, 'GameBoy Advance', false),
('The Legend of Zelda: The Wind Waker ', 2002, 'GameCube', true),
('The Legend of Zelda: Four Swords Adventure', 2004, 'GameCube', false),
('The Legend of Zelda: The Minish Cap', 2004, 'GameBoy Advance', true),
('The Legend of Zelda: Twilight Princess', 2006, 'GameCube', true),
('The Legend of Zelda: Phantom Hourglass', 2007, 'Nintendo DS', false),
('The Legend of Zelda: Spirit Tracks', 2009, 'Nintendo DS', true),
('The Legend of Zelda: Skyward Sword', 2011, 'Nintendo Wii', true),
('The Legend of Zelda: A Link Between Worlds', 2013, 'Nintendo 3DS', true),
('The Legend of Zelda: Tri Force Heroes', 2015, 'Nintendo 3DS', false),
('The Legend of Zelda: Breath of the Wild', 2017, 'Nintendo Switch', true)
;


CREATE TABLE houseplants (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL, 
    age INT NOT NULL,
    species VARCHAR NOT NULL,
    alive BOOLEAN NOT NULL
);

INSERT INTO houseplants (
    name,
    age, 
    species,
    alive
)
VALUES
('ZZ Plant', 5 , 'Zamioculcas zamiifolia', true),
('Prayer Plant', 5, 'Maranta Leuconeura', true),
('Bird of Paradise', 4, 'Strelitzia reginae', true),
('Rubber Tree', 3, 'Ficus Elastica', false),
('Neon Pothos', 3, 'Epipremnum aureum neon', true),
('Jade Tree', 4, 'Crassula ovata', true),
('Majesty Palm', 1, 'Ravenea rivularis', false),
('Peace Lilly', 2, 'Spathiphyllum', true)
;
