CREATE TABLE heros (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  description TEXT,
  image TEXT
);

-- seed
INSERT INTO heros (name, description) VALUES ('Abaddon', 'The Lord of Avernus');
