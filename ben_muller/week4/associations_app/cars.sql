CREATE TABLE cars (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  model TEXT,
  year INTEGER,
  image TEXT,
  dealership_id INTEGER
);

-- seed
INSERT INTO cars (model,year,image, dealership_id) VALUES ('3','2004','https://www.cstatic-images.com/car-pictures/xl/cab40mac172b0101.png',1);
