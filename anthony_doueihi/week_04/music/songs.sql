CREATE TABLE songs(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  artist_id INTEGER,
  album_id INTEGER
);

INSERT INTO songs (title, artist_id, album_id) VALUES ('Kill This Love', 1, 1);
INSERT INTO songs (title, artist_id, album_id) VALUES ('Dont Know What to Do', 1, 1);
INSERT INTO songs (title, artist_id, album_id) VALUES ('Kick It', 1, 1);
INSERT INTO songs (title, artist_id, album_id) VALUES ('Hope Not', 1, 1);
INSERT INTO songs (title, artist_id, album_id) VALUES ('Ddu-Du Ddu-Du (Remix)', 1, 1);
