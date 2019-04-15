CREATE TABLE clothes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    type TEXT,
    subtype TEXT,
    material TEXT,
    size INTEGER,
    color TEXT,
    image TEXT -- url for a photo
);

CREATE TABLE clothestypes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT NOT NULL UNIQUE
);

-- seed data
INSERT INTO clothestypes (type) VALUES ('Shirt');
INSERT INTO clothestypes (type) VALUES ('Pants');
INSERT INTO clothestypes (type) VALUES ('Jacket');
INSERT INTO clothestypes (type) VALUES ('Socks');
INSERT INTO clothestypes (type) VALUES ('Bib');

INSERT INTO clothes (name, type, subtype, material, size, color) VALUES ('Kmart', 'Shirt', 'Tshirt', 'Cotton', 2, 'Red');
INSERT INTO clothes (name, type, subtype, material, size, color) VALUES ('Kmart', 'Shirt', 'Tshirt', 'Cotton', 2, 'Blue');
INSERT INTO clothes (name, type, subtype, material, size, color) VALUES ('BigW', 'Shirt', 'Polo', 'Polyester', 5, 'Blue');
INSERT INTO clothes (name, type, subtype, material, size, color) VALUES ('Peter Alexander', 'Shirt', 'Sweatshirt', 'Cotton', 4, 'White');
INSERT INTO clothes (name, type, subtype, material, size, color) VALUES ('Peter Alexander', 'Shirt', 'Sweatshirt', 'Cotton', 3, 'White');
INSERT INTO clothes (name, type, subtype, material, size, color) VALUES ('Peter Alexander', 'Shirt', 'Sweatshirt', 'Cotton', 5, 'White');
INSERT INTO clothes (name, type, subtype, material, size, color) VALUES ('Old Navy', 'Shirt', 'Sleeveless', 'Cotton', 5, 'White');
INSERT INTO clothes (name, type, subtype, material, size, color) VALUES ('Old Navy', 'Shirt', 'Tshirt', 'Polyester', 3, 'Orange');
INSERT INTO clothes (name, type, subtype, material, size, color) VALUES ('Old Navy', 'Shirt', 'Tshirt', 'Polyester', 3, 'Orange');
INSERT INTO clothes (name, type, subtype, material, size, color) VALUES ('Old Navy', 'Shirt', 'Tshirt', 'Polyester', 4, 'Green');
INSERT INTO clothes (name, type, subtype, material, size, color) VALUES ('Baby Gap', 'Shirt', 'Long-sleeves', 'Cotton', 4, 'Yellow');

INSERT INTO clothes (name, type, subtype, material, size, color) VALUES ('Kmart', 'Pants', 'Shorts', 'Cotton', 6, 'Red');
INSERT INTO clothes (name, type, subtype, material, size, color) VALUES ('Kmart', 'Pants', 'Shorts', 'Polyester', 2, 'Black');
INSERT INTO clothes (name, type, subtype, material, size, color) VALUES ('Target', 'Pants', 'Shorts', 'Polyester', 2, 'Print');
INSERT INTO clothes (name, type, subtype, material, size, color) VALUES ('Target', 'Pants', 'Shorts', 'Polyester', 5, 'Print');
INSERT INTO clothes (name, type, subtype, material, size, color) VALUES ('Kmart', 'Pants', 'Long', 'Denim', 3, 'Blue');
INSERT INTO clothes (name, type, subtype, material, size, color) VALUES ('BigW', 'Pants', 'Long', 'Denim', 5, 'Brown');
INSERT INTO clothes (name, type, subtype, material, size, color) VALUES ('Benetton', 'Pants', 'Long', 'Denim', 5, 'Yellow');
INSERT INTO clothes (name, type, subtype, material, size, color) VALUES ('Benetton', 'Pants', 'Long', 'Denim', 5, 'Brown');
INSERT INTO clothes (name, type, subtype, material, size, color) VALUES ('Old Navy', 'Pants', 'Long', 'Denim', 5, 'Black');
INSERT INTO clothes (name, type, subtype, material, size, color) VALUES ('Old Navy', 'Pants', 'Long', 'Denim', 5, 'Blue');

INSERT INTO clothes (name, type, material, size, color) VALUES ('Guess', 'Jacket', 'Denim', 5, 'Blue');
INSERT INTO clothes (name, type, material, size, color) VALUES ('Old Navy', 'Jacket', 'Cotton', 5, 'Beige');

INSERT INTO clothes (name, type, material, size, color) VALUES ('Bonds', 'Socks', 'Cotton', 5, 'White');
INSERT INTO clothes (name, type, material, size, color) VALUES ('Bonds', 'Socks', 'Cotton', 5, 'White');
INSERT INTO clothes (name, type, material, size, color) VALUES ('Bonds', 'Socks', 'Cotton', 4, 'White');

INSERT INTO clothes (name, type, subtype, material, size, color) VALUES ('Target', 'Bib', 'Pullover', 'Cotton', 5, 'Print');
INSERT INTO clothes (name, type, subtype, material, size, color) VALUES ('Target', 'Bib', 'Velcro', 'Cotton', 4, 'White');
