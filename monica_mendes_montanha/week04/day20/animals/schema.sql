CREATE TABLE groups (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  image TEXT
);

CREATE TABLE animals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  group_id INTEGER,
  image TEXT -- URL for a photo of a horse
);