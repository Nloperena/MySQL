DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  stock_quantity INT default 0,
  price INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bananas", "Fruit", 1, 99);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wet Wipes", "Toiletries", 6, 48);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Papaya", "Fruit", 2, 129);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("TV-Remote", "Electronics", 3, 13);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Batteries", "Electronics", 1, 1114);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coca-Cola", "Beverages", 2, 602);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Diamond Earings", "Jewelry", 130, 9);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kool-Aid", "Beverages", 1, 239);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Plunger", "Toiletries", 4, 32);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coconut", "Fruit", 3, 30);
