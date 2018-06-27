/* SCHEMA for SQL database/table */
DROP DATABASE IF EXISTS bamazon_db;

/* Creating a database*/
CREATE DATABASE bamazon_db;

/*Telling it to use the database */
USE bamazon_db;

/*Create a table called products*/
CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR (50) NOT NULL,
    price INTEGER (50) NOT NULL,
    stock_quantity INTEGER (50) NOT NULL,
    PRIMARY KEY (id)
);

/*INSERT 10 fake products*/
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sony a5000", "Cameras", 400, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dodgers Jersey", "Clothing", 200, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Das Boot", "Beverage Products", 10, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Baseball Bat", "Sports", 30, 80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ed Sheeran Autograph", "Memorbilia", 50, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hair brush", "Hair Products", 4, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jelly", "Food", 8, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bread", "Food", 9, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kumbucha", "Food", 8, 90);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coffee", "Beverages", 7, 30);


