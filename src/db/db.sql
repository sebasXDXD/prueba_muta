CREATE DATABASE recycling_db;
USE recycling_db;

CREATE TABLE users (
    id INT(11) NOT NULL AUTO_INCREMENT,
    username VARCHAR(20) NOT NULL,
    password VARCHAR(100) NOT NULL,
    fullname VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE materials (
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    peso DECIMAL(10, 2) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    users_id INT(11) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (users_id) REFERENCES users(id)
);

CREATE TABLE collections (
  id INT PRIMARY KEY AUTO_INCREMENT,
  material_id INT,
  quantity_collected INT,
  collection_date DATETIME,
  user_id INT(11) NOT NULL,
  FOREIGN KEY (material_id) REFERENCES materials(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);