CREATE TABLE weapons(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  cost INTEGER,
  damage TEXT,
  damageType TEXT,
  weight INTEGER,
  properties TEXT
);

INSERT INTO weapons (name, cost, damage, damageType, weight, properties) VALUES ("Club", 1, "1d4", "Bludgeoning", 2, "['Light']");

INSERT INTO weapons (name, cost, damage, damageType, weight, properties) VALUES ("Dagger", 2, "1d4", "Piercing", 1, "['Finesse', 'Light', 'Thrown(20/60)']");

INSERT INTO weapons (name, cost, damage, damageType, weight, properties) VALUES ("Greatclub", 2, "1d8", "Bludgeoning", 10, "['Two-handed']");

INSERT INTO weapons (name, cost, damage, damageType, weight, properties) VALUES ("Javelin", 5, "1d6", "Piercing", 2, "['Thrown(30/120)']");
