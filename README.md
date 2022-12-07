# mysql-exercise
SQL => Structure Query Language

SQL or Sequel is a a special purpose programming language that was created to work with relational database, generally to store data and work with everything data

MySQL is a relational database management system(RDBMS) that makes use of SQL Language

---
### Create Database
```bash
    CREATE DATABASE test;
```
---
### Delete Database
```bash
    DROP DATABASE test;
```
---
### Use Database
```bash
    CREATE DATABASE test1;
    USE test1
```
---
### Create a table 
```bash
    CREATE TABLE test(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    email VARCHAR(30),
    PRIMARY KEY(id)
);
```
---
### Delete a table 
```bash
    DROP TABLE test;
```
---
## NOW LET"S CREATE A NEW DATABASE AND TABLE TO  PERFORM CRUD OPERATION

### Create database and table

```bash
    CREATE DATABASE productify;
    use productify;
    CREATE TABLE customers(
        id INT NOT NULL AUTO_INCREMENT,
        firstName VARCHAR(25),
        lastName VARCHAR(25),
        email VARCHAR(25),
        city VARCHAR(25),
        state VARCHAR(25),
        zipCode VARCHAR(25),
        PRIMARY KEY(id)
    );
```
---
## Create/Insert into Database
```bash
    INSERT INTO customers(firstName, lastName, email, city, state) VALUES ("John", "Tolu", "Tolu@gmail.com", "Surulere", "Lagos");
```
---
## INSERT MANY
```bash
    INSERT INTO customers(firstName, lastName, email, city, state, zipCode) VALUES ("Coded", "Hola", "codedhola@gmail.com", "Surulere", "Lagos", "100001"), ("Shola", "Dave", "dave@gmail.com", "bariga", "Lagos", "100002");
```
---


