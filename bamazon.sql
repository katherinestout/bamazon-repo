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
VALUES ("Sony a5000", "Cameras", 400, 5), ("Dodgers Jersey", "Clothing", 200, 10),
("Das Boot", "Beverage Products", 10, 100), ("Baseball Bat", "Sports", 30, 80),
("Ed Sheeran Autograph", "Memorbilia", 50, 2), ("Hair brush", "Hair Products", 4, 100),
("Jelly", "Food", 8, 10),("Bread", "Food", 9, 10),("Kumbucha", "Food", 8, 90), 
("Coffee", "Beverages", 7, 30)


