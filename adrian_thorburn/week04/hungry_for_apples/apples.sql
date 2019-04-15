CREATE TABLE apples (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  place_of_origin TEXT,
  baking TEXT,
  sweetness INTEGER,
  image TEXT
);


--seed
INSERT INTO apples (name, place_of_origin, baking, sweetness) VALUES ('Gala', 'New Zealand', 'Very Good', 4);
