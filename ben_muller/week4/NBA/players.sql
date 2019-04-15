CREATE TABLE players (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT,
  last_name TEXT,
  nickname TEXT,
  team TEXT,
  ppg FLOAT,
  rpg FLOAT,
  apg FLOAT,
  games INTEGER,
  image TEXT
);

--Seed

INSERT INTO players (first_name,last_name,nickname,team,ppg,rpg,apg,games,image) VALUES ('Kobe','Bryant','Black Mamba','Los Angeles Lakers',25.00,5.20,4.70,1346,'https://d2cwpp38twqe55.cloudfront.net/req/201902151/images/players/bryanko01.jpg');