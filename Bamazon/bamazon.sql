CREATE DATABASE Bamazon;
USE Bamazon;

CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Nintendo Switch', 'toy', 299.99, 3),
('Fisher-Price puppy', 'toy' , 11.99, 30),
('step2 Kitchen', 'toy', 68.99, 5),
('Dancing Elmo', 'toy', 39.99, 21),
('Hoverboard', 'toy', 130.00, 2),
('Barbie Dreamhouse', 'toy', 179.99, 6),
('Indoor playhouse', 'toy', 104.99, 0),
('kids jeep', 'toy', 200.99, 1),
('Fujifilm Instax Camera', 'electronic', 49.99, 10)


