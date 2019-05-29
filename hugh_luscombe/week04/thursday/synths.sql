CREATE TABLE synths (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  brand TEXT,
  polyphony INTEGER,
  image TEXT
);

INSERT INTO synths (name, brand, polyphony) VALUES ('Voyager', 'Moog', '1');
