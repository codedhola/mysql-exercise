CREATE DATABASE test;


CREATE TABLE book (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) UNIQUE NOT NULL,
	author VARCHAR(255) UNIQUE NOT NULL,
    genre VARCHAR(50) NOT NULL,
    PRICE INT NOT NULL
);