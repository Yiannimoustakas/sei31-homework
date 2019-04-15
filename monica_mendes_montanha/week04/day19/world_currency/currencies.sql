CREATE TABLE currencies(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  country TEXT,
  name TEXT,
  image TEXT
);

-- seed
INSERT INTO currencies(country, name) VALUES ("Brazil", "Real");

