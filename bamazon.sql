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
VALUES ();

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ();

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ();

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ();

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ();

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ();
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ();

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ();

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ();

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ();


