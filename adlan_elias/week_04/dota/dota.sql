CREATE TABLE dota (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  type TEXT,
  image TEXT
);

-- seeds
INSERT INTO dota (name, type) VALUES ('Abaddon', 'Strength');
