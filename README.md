# mysql-exercise
SQL => Structure Query Language

SQL or Sequel is a a special purpose programming language that was created to work with relational database, generally to store data and work with everything data

MySQL is a relational database management system(RDBMS) that makes use of SQL Language

---
## Create Database
```bash
    CREATE DATABASE test;
```
---
## Delete Database
```bash
    DROP DATABASE test;
```
---
## Use Database
```bash
    CREATE DATABASE test1;
    USE test1
```
---
## Create a table 
```bash
    CREATE TABLE test(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    email VARCHAR(30),
    PRIMARY KEY(id)
);
```
---
## Delete a table 
```bash
    DROP TABLE test;
```