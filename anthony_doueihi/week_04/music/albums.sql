CREATE TABLE albums(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  image_url TEXT,
  artist_id INTEGER
  --loop through songs to create list in else
);

INSERT INTO albums (name, artist_id) VALUES ('Kill This Love', 1);
